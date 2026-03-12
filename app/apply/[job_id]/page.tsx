"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { 
  Upload, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  ArrowLeft,
  Download,
  Plus,
  X,
  Loader2
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  salary?: string;
  description?: string;
}

interface UserProfile {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  resume_url?: string;
}

interface CVData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
}

export default function JobApplicationPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.job_id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showCVMaker, setShowCVMaker] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    coverLetter: '',
    resumeUrl: ''
  });

  // CV Maker states
  const [cvData, setCvData] = useState<CVData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    experience: [],
    education: [],
    skills: []
  });

  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    duration: '',
    description: ''
  });

  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    year: ''
  });

  const [newSkill, setNewSkill] = useState('');

  // Fetch job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data, error } = await supabase
          .from('jobs_data')
          .select('*')
          .eq('id', jobId)
          .single();

        if (error) {
          console.error('Error fetching job:', error);
          return;
        }

        setJob(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  // Check user authentication and fetch profile
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          // Fetch user profile from seeker_registrations
          const { data: profile, error } = await supabase
            .from('seeker_registrations')
            .select('*')
            .eq('email', user.email)
            .single();

          if (profile && !error) {
            setUserProfile(profile);
            setFormData(prev => ({
              ...prev,
              fullName: profile.full_name || '',
              email: profile.email || '',
              phone: profile.whatsapp || '',
              location: profile.location || '',
              resumeUrl: profile.resume_url || ''
            }));
          }
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    if (!file) return;

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('cv_bucket')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        alert('Failed to upload resume. Please try again.');
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('cv_bucket')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, resumeUrl: publicUrl }));
      setUploadProgress(0);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Save application to applications table (tracking_id will be auto-generated by database trigger)
      const { error: applicationError } = await supabase
        .from('applications')
        .insert({
          job_id: jobId,
          seeker_id: user?.id || null,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          cover_letter: formData.coverLetter,
          resume_url: formData.resumeUrl,
          status: 'pending'
          // tracking_id will be auto-generated by database trigger
          // created_at will be auto-generated by database trigger
        });

      if (applicationError) {
        console.error('Application error:', applicationError);
        alert('Failed to submit application. Please try again.');
        return;
      }

      // Get the inserted application to retrieve the auto-generated tracking ID
      const { data: insertedApplication } = await supabase
        .from('applications')
        .select('tracking_id')
        .eq('job_id', jobId)
        .eq('seeker_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (insertedApplication) {
        setTrackingId(insertedApplication.tracking_id);
      }

      // Move to success step
      setCurrentStep(4);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // CV Maker functions
  const addExperience = () => {
    if (newExperience.company && newExperience.position) {
      setCvData(prev => ({
        ...prev,
        experience: [...prev.experience, newExperience]
      }));
      setNewExperience({ company: '', position: '', duration: '', description: '' });
    }
  };

  const addEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setCvData(prev => ({
        ...prev,
        education: [...prev.education, newEducation]
      }));
      setNewEducation({ institution: '', degree: '', year: '' });
    }
  };

  const addSkill = () => {
    if (newSkill && !cvData.skills.includes(newSkill)) {
      setCvData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
      setNewSkill('');
    }
  };

  const generateCV = async () => {
    // This would integrate with a PDF generation service
    // For now, we'll create a simple text-based CV
    const cvContent = `
CURRICULUM VITAE

${cvData.fullName}
${cvData.email} | ${cvData.phone} | ${cvData.location}

EXPERIENCE:
${cvData.experience.map(exp => `
${exp.position} at ${exp.company}
Duration: ${exp.duration}
${exp.description}
`).join('\n')}

EDUCATION:
${cvData.education.map(edu => `
${edu.degree} - ${edu.institution}
Year: ${edu.year}
`).join('\n')}

SKILLS:
${cvData.skills.join(', ')}
    `.trim();

    // Create blob and upload
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const file = new File([blob], `${cvData.fullName.replace(/\s+/g, '_')}_CV.txt`, { type: 'text/plain' });
    
    await handleFileUpload(file);
    setShowCVMaker(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading application form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Fast Portal
            </Link>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Job Details Card */}
        {job && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <p className="text-lg text-gray-700 mb-2">{job.company}</p>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">{job.salary}</div>
                <div className="text-sm text-gray-500">{job.category}</div>
              </div>
            </div>
          </div>
        )}

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 4 && (
                  <div className={`w-full h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">Personal Info</span>
            <span className="text-sm text-gray-600">Resume</span>
            <span className="text-sm text-gray-600">Cover Letter</span>
            <span className="text-sm text-gray-600">Review</span>
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Current Location
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </form>
            <div className="flex justify-end mt-8">
              <button
                onClick={() => setCurrentStep(2)}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Resume Upload */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Resume Upload</h2>
            
            {formData.resumeUrl ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-green-800">Resume Uploaded Successfully</p>
                    <p className="text-sm text-green-600">You can update it if needed</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <FileText className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Current resume uploaded</span>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Upload your resume (PDF, DOC, DOCX)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 cursor-pointer"
                >
                  Choose File
                </label>
              </div>
            )}

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Uploading...</span>
                  <span>{Math.round(uploadProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* CV Maker Button */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">Don't have a resume?</h3>
              <p className="text-blue-700 mb-4">Create a professional CV in minutes with our CV Maker</p>
              <button
                onClick={() => setShowCVMaker(true)}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Professional CV
              </button>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="border border-gray-300 py-3 px-8 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                disabled={!formData.resumeUrl}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Cover Letter */}
        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Cover Letter (Optional)</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us why you're perfect for this role
              </label>
              <textarea
                rows={8}
                value={formData.coverLetter}
                onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Explain your relevant experience and why you're interested in this position..."
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="border border-gray-300 py-3 px-8 rounded-lg hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700"
              >
                Review Application
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Submit */}
        {currentStep === 4 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Review Your Application</h2>
            
            {!trackingId ? (
              <div>
                <div className="space-y-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Location:</strong> {formData.location}</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Resume</h3>
                    <p className="text-green-600">✓ Resume uploaded successfully</p>
                  </div>
                  
                  {formData.coverLetter && (
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Cover Letter</h3>
                      <p className="text-gray-600">{formData.coverLetter.substring(0, 200)}...</p>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Submitting...
                      </div>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
                <p className="text-gray-600 mb-4">Your application has been successfully submitted.</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-2">Your Tracking ID:</p>
                  <p className="text-lg font-mono font-bold text-blue-600">{trackingId}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">Save this tracking ID for future reference</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => router.push('/find-jobs')}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                  >
                    Browse More Jobs
                  </button>
                  <button
                    onClick={() => router.push('/dashboard/seeker')}
                    className="border border-gray-300 py-2 px-6 rounded-lg hover:bg-gray-50"
                  >
                    My Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CV Maker Modal */}
      {showCVMaker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">Professional CV Maker</h2>
              <button
                onClick={() => setShowCVMaker(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Personal Info */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={cvData.fullName}
                    onChange={(e) => setCvData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={cvData.email}
                    onChange={(e) => setCvData(prev => ({ ...prev, email: e.target.value }))}
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={cvData.phone}
                    onChange={(e) => setCvData(prev => ({ ...prev, phone: e.target.value }))}
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={cvData.location}
                    onChange={(e) => setCvData(prev => ({ ...prev, location: e.target.value }))}
                    className="px-4 py-2 border rounded-lg w-full"
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Work Experience</h3>
                <div className="space-y-2 mb-4">
                  {cvData.experience.map((exp, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <p className="font-medium">{exp.position} at {exp.company}</p>
                      <p className="text-sm text-gray-600">{exp.duration}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    value={newExperience.position}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, position: e.target.value }))}
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={newExperience.duration}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, duration: e.target.value }))}
                    className="px-4 py-2 border rounded-lg"
                  />
                  <button
                    onClick={addExperience}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add Experience
                  </button>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Education</h3>
                <div className="space-y-2 mb-4">
                  {cvData.education.map((edu, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{edu.institution}</p>
                      <p className="text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Institution"
                    value={newEducation.institution}
                    onChange={(e) => setNewEducation(prev => ({ ...prev, institution: e.target.value }))}
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Degree"
                    value={newEducation.degree}
                    onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))}
                    className="px-4 py-2 border rounded-lg"
                  />
                  <button
                    onClick={addEducation}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add Education
                  </button>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cvData.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    className="px-4 py-2 border rounded-lg flex-1"
                  />
                  <button
                    onClick={addSkill}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add Skill
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowCVMaker(false)}
                  className="border border-gray-300 py-2 px-6 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={generateCV}
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Generate & Attach CV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
