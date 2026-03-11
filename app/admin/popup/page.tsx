"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface PopupConfig {
  id: string;
  title: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  rotation_order?: number;
  display_duration?: number; // in seconds
}

interface NewPopupForm {
  title: string;
  description: string;
  image_url: string;
  button_text: string;
  button_url: string;
  image_file: File | null;
  rotation_order: number;
  display_duration: number;
}

export default function PopupManagement() {
  const router = useRouter();
  const [popups, setPopups] = useState<PopupConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPopup, setNewPopup] = useState<NewPopupForm>({
    title: "",
    description: "",
    image_url: "",
    button_text: "",
    button_url: "",
    image_file: null,
    rotation_order: 1,
    display_duration: 30 // 30 seconds default
  });
  const [editingPopup, setEditingPopup] = useState<PopupConfig | null>(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadPopups();
  }, []);

  const loadPopups = async () => {
    try {
      setLoading(true);
      console.log("Loading popups from Supabase...");
      
      // Try to load from Supabase, fallback to mock data
      try {
        const { data, error } = await supabase
          .from("popup_configs")
          .select("*")
          .order("rotation_order", { ascending: true });

        if (error) {
          console.error("Supabase query error:", error);
          throw error;
        }
        
        console.log("Successfully loaded from Supabase:", data);
        setPopups(data || []);
        setError("");
      } catch (supabaseError) {
        console.log("Using mock data - table not created yet:", supabaseError);
        const mockData: PopupConfig[] = [
          {
            id: "1",
            title: "SPECIAL RECRUITMENT!",
            description: "Exclusive 2026 Job Openings for Europe & Gulf.",
            image_url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500",
            button_text: "WhatsApp Us",
            button_url: "https://wa.me/923100570707",
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            rotation_order: 1,
            display_duration: 30
          }
        ];
        setPopups(mockData);
        setError("⚠️ Using demo data - Please create popup_configs table in Supabase");
      }
      
    } catch (error) {
      console.error("Error loading popups:", error);
      setError("Failed to load popups");
    } finally {
      setLoading(false);
    }
  };

  const handleAddPopup = async () => {
    if (!newPopup.title.trim() || !newPopup.description.trim()) return;

    try {
      // Process image URL - auto-resize if needed
      let processedImageUrl = newPopup.image_url.trim();
      
      // Handle uploaded file (data URL)
      if (processedImageUrl && processedImageUrl.startsWith('data:')) {
        // Keep data URL as is (uploaded file)
        // In production, this would upload to Supabase Storage
      } else if (processedImageUrl && !processedImageUrl.includes('unsplash.com')) {
        // Shorten long URLs for external images
        try {
          const url = new URL(processedImageUrl);
          
          // Remove unnecessary parameters for cleaner URL
          const paramsToRemove = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref', 'source', 'fbclid', 'gclid'];
          paramsToRemove.forEach(param => url.searchParams.delete(param));
          
          // Add resize parameters for optimal popup display
          if (url.hostname.includes('unsplash.com')) {
            // Unsplash already handles optimization
            processedImageUrl = url.toString();
          } else if (url.hostname.includes('picsum.photos')) {
            // Picsum photos - add size parameters
            url.searchParams.set('w', '500');
            url.searchParams.set('h', '160');
            processedImageUrl = url.toString();
          } else {
            // Other external images - add resize if supported
            if (url.hostname.includes('cloudinary.com') || 
                url.hostname.includes('imagekit.io') || 
                url.hostname.includes('imgix.net')) {
              url.searchParams.set('w', '500');
              url.searchParams.set('h', '160');
              url.searchParams.set('fit', 'cover');
              url.searchParams.set('auto', 'compress');
            }
            processedImageUrl = url.toString();
          }
        } catch (urlError) {
          // If URL construction fails, use original URL
          console.log("Could not process image URL, using original:", processedImageUrl);
        }
      }

      // Set default image if no image provided
      if (!processedImageUrl) {
        processedImageUrl = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=500";
      }
      
      // Calculate next rotation order
      const nextRotationOrder = Math.max(...popups.map(p => p.rotation_order || 0), 0) + 1;

      // Try to add to Supabase, fallback to local state
      try {
        console.log("Attempting to save to Supabase...");
        const { data: savedData, error: supabaseError } = await supabase
          .from("popup_configs")
          .insert({
            title: newPopup.title.trim(),
            description: newPopup.description.trim(),
            image_url: processedImageUrl,
            button_text: newPopup.button_text.trim() || "Learn More",
            button_url: newPopup.button_url.trim() || "#",
            is_active: true,
            rotation_order: nextRotationOrder,
            display_duration: newPopup.display_duration || 30
          })
          .select()
          .single();

        if (supabaseError) {
          console.error("Supabase error:", supabaseError);
          throw supabaseError;
        }
        
        console.log("Successfully saved to Supabase:", savedData);
        setPopups([savedData, ...popups]);
        setError("");
      } catch (supabaseError) {
        console.log("Supabase failed, using local state - table not created yet:", supabaseError);
        const newPopupObj: PopupConfig = {
          id: Date.now().toString(),
          title: newPopup.title.trim(),
          description: newPopup.description.trim(),
          image_url: processedImageUrl,
          button_text: newPopup.button_text.trim() || "Learn More",
          button_url: newPopup.button_url.trim() || "#",
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          rotation_order: nextRotationOrder,
          display_duration: newPopup.display_duration || 30
        };
        setPopups([newPopupObj, ...popups]);
        setError("⚠️ Using local storage - Please create popup_configs table in Supabase");
      }
      
      setNewPopup({ title: "", description: "", image_url: "", button_text: "", button_url: "", image_file: null, rotation_order: 1, display_duration: 30 });
      setError("");
    } catch (error) {
      console.error("Error adding popup:", error);
      setError("Failed to add popup - using demo mode");
    }
  };

  const handleUpdatePopup = async () => {
    if (!editingPopup) return;

    try {
      const { error } = await supabase
        .from("popup_configs")
        .update({
          title: editingPopup.title,
          description: editingPopup.description,
          image_url: editingPopup.image_url,
          button_text: editingPopup.button_text,
          button_url: editingPopup.button_url,
          is_active: editingPopup.is_active,
          rotation_order: editingPopup.rotation_order,
          display_duration: editingPopup.display_duration,
          updated_at: new Date().toISOString()
        })
        .eq("id", editingPopup.id);

      if (error) throw error;
      
      setPopups(popups.map(popup => 
        popup.id === editingPopup.id ? editingPopup : popup
      ));
      setEditingPopup(null);
      setError("");
    } catch (error) {
      console.error("Error updating popup:", error);
      setError("Failed to update popup");
    }
  };

  const handleDeletePopup = async (id: string) => {
    try {
      const { error } = await supabase
        .from("popup_configs")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setPopups(popups.filter(popup => popup.id !== id));
      setError("");
    } catch (error) {
      console.error("Error deleting popup:", error);
      setError("Failed to delete popup");
    }
  };

  const handleToggleActive = async (popup: PopupConfig) => {
    try {
      const { error } = await supabase
        .from("popup_configs")
        .update({ is_active: !popup.is_active })
        .eq("id", popup.id);

      if (error) throw error;
      
      setPopups(popups.map(p => 
        p.id === popup.id ? { ...p, is_active: !p.is_active } : p
      ));
    } catch (error) {
      console.error("Error toggling popup:", error);
      setError("Failed to toggle popup");
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/^image\/(jpeg|jpg|png|gif|webp)$/)) {
      setError("Please upload a valid image file (JPG, PNG, GIF, WebP)");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    setUploading(true);
    setError("");

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('file', file);

      // For now, convert to local preview URL
      // In production, this would upload to Supabase Storage
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result;
        if (typeof dataUrl === 'string') {
          setNewPopup({ 
            ...newPopup, 
            image_url: dataUrl,
            image_file: file 
          });
        }
      };
      reader.readAsDataURL(file);
      
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const input = document.createElement('input');
      input.type = 'file';
      input.files = files;
      const mockEvent = { target: input } as React.ChangeEvent<HTMLInputElement>;
      handleImageUpload(mockEvent);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          padding: 24px;
          margin-bottom: 24px;
        }
        .btn {
          padding: 8px 16px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        .btn-primary {
          background: #3b82f6;
          color: white;
        }
        .btn-primary:hover {
          background: #2563eb;
        }
        .btn-success {
          background: #10b981;
          color: white;
        }
        .btn-danger {
          background: #ef4444;
          color: white;
        }
        .btn-secondary {
          background: #6b7280;
          color: white;
        }
        .input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
        }
        .popup-item {
          display: flex;
          align-items: center;
          padding: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          margin-bottom: 12px;
          background: white;
        }
        .popup-preview {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
          margin-right: 16px;
        }
        .popup-content {
          flex: 1;
        }
        .popup-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px 0;
        }
        .popup-desc {
          font-size: 14px;
          color: #6b7280;
          margin: 0 0 8px 0;
        }
        .popup-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .status-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        .status-active {
          background: #dcfce7;
          color: #166534;
        }
        .status-inactive {
          background: #fef2f2;
          color: #dc2626;
        }
      `}</style>

      {/* Header */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #e5e7eb", padding: "16px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827", margin: 0 }}>
                Popup Management
              </h1>
              <p style={{ color: "#6b7280", fontSize: "14px", margin: "4px 0 0 0" }}>
                Manage homepage popup promotions
              </p>
            </div>
            <Link href="/admin/dashboard" style={{ color: "#6b7280", textDecoration: "none" }}>
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        {error && (
          <div style={{ backgroundColor: "#fef2f2", color: "#dc2626", padding: "12px", borderRadius: "6px", marginBottom: "24px" }}>
            {error}
          </div>
        )}

        {/* Add New Popup */}
        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
            Add New Popup
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <input
              type="text"
              className="input"
              placeholder="Popup Title"
              value={newPopup.title}
              onChange={(e) => setNewPopup({ ...newPopup, title: e.target.value })}
            />
            <input
              type="text"
              className="input"
              placeholder="Button Text (e.g., WhatsApp Us)"
              value={newPopup.button_text}
              onChange={(e) => setNewPopup({ ...newPopup, button_text: e.target.value })}
            />
            <input
              type="number"
              className="input"
              placeholder="Display Duration (seconds)"
              value={newPopup.display_duration}
              onChange={(e) => setNewPopup({ ...newPopup, display_duration: parseInt(e.target.value) || 30 })}
              min="5"
              max="300"
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <textarea
              className="input"
              placeholder="Popup Description"
              value={newPopup.description}
              onChange={(e) => setNewPopup({ ...newPopup, description: e.target.value })}
              rows={3}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            {/* Drag & Drop Area */}
            <div 
              style={{
                border: "2px dashed #d1d5db",
                borderRadius: "8px",
                padding: "32px",
                textAlign: "center",
                backgroundColor: "#f8fafc",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onDragOver={handleDragOver}
              onDragEnter={handleDragOver}
              onDrop={handleDrop}
              onClick={() => document.getElementById('image-upload')?.click()}
            >
              {uploading ? (
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ 
                    width: "24px", 
                    height: "24px", 
                    border: "3px solid #e5e7eb",
                    borderTop: "3px solid #3b82f6",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    margin: "0 auto"
                  }}></div>
                  <span style={{ color: "#6b7280" }}>Uploading image...</span>
                </div>
              ) : newPopup.image_url ? (
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img 
                    src={newPopup.image_url} 
                    alt="Preview"
                    style={{ 
                      width: "80px", 
                      height: "80px", 
                      borderRadius: "8px", 
                      objectFit: "cover",
                      border: "1px solid #e5e7eb"
                    }}
                  />
                  <div>
                    <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#6b7280" }}>Image uploaded successfully!</p>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setNewPopup({ ...newPopup, image_url: "", image_file: null })}
                      style={{ fontSize: "12px", padding: "6px 12px" }}
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: "24px", color: "#6b7280", marginBottom: "16px" }}>📁</div>
                  <p style={{ color: "#6b7280", marginBottom: "8px" }}>Drag & drop image here or click to browse</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af" }}>Supports: JPG, PNG, GIF, WebP (Max 5MB)</p>
                </div>
              )}
            </div>
            
            {/* Hidden File Input */}
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <input
              type="url"
              className="input"
              placeholder="Or paste Image URL"
              value={newPopup.image_url}
              onChange={(e) => setNewPopup({ ...newPopup, image_url: e.target.value })}
            />
            <input
              type="url"
              className="input"
              placeholder="Button URL (where button links)"
              value={newPopup.button_url}
              onChange={(e) => setNewPopup({ ...newPopup, button_url: e.target.value })}
            />
          </div>
          <button className="btn btn-primary" onClick={handleAddPopup}>
            Add Popup
          </button>
        </div>

        {/* Popups List */}
        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
            Current Popups ({popups.length})
          </h2>
          
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <div style={{ 
                width: "32px", 
                height: "32px", 
                border: "3px solid #e5e7eb",
                borderTop: "3px solid #3b82f6",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto 16px auto"
              }}></div>
              <p style={{ color: "#6b7280" }}>Loading popups...</p>
            </div>
          ) : popups.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
              No popups found. Add your first popup above.
            </div>
          ) : (
            <div>
              {popups.map((popup) => (
                <div key={popup.id} className="popup-item">
                  <img 
                    src={popup.image_url} 
                    alt={popup.title}
                    className="popup-preview"
                  />
                  <div className="popup-content">
                    <h3 className="popup-title">
                      {editingPopup?.id === popup.id ? (
                        <input
                          type="text"
                          className="input"
                          value={editingPopup.title}
                          onChange={(e) => setEditingPopup({ ...editingPopup, title: e.target.value })}
                          style={{ marginBottom: "8px" }}
                        />
                      ) : (
                        popup.title
                      )}
                    </h3>
                    <p className="popup-desc">
                      {editingPopup?.id === popup.id ? (
                        <textarea
                          className="input"
                          value={editingPopup.description}
                          onChange={(e) => setEditingPopup({ ...editingPopup, description: e.target.value })}
                          rows={2}
                          style={{ marginBottom: "8px" }}
                        />
                      ) : (
                        popup.description
                      )}
                    </p>
                    <div className="popup-actions">
                      <span className={`status-badge ${popup.is_active ? "status-active" : "status-inactive"}`}>
                        {popup.is_active ? "Active" : "Inactive"}
                      </span>
                      
                      <button
                        className="btn btn-success"
                        onClick={() => handleToggleActive(popup)}
                        style={{ fontSize: "12px", padding: "6px 12px" }}
                      >
                        {popup.is_active ? "Disable" : "Enable"}
                      </button>
                      
                      {editingPopup?.id === popup.id ? (
                        <>
                          <button
                            className="btn btn-primary"
                            onClick={handleUpdatePopup}
                            style={{ fontSize: "12px", padding: "6px 12px" }}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={() => setEditingPopup(null)}
                            style={{ fontSize: "12px", padding: "6px 12px" }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => setEditingPopup(popup)}
                          style={{ fontSize: "12px", padding: "6px 12px" }}
                        >
                          Edit
                        </button>
                      )}
                      
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeletePopup(popup.id)}
                        style={{ fontSize: "12px", padding: "6px 12px" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
            Quick Guide
          </h2>
          <ul style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", paddingLeft: "20px" }}>
            <li>Add new popup promotions using the form above</li>
            <li>Upload JPG/PNG images or use image URLs</li>
            <li>Drag & drop images directly into the upload area</li>
            <li>Set custom button text and destination URL</li>
            <li>Configure display duration (5-300 seconds)</li>
            <li>Popups automatically rotate based on display duration</li>
            <li>Toggle popups between Active/Inactive status</li>
            <li>Edit existing popups by clicking Edit button</li>
            <li>Delete unwanted popups using Delete button</li>
            <li>Only Active popups will appear in rotation</li>
          </ul>
          
          <div style={{ marginTop: "20px", padding: "16px", backgroundColor: "#f0f9ff", borderRadius: "8px", border: "1px solid #bae6fd" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#0369a1", margin: "0 0 8px 0" }}>
              🔄 Auto-Rotation Feature
            </h3>
            <p style={{ fontSize: "14px", color: "#0c4a6e", margin: "0", lineHeight: "1.5" }}>
              Active popups will automatically rotate based on their display duration. 
              If you have 3 popups with 30 seconds each, they'll cycle every 30 seconds.
              The system ensures every popup gets equal display time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
