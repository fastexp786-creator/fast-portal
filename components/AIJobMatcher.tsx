"use client";

import { useState, useEffect } from "react";
import { Brain, TrendingUp, Target, Zap, Settings, RefreshCw, Lightbulb } from "lucide-react";

interface UserProfile {
  skills: string[];
  experience: string;
  jobType: string;
  locations: string[];
  salary: string;
  industries: string[];
}

interface JobMatch {
  job: any;
  score: number;
  reasons: string[];
  matchType: 'perfect' | 'strong' | 'good' | 'potential';
}

interface AIJobMatcherProps {
  userProfile: UserProfile;
  availableJobs: any[];
  onMatchFound?: (matches: JobMatch[]) => void;
  onJobApply?: (jobId: string) => void;
}

export default function AIJobMatcher({ 
  userProfile, 
  availableJobs, 
  onMatchFound, 
  onJobApply 
}: AIJobMatcherProps) {
  const [matches, setMatches] = useState<JobMatch[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [selectedMatchType, setSelectedMatchType] = useState<string>('all');
  const [showInsights, setShowInsights] = useState(false);

  // AI Matching Algorithm
  const analyzeJobMatches = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    const jobMatches: JobMatch[] = [];
    
    // Simulate AI analysis with progress updates
    for (let i = 0; i < availableJobs.length; i++) {
      const job = availableJobs[i];
      const match = await calculateJobMatch(job, userProfile);
      jobMatches.push(match);
      
      // Update progress
      setAnalysisProgress(Math.round(((i + 1) / availableJobs.length) * 100));
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Sort by score
    jobMatches.sort((a, b) => b.score - a.score);
    
    setMatches(jobMatches);
    setIsAnalyzing(false);
    
    if (onMatchFound) {
      onMatchFound(jobMatches);
    }
  };

  // Calculate match score for a single job
  const calculateJobMatch = async (job: any, profile: UserProfile): Promise<JobMatch> => {
    let score = 0;
    const reasons: string[] = [];
    
    // Skills matching (40% weight)
    const jobSkills = job.skills || [];
    const matchingSkills = profile.skills.filter(skill => 
      jobSkills.some((jobSkill: string) => 
        jobSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(jobSkill.toLowerCase())
      )
    );
    
    if (matchingSkills.length > 0) {
      const skillsScore = (matchingSkills.length / Math.max(profile.skills.length, jobSkills.length)) * 40;
      score += skillsScore;
      reasons.push(`${matchingSkills.length} skills match: ${matchingSkills.join(', ')}`);
    }
    
    // Experience level matching (20% weight)
    if (job.experience === profile.experience) {
      score += 20;
      reasons.push('Perfect experience level match');
    } else if (job.experience === 'mid' && profile.experience === 'entry') {
      score += 10;
      reasons.push('Good growth opportunity');
    } else if (job.experience === 'senior' && profile.experience === 'mid') {
      score += 15;
      reasons.push('Next step in career');
    }
    
    // Job type matching (15% weight)
    if (job.type === profile.jobType) {
      score += 15;
      reasons.push('Preferred work arrangement');
    } else if (job.type === 'remote' && profile.jobType !== 'contract') {
      score += 10;
      reasons.push('Flexible remote option');
    }
    
    // Location matching (15% weight)
    const locationMatch = profile.locations.some(loc => 
      job.location.toLowerCase().includes(loc.toLowerCase()) ||
      job.city?.toLowerCase().includes(loc.toLowerCase()) ||
      job.country?.toLowerCase().includes(loc.toLowerCase())
    );
    
    if (locationMatch) {
      score += 15;
      reasons.push('Preferred location');
    } else if (job.type === 'remote') {
      score += 8;
      reasons.push('Remote work available');
    }
    
    // Salary matching (10% weight)
    if (job.salary) {
      const jobSalaryNum = parseInt(job.salary.replace(/[^0-9]/g, ''));
      const profileSalaryNum = parseInt(profile.salary.replace(/[^0-9]/g, ''));
      
      if (jobSalaryNum >= profileSalaryNum * 0.8 && jobSalaryNum <= profileSalaryNum * 1.5) {
        score += 10;
        reasons.push('Competitive salary range');
      } else if (jobSalaryNum >= profileSalaryNum * 0.6) {
        score += 5;
        reasons.push('Reasonable salary');
      }
    }
    
    // Determine match type
    let matchType: 'perfect' | 'strong' | 'good' | 'potential';
    if (score >= 85) matchType = 'perfect';
    else if (score >= 70) matchType = 'strong';
    else if (score >= 55) matchType = 'good';
    else matchType = 'potential';
    
    return {
      job,
      score: Math.round(score),
      reasons,
      matchType
    };
  };

  // Get match type styling
  const getMatchTypeStyling = (type: string) => {
    const styles = {
      perfect: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', icon: '🎯' },
      strong: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: '⭐' },
      good: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200', icon: '👍' },
      potential: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200', icon: '💡' }
    };
    return styles[type as keyof typeof styles] || styles.potential;
  };

  // Filter matches by type
  const filteredMatches = selectedMatchType === 'all' 
    ? matches 
    : matches.filter(match => match.matchType === selectedMatchType);

  // Get match statistics
  const getMatchStats = () => {
    const stats = matches.reduce((acc, match) => {
      acc[match.matchType] = (acc[match.matchType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return stats;
  };

  const stats = getMatchStats();

  useEffect(() => {
    if (availableJobs.length > 0 && userProfile.skills.length > 0) {
      analyzeJobMatches();
    }
  }, [availableJobs, userProfile]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-gray-900">AI Job Matching</h2>
        </div>
        <button
          onClick={analyzeJobMatches}
          disabled={isAnalyzing}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
          {isAnalyzing ? 'Analyzing...' : 'Re-analyze'}
        </button>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Analyzing matches...</span>
            <span className="text-sm text-gray-500">{analysisProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${analysisProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Match Statistics */}
      {matches.length > 0 && !isAnalyzing && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Match Breakdown</h3>
            <button
              onClick={() => setShowInsights(!showInsights)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              {showInsights ? 'Hide' : 'Show'} Insights
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(stats).map(([type, count]) => {
              const styling = getMatchTypeStyling(type);
              return (
                <div
                  key={type}
                  className={`p-3 rounded-lg border ${styling.bg} ${styling.border} cursor-pointer hover:opacity-80 transition-opacity`}
                  onClick={() => setSelectedMatchType(selectedMatchType === type ? 'all' : type)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{styling.icon}</span>
                    <span className={`text-xs font-medium ${styling.text}`}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* AI Insights */}
      {showInsights && matches.length > 0 && (
        <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">AI Insights</h3>
          </div>
          <div className="space-y-2 text-sm text-purple-800">
            <p>• You have {stats.perfect || 0} perfect matches - these jobs align with 85%+ of your profile</p>
            <p>• Your top skills match {matches.filter(m => m.score > 70).length} positions</p>
            <p>• Consider {stats.potential || 0} potential matches for career growth</p>
            <p>• {matches.filter(m => m.job.type === 'remote').length} remote opportunities available</p>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      {matches.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedMatchType('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedMatchType === 'all'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({matches.length})
          </button>
          {Object.entries(stats).map(([type, count]) => (
            <button
              key={type}
              onClick={() => setSelectedMatchType(type)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedMatchType === type
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} ({count})
            </button>
          ))}
        </div>
      )}

      {/* Matches List */}
      {filteredMatches.length === 0 && !isAnalyzing && matches.length > 0 && (
        <div className="text-center py-8">
          <Target className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">No matches found for this filter</p>
        </div>
      )}

      {filteredMatches.length > 0 && (
        <div className="space-y-4">
          {filteredMatches.map((match, index) => {
            const styling = getMatchTypeStyling(match.matchType);
            return (
              <div
                key={match.job.id}
                className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${styling.bg} ${styling.border}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{match.job.title}</h4>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styling.bg} ${styling.text}`}>
                        {styling.icon} {match.matchType.charAt(0).toUpperCase() + match.matchType.slice(1)} Match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{match.job.company}</p>
                    <p className="text-sm text-gray-600">{match.job.location} • {match.job.salary}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{match.score}%</div>
                    <div className="text-xs text-gray-500">Match Score</div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${match.score}%` }}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-700 mb-1">Why this matches:</div>
                  <div className="flex flex-wrap gap-1">
                    {match.reasons.slice(0, 3).map((reason, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded text-xs bg-white text-gray-700"
                      >
                        {reason}
                      </span>
                    ))}
                    {match.reasons.length > 3 && (
                      <span className="text-xs text-gray-500">+{match.reasons.length - 3} more</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => onJobApply?.(match.job.id)}
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    Apply Now
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {matches.length === 0 && !isAnalyzing && (
        <div className="text-center py-8">
          <Brain className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No matches found</h3>
          <p className="text-gray-600">
            Complete your profile to get better job recommendations.
          </p>
        </div>
      )}
    </div>
  );
}
