"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface TickerMessage {
  id: string;
  message: string;
  priority: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function TickerManagement() {
  const router = useRouter();
  const [messages, setMessages] = useState<TickerMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState<TickerMessage | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      
      // Temporary mock data until table is created
      const mockData: TickerMessage[] = [
        {
          id: "1",
          message: "Welcome to Fast Portal - Your Gateway to Global Opportunities!",
          priority: 1,
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: "2", 
          message: "New job opportunities available in UAE, Saudi Arabia, and UK!",
          priority: 2,
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: "3",
          message: "Apply now for premium visa services and travel assistance!",
          priority: 3,
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];

      // Try to load from Supabase, fallback to mock data
      try {
        const { data, error } = await supabase
          .from("ticker_messages")
          .select("*")
          .order("priority", { ascending: true });

        if (error) throw error;
        setMessages(data || mockData);
      } catch (supabaseError) {
        console.log("Using mock data - table not created yet");
        setMessages(mockData);
      }
      
      setError("");
    } catch (error) {
      console.error("Error loading ticker messages:", error);
      setError("Using demo data - create table in Supabase for full functionality");
    } finally {
      setLoading(false);
    }
  };

  const handleAddMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      // Try to add to Supabase, fallback to local state
      try {
        const { data, error } = await supabase
          .from("ticker_messages")
          .insert({
            message: newMessage.trim(),
            priority: messages.length + 1,
            is_active: true
          })
          .select()
          .single();

        if (error) throw error;
        setMessages([...messages, data]);
      } catch (supabaseError) {
        console.log("Adding to local state - table not created yet");
        const newMessageObj: TickerMessage = {
          id: Date.now().toString(),
          message: newMessage.trim(),
          priority: messages.length + 1,
          is_active: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setMessages([...messages, newMessageObj]);
      }
      
      setNewMessage("");
      setError("");
    } catch (error) {
      console.error("Error adding message:", error);
      setError("Failed to add message - using demo mode");
    }
  };

  const handleUpdateMessage = async () => {
    if (!editingMessage) return;

    try {
      const { error } = await supabase
        .from("ticker_messages")
        .update({
          message: editingMessage.message,
          is_active: editingMessage.is_active
        })
        .eq("id", editingMessage.id);

      if (error) throw error;
      
      setMessages(messages.map(msg => 
        msg.id === editingMessage.id ? editingMessage : msg
      ));
      setEditingMessage(null);
      setError("");
    } catch (error) {
      console.error("Error updating message:", error);
      setError("Failed to update message");
    }
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      const { error } = await supabase
        .from("ticker_messages")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setMessages(messages.filter(msg => msg.id !== id));
      setError("");
    } catch (error) {
      console.error("Error deleting message:", error);
      setError("Failed to delete message");
    }
  };

  const handleToggleActive = async (message: TickerMessage) => {
    try {
      const { error } = await supabase
        .from("ticker_messages")
        .update({ is_active: !message.is_active })
        .eq("id", message.id);

      if (error) throw error;
      
      setMessages(messages.map(msg => 
        msg.id === message.id ? { ...msg, is_active: !msg.is_active } : msg
      ));
    } catch (error) {
      console.error("Error toggling message:", error);
      setError("Failed to toggle message");
    }
  };

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;
    
    const newMessages = [...messages];
    [newMessages[index], newMessages[index - 1]] = [newMessages[index - 1], newMessages[index]];
    
    try {
      await Promise.all(newMessages.map((msg, idx) => 
        supabase.from("ticker_messages").update({ priority: idx + 1 }).eq("id", msg.id)
      ));
      setMessages(newMessages);
    } catch (error) {
      console.error("Error reordering messages:", error);
      setError("Failed to reorder messages");
    }
  };

  const handleMoveDown = async (index: number) => {
    if (index === messages.length - 1) return;
    
    const newMessages = [...messages];
    [newMessages[index], newMessages[index + 1]] = [newMessages[index + 1], newMessages[index]];
    
    try {
      await Promise.all(newMessages.map((msg, idx) => 
        supabase.from("ticker_messages").update({ priority: idx + 1 }).eq("id", msg.id)
      ));
      setMessages(newMessages);
    } catch (error) {
      console.error("Error reordering messages:", error);
      setError("Failed to reorder messages");
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
        .message-item {
          display: flex;
          align-items: center;
          padding: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          margin-bottom: 12px;
          background: white;
        }
        .message-text {
          flex: 1;
          font-size: 14px;
          color: #374151;
        }
        .message-actions {
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
                News Ticker Management
              </h1>
              <p style={{ color: "#6b7280", fontSize: "14px", margin: "4px 0 0 0" }}>
                Manage scrolling news messages on homepage
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

        {/* Add New Message */}
        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
            Add New Message
          </h2>
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              type="text"
              className="input"
              placeholder="Enter ticker message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddMessage()}
            />
            <button className="btn btn-primary" onClick={handleAddMessage}>
              Add Message
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="card">
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "16px" }}>
            Current Messages ({messages.length})
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
              <p style={{ color: "#6b7280" }}>Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
              No ticker messages found. Add your first message above.
            </div>
          ) : (
            <div>
              {messages.map((message, index) => (
                <div key={message.id} className="message-item">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginRight: "16px" }}>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                      style={{ opacity: index === 0 ? 0.5 : 1, cursor: index === 0 ? "not-allowed" : "pointer" }}
                    >
                      ↑
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleMoveDown(index)}
                      disabled={index === messages.length - 1}
                      style={{ opacity: index === messages.length - 1 ? 0.5 : 1, cursor: index === messages.length - 1 ? "not-allowed" : "pointer" }}
                    >
                      ↓
                    </button>
                  </div>
                  
                  <div className="message-text">
                    {editingMessage?.id === message.id ? (
                      <input
                        type="text"
                        className="input"
                        value={editingMessage.message}
                        onChange={(e) => setEditingMessage({ ...editingMessage, message: e.target.value })}
                      />
                    ) : (
                      message.message
                    )}
                  </div>
                  
                  <div className="message-actions">
                    <span className={`status-badge ${message.is_active ? "status-active" : "status-inactive"}`}>
                      {message.is_active ? "Active" : "Inactive"}
                    </span>
                    
                    <button
                      className="btn btn-success"
                      onClick={() => handleToggleActive(message)}
                      style={{ fontSize: "12px", padding: "6px 12px" }}
                    >
                      {message.is_active ? "Disable" : "Enable"}
                    </button>
                    
                    {editingMessage?.id === message.id ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={handleUpdateMessage}
                          style={{ fontSize: "12px", padding: "6px 12px" }}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setEditingMessage(null)}
                          style={{ fontSize: "12px", padding: "6px 12px" }}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => setEditingMessage(message)}
                        style={{ fontSize: "12px", padding: "6px 12px" }}
                      >
                        Edit
                      </button>
                    )}
                    
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteMessage(message.id)}
                      style={{ fontSize: "12px", padding: "6px 12px" }}
                    >
                      Delete
                    </button>
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
            <li>Add new ticker messages using the form above</li>
            <li>Use arrow buttons (↑↓) to change message priority order</li>
            <li>Toggle messages between Active/Inactive status</li>
            <li>Edit existing messages by clicking the Edit button</li>
            <li>Delete unwanted messages using the Delete button</li>
            <li>Only Active messages will appear on the homepage ticker</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
