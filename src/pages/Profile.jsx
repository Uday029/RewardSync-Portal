import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Camera } from 'lucide-react';
import { showToast } from '../utils/toast';

const Profile = () => {
  const handleSave = () => {
    showToast("Profile settings saved successfully!");
  };

  return (
    <div>
      <h1 className="animate-fade-in stagger-1">Employee Profile</h1>
      <p className="animate-fade-in stagger-1" style={{ marginBottom: '2rem' }}>Manage your personal information and preferences.</p>

      <div className="grid-cols-3 animate-fade-in stagger-2">
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', height: 'fit-content' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
            <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=E51636&color=fff&size=120" alt="Profile" style={{ borderRadius: '50%', border: '4px solid var(--border-color)' }} />
            <button 
              onClick={() => showToast("Avatar update feature coming soon!")}
              style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--kfc-red)', color: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
              <Camera size={16} />
            </button>
          </div>
          <h2>Rahul Sharma</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Crew Member</p>
          <span className="badge badge-success" style={{ marginBottom: '1.5rem' }}>Active Employee</span>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Briefcase size={18} color="var(--text-secondary)" />
              <span style={{ fontSize: '0.875rem' }}>ID: KFC-12345</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={18} color="var(--text-secondary)" />
              <span style={{ fontSize: '0.875rem' }}>rahul.sharma@kfc.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone size={18} color="var(--text-secondary)" />
              <span style={{ fontSize: '0.875rem' }}>+91 98765 43210</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin size={18} color="var(--text-secondary)" />
              <span style={{ fontSize: '0.875rem' }}>Mumbai, India</span>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', gridColumn: 'span 2' }}>
          <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Personal Information</h3>
          
          <div className="grid-cols-2">
            <div className="input-group">
              <label className="input-label">First Name</label>
              <input type="text" className="input-field" defaultValue="Rahul" />
            </div>
            <div className="input-group">
              <label className="input-label">Last Name</label>
              <input type="text" className="input-field" defaultValue="Sharma" />
            </div>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input type="email" className="input-field" defaultValue="rahul.sharma@kfc.com" />
            </div>
            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <input type="tel" className="input-field" defaultValue="+91 98765 43210" />
            </div>
            <div className="input-group" style={{ gridColumn: 'span 2' }}>
              <label className="input-label">Address</label>
              <input type="text" className="input-field" defaultValue="123 Main Street, Andheri West, Mumbai" />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', gap: '1rem' }}>
            <button className="btn btn-secondary" onClick={() => showToast("Changes discarded.")}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
