"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { 
  ArrowLeft, 
  User, 
  Briefcase, 
  Search, 
  FileText, 
  Upload, 
  CheckCircle,
  Building,
  MapPin,
  DollarSign,
  Calendar,
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

function ApplyPageContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('job_id');
  const [job, setJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<string>('');

  // Fetch specific job if job_id is provided
  useEffect(() => {
    const fetchJob = async () => {
      if (jobId) {
        try {
          const { data, error } = await supabase
            .from('jobs_data')
            .select('*')
            .eq('id', jobId)
            .single();

          if (data && !error) {
            setJob(data);
            setSelectedJob(jobId);
          }
        } catch (error) {
          console.error('Error fetching job:', error);
        }
      }
      setLoading(false);
    };

    fetchJob();
  }, [jobId]);

  // Fetch all jobs for dropdown
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase
          .from('jobs_data')
          .select('id, title, company, location, category, salary')
          .eq('status', 'active')
          .order('created_at', { ascending: false })
          .limit(20);

        if (data && !error) {
          setJobs(data);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    if (!jobId) {
      fetchJobs();
    }
  }, [jobId]);

  const handleJobSelect = (jobId: string) => {
    setSelectedJob(jobId);
    const selectedJobData = jobs.find(j => j.id === jobId);
    if (selectedJobData) {
      setJob(selectedJobData);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading application...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Fast Portal
            </Link>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Job Selection or Display */}
        {job ? (
          /* Specific Job Application */
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <p className="text-lg text-gray-700 mb-4">{job.company}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  {job.category}
                </div>
                {job.salary && (
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Job ID: {job.id}</div>
              </div>
            </div>

            {job.description && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-gray-600 whitespace-pre-wrap">{job.description}</p>
              </div>
            )}

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Apply for this Position</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href={`/apply/${job.id}`}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Apply with Smart Form
                </Link>
                <Link
                  href="/auth/register/seeker"
                  className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                >
                  Create Profile First
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* Job Selection Dropdown */
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Job to Apply</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose a position:
              </label>
              <select
                value={selectedJob}
                onChange={(e) => handleJobSelect(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a job...</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.title} - {job.company} ({job.location})
                  </option>
                ))}
              </select>
            </div>

            {selectedJob && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 mb-4">
                  You've selected: <strong>{jobs.find(j => j.id === selectedJob)?.title}</strong>
                </p>
                <Link
                  href={`/apply/${selectedJob}`}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
                >
                  Proceed to Application
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Alternative Options */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Other Options</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Search className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="font-semibold text-gray-900">Browse More Jobs</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Explore thousands of job opportunities across various industries and locations.
              </p>
              <Link
                href="/find-jobs"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Browse Jobs →
              </Link>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-green-600 mr-3" />
                <h4 className="font-semibold text-gray-900">Create Profile</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Build your professional profile and get noticed by top employers.
              </p>
              <Link
                href="/auth/register/seeker"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Create Profile →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Are you an employer looking to hire?
            </p>
            <Link
              href="/auth/vendor-register"
              className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-flex items-center"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Post Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ApplyPageContent />
    </Suspense>
  );
}
