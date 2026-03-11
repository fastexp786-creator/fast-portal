"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    // Clear cookie and redirect
    document.cookie = "fjc_admin_bypass=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/auth/login");
  };

  // Show loading only on server-side
  if (!isClient) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px auto'
          }}></div>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {/* Header */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Admin Dashboard</h1>
              <span style={{ marginLeft: '12px', padding: '4px 8px', backgroundColor: '#dcfce7', color: '#166534', fontSize: '12px', fontWeight: 'medium', borderRadius: '9999px' }}>
                Admin
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Link href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>
                View Site
              </Link>
              <button
                onClick={handleLogout}
                style={{ backgroundColor: '#ef4444', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
        {/* Ticker Management */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'medium', color: '#111827', margin: 0 }}>News Ticker Management</h2>
            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px', margin: '4px 0 0 0' }}>Manage scrolling news messages on homepage</p>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <Link
                href="/admin/ticker"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'medium', borderRadius: '8px', textDecoration: 'none' }}
              >
                <span style={{ fontSize: '20px', marginRight: '8px' }}>📰</span>
                Manage Ticker Messages
              </Link>
            </div>
            
            <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'medium', color: '#111827', marginBottom: '8px', margin: '0 0 8px 0' }}>Quick Info:</h3>
              <ul style={{ fontSize: '14px', color: '#6b7280', listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '4px' }}>• Add, edit, delete ticker messages</li>
                <li style={{ marginBottom: '4px' }}>• Set priority order for messages</li>
                <li style={{ marginBottom: '4px' }}>• Enable/disable messages</li>
                <li>• Real-time updates on homepage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'medium', color: '#111827', margin: 0 }}>Quick Actions</h2>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <Link 
                href="/admin/ticker" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '16px', 
                  backgroundColor: '#f3f4f6', 
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#3b82f6', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px'
                }}>
                  📰
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 4px 0' }}>Manage Ticker</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Update homepage news messages</p>
                </div>
              </Link>
              <Link 
                href="/admin/popup" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '16px', 
                  backgroundColor: '#f3f4f6', 
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '18px'
                }}>
                  🎯
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: '0 0 4px 0' }}>Manage Popup</h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Control homepage promotions</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', marginTop: '32px' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #e5e7eb' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'medium', color: '#111827', margin: 0 }}>Recent Activity</h2>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flexShrink: 0, width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%', marginTop: '8px' }}></div>
                <div>
                  <p style={{ fontSize: '14px', color: '#111827', margin: '0 0 4px 0' }}>Admin dashboard accessed</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Just now</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flexShrink: 0, width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', marginTop: '8px' }}></div>
                <div>
                  <p style={{ fontSize: '14px', color: '#111827', margin: '0 0 4px 0' }}>Ticker management system ready</p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>1 minute ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
