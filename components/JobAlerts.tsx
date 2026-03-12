"use client";

import { useState, useEffect } from "react";
import { Bell, Mail, Search, Filter, Check, X, Plus, Trash2 } from "lucide-react";

interface JobAlert {
  id: string;
  name: string;
  keywords: string;
  location: string;
  jobType: string;
  experience: string;
  salaryMin: string;
  salaryMax: string;
  frequency: 'instant' | 'daily' | 'weekly';
  isActive: boolean;
  createdAt: string;
  lastSent?: string;
}

interface JobAlertsProps {
  onAlertCreated?: (alert: JobAlert) => void;
  onAlertDeleted?: (alertId: string) => void;
}

export default function JobAlerts({ onAlertCreated, onAlertDeleted }: JobAlertsProps) {
  const [alerts, setAlerts] = useState<JobAlert[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [email, setEmail] = useState('');
  const [newAlert, setNewAlert] = useState<Partial<JobAlert>>({
    name: '',
    keywords: '',
    location: '',
    jobType: '',
    experience: '',
    salaryMin: '',
    salaryMax: '',
    frequency: 'daily'
  });

  useEffect(() => {
    // Load alerts from localStorage
    const savedAlerts = JSON.parse(localStorage.getItem('jobAlerts') || '[]');
    setAlerts(savedAlerts);
    
    // Load email from localStorage
    const savedEmail = localStorage.getItem('alertEmail') || '';
    setEmail(savedEmail);
  }, []);

  const handleCreateAlert = () => {
    if (!email || !newAlert.name || !newAlert.keywords) {
      alert('Please fill in required fields');
      return;
    }

    const newJobAlert: JobAlert = {
      id: Date.now().toString(),
      name: newAlert.name || '',
      keywords: newAlert.keywords || '',
      location: newAlert.location || '',
      jobType: newAlert.jobType || '',
      experience: newAlert.experience || '',
      salaryMin: newAlert.salaryMin || '',
      salaryMax: newAlert.salaryMax || '',
      frequency: (newAlert.frequency as 'instant' | 'daily' | 'weekly') || 'daily',
      isActive: true,
      createdAt: new Date().toISOString()
    };

    const updatedAlerts = [...alerts, newJobAlert];
    setAlerts(updatedAlerts);
    localStorage.setItem('jobAlerts', JSON.stringify(updatedAlerts));
    localStorage.setItem('alertEmail', email);

    // Reset form
    setNewAlert({
      name: '',
      keywords: '',
      location: '',
      jobType: '',
      experience: '',
      salaryMin: '',
      salaryMax: '',
      frequency: 'daily'
    });
    setShowCreateForm(false);

    if (onAlertCreated) {
      onAlertCreated(newJobAlert);
    }

    // Show success message
    alert('Job alert created successfully!');
  };

  const handleDeleteAlert = (alertId: string) => {
    const updatedAlerts = alerts.filter(alert => alert.id !== alertId);
    setAlerts(updatedAlerts);
    localStorage.setItem('jobAlerts', JSON.stringify(updatedAlerts));

    if (onAlertDeleted) {
      onAlertDeleted(alertId);
    }
  };

  const handleToggleAlert = (alertId: string) => {
    const updatedAlerts = alerts.map(alert =>
      alert.id === alertId ? { ...alert, isActive: !alert.isActive } : alert
    );
    setAlerts(updatedAlerts);
    localStorage.setItem('jobAlerts', JSON.stringify(updatedAlerts));
  };

  const getFrequencyLabel = (frequency: string) => {
    const labels = {
      instant: 'Instant',
      daily: 'Daily',
      weekly: 'Weekly'
    };
    return labels[frequency as keyof typeof labels] || frequency;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Job Alerts</h2>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create Alert
        </button>
      </div>

      {/* Email Setup */}
      {!email && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Set up your email first</h3>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => {
                if (email) {
                  localStorage.setItem('alertEmail', email);
                  alert('Email saved successfully!');
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Save Email
            </button>
          </div>
        </div>
      )}

      {/* Create Alert Form */}
      {showCreateForm && (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-4">Create New Job Alert</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alert Name *
              </label>
              <input
                type="text"
                placeholder="e.g., Software Developer Jobs"
                value={newAlert.name}
                onChange={(e) => setNewAlert({ ...newAlert, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Keywords *
              </label>
              <input
                type="text"
                placeholder="e.g., React, Node.js, JavaScript"
                value={newAlert.keywords}
                onChange={(e) => setNewAlert({ ...newAlert, keywords: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g., Dubai, Remote"
                value={newAlert.location}
                onChange={(e) => setNewAlert({ ...newAlert, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                value={newAlert.jobType}
                onChange={(e) => setNewAlert({ ...newAlert, jobType: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                value={newAlert.experience}
                onChange={(e) => setNewAlert({ ...newAlert, experience: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Levels</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency
              </label>
              <select
                value={newAlert.frequency}
                onChange={(e) => setNewAlert({ ...newAlert, frequency: e.target.value as 'instant' | 'daily' | 'weekly' })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="instant">Instant</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleCreateAlert}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Create Alert
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Alerts List */}
      {alerts.length === 0 ? (
        <div className="text-center py-8">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No job alerts yet</h3>
          <p className="text-gray-600 mb-4">
            Create job alerts to get notified about new opportunities that match your criteria.
          </p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Create Your First Alert
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 border rounded-lg transition-all ${
                alert.isActive
                  ? 'border-blue-200 bg-blue-50'
                  : 'border-gray-200 bg-gray-50 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{alert.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      alert.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {alert.isActive ? 'Active' : 'Paused'}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {getFrequencyLabel(alert.frequency)}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {alert.keywords && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        <Search className="w-3 h-3 mr-1" />
                        {alert.keywords}
                      </span>
                    )}
                    {alert.location && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        📍 {alert.location}
                      </span>
                    )}
                    {alert.jobType && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        💼 {alert.jobType}
                      </span>
                    )}
                    {alert.experience && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        📊 {alert.experience}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Created: {new Date(alert.createdAt).toLocaleDateString()}
                    {alert.lastSent && ` • Last sent: ${new Date(alert.lastSent).toLocaleDateString()}`}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleAlert(alert.id)}
                    className={`p-2 rounded transition-colors ${
                      alert.isActive
                        ? 'bg-green-100 text-green-600 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    {alert.isActive ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleDeleteAlert(alert.id)}
                    className="p-2 rounded bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Email Info */}
      {email && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-green-900">Alerts will be sent to: {email}</p>
              <p className="text-sm text-green-700">
                You'll receive notifications when matching jobs are posted.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
