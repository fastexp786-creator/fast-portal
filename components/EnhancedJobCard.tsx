"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, MapPin, Clock, DollarSign, Briefcase, Building, Star, Filter, Bell, Share2, ExternalLink } from "lucide-react";

interface JobCard {
  id: string;
  title: string;
  company: string;
  location: string;
  city: string;
  country: string;
  salary: string;
  salaryMin?: number;
  salaryMax?: number;
  type: "full-time" | "part-time" | "contract" | "remote";
  experience: "entry" | "mid" | "senior";
  postedAt: string;
  urgency?: "urgent" | "new" | "hot";
  description: string;
  skills: string[];
  benefits: string[];
  logo?: string;
  saved?: boolean;
}

interface EnhancedJobCardProps {
  job: JobCard;
  onSave?: (jobId: string) => void;
  onShare?: (job: JobCard) => void;
  showQuickView?: boolean;
}

export default function EnhancedJobCard({ 
  job, 
  onSave, 
  onShare, 
  showQuickView = true 
}: EnhancedJobCardProps) {
  const [isSaved, setIsSaved] = useState(job.saved || false);
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickViewModal, setShowQuickViewModal] = useState(false);

  useEffect(() => {
    // Load saved state from localStorage
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    setIsSaved(savedJobs.includes(job.id));
  }, [job.id]);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    let newSavedJobs;
    
    if (isSaved) {
      newSavedJobs = savedJobs.filter((id: string) => id !== job.id);
    } else {
      newSavedJobs = [...savedJobs, job.id];
    }
    
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
    setIsSaved(!isSaved);
    
    if (onSave) {
      onSave(job.id);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onShare) {
      onShare(job);
    } else {
      // Default share functionality
      if (navigator.share) {
        navigator.share({
          title: job.title,
          text: `Check out this job: ${job.title} at ${job.company}`,
          url: window.location.href + '/job/' + job.id
        });
      }
    }
  };

  const getUrgencyBadge = () => {
    if (!job.urgency) return null;
    
    const badges = {
      urgent: { bg: 'bg-red-500', text: 'text-white', label: 'Urgent' },
      new: { bg: 'bg-green-500', text: 'text-white', label: 'New' },
      hot: { bg: 'bg-orange-500', text: 'text-white', label: 'Hot' }
    };
    
    const badge = badges[job.urgency as keyof typeof badges];
    if (!badge) return null;
    
    return (
      <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text} z-10`}>
        {badge.label}
      </span>
    );
  };

  const getJobTypeBadge = () => {
    const types = {
      'full-time': { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Full-time' },
      'part-time': { bg: 'bg-purple-100', text: 'text-purple-800', label: 'Part-time' },
      'contract': { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Contract' },
      'remote': { bg: 'bg-green-100', text: 'text-green-800', label: 'Remote' }
    };
    
    const type = types[job.type as keyof typeof types] || types['full-time'];
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${type.bg} ${type.text}`}>
        <Briefcase className="w-3 h-3 mr-1" />
        {type.label}
      </span>
    );
  };

  const getLocationTag = () => {
    return (
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-1 text-red-500" />
        <span className="font-medium">{job.city}, {job.country}</span>
      </div>
    );
  };

  const getSalaryDisplay = () => {
    return (
      <div className="flex items-center text-lg font-bold text-green-600 mb-3">
        <DollarSign className="w-5 h-5 mr-1" />
        {job.salary}
      </div>
    );
  };

  const getTimeAgo = () => {
    return (
      <div className="flex items-center text-xs text-gray-500 mb-3">
        <Clock className="w-3 h-3 mr-1" />
        {job.postedAt}
      </div>
    );
  };

  return (
    <>
      <div 
        className={`relative bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ minHeight: '320px' }}
      >
        {/* Urgency Badge */}
        {getUrgencyBadge()}
        
        {/* Header Section */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              {job.logo ? (
                <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-lg mr-3" />
              ) : (
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-5 h-5 text-gray-500" />
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{job.company}</h3>
                {getTimeAgo()}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className={`p-2 rounded-full transition-colors ${isSaved ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400 hover:text-red-600'}`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Job Title */}
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{job.title}</h2>
          
          {/* Location */}
          {getLocationTag()}
          
          {/* Salary */}
          {getSalaryDisplay()}
          
          {/* Job Type Badge */}
          <div className="mb-3">
            {getJobTypeBadge()}
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-4 flex-1">
          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{job.description}</p>
          
          {/* Skills */}
          {job.skills && job.skills.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {job.skills.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
                {job.skills.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                    +{job.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {job.benefits.slice(0, 2).map((benefit, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Section */}
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <span className="font-medium">{job.experience} level</span>
            </div>
            
            {showQuickView && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowQuickViewModal(true);
                }}
                className="flex items-center px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Quick View
              </button>
            )}
          </div>
        </div>
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        )}
      </div>
      
      {/* Quick View Modal */}
      {showQuickViewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                <button
                  onClick={() => setShowQuickViewModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  {job.logo ? (
                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg mr-3" />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                      <Building className="w-6 h-6 text-gray-500" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.company}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.city}, {job.country}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Salary</h4>
                    <p className="text-green-600 font-bold">{job.salary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Job Type</h4>
                    <p>{getJobTypeBadge()}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
                  <p className="text-gray-600">{job.description}</p>
                </div>
                
                {job.skills && job.skills.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-4 pt-4">
                  <Link 
                    href={`/job/${job.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply Now
                  </Link>
                  <button
                    onClick={handleSave}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isSaved 
                        ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {isSaved ? 'Saved' : 'Save Job'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
