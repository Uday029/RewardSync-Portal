import React from 'react';
import { Award, Star, Medal, Heart, Users } from 'lucide-react';
import { showToast } from '../utils/toast';

const Recognition = () => {
  return (
    <div>
      <div className="flex-between animate-fade-in stagger-1" style={{ marginBottom: '2rem' }}>
        <div>
          <h1>Recognition System</h1>
          <p>Appreciate and celebrate the stars of our team.</p>
        </div>
        <button className="btn btn-primary" onClick={() => showToast('Appreciation form opened!')}>
          <Heart size={18} /> Send Appreciation
        </button>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-2" style={{ marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(15, 23, 42, 0.6))' }}>
          <div style={{ display: 'inline-block', position: 'relative', marginBottom: '1.5rem' }}>
            <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=E51636&color=fff&size=100" alt="Employee of the month" style={{ borderRadius: '50%', border: '4px solid var(--accent-gold)' }} />
            <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: '#000', borderRadius: '50%', padding: '0.25rem' }}>
              <Medal size={24} />
            </div>
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Employee of the Month</h2>
          <h3 style={{ color: 'var(--accent-gold)' }}>Rahul Sharma</h3>
          <p style={{ fontSize: '0.875rem' }}>For outstanding customer service and maintaining perfect attendance throughout May 2026.</p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0 }}>Star Performer Rankings</h3>
            <Star size={20} color="var(--accent-gold)" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { rank: 1, name: 'Rahul Sharma', role: 'Crew Member', points: 1250 },
              { rank: 2, name: 'Priya Patel', role: 'Shift Supervisor', points: 1120 },
              { rank: 3, name: 'Aarav Gupta', role: 'Crew Member', points: 980 },
            ].map((person) => (
              <div key={person.rank} className="flex-between" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '32px', height: '32px', 
                    borderRadius: '50%', 
                    background: person.rank === 1 ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.1)',
                    color: person.rank === 1 ? '#000' : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    #{person.rank}
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>{person.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{person.role}</span>
                  </div>
                </div>
                <div style={{ fontWeight: '600', color: 'var(--accent-gold)' }}>{person.points} pts</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-3">
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Peer Recognition Badges</h3>
            <Users size={20} color="var(--text-secondary)" />
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '1.5rem', borderRadius: '12px', flex: '1', textAlign: 'center' }}>
              <Heart size={32} color="var(--info)" style={{ margin: '0 auto 1rem auto' }} />
              <h4>Team Player</h4>
              <p style={{ fontSize: '0.75rem', margin: '0.5rem 0' }}>Received from Priya</p>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.5rem', borderRadius: '12px', flex: '1', textAlign: 'center' }}>
              <Award size={32} color="var(--success)" style={{ margin: '0 auto 1rem auto' }} />
              <h4>Quick Learner</h4>
              <p style={{ fontSize: '0.75rem', margin: '0.5rem 0' }}>Received from Rahul</p>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Appreciation Certificates</h3>
            <Award size={20} color="var(--text-secondary)" />
          </div>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '2px dashed var(--border-color)', 
            padding: '2rem', 
            borderRadius: '12px', 
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onClick={() => showToast('Downloading certificate as PDF...')}
          >
            <Award size={48} color="var(--kfc-red)" style={{ margin: '0 auto 1rem auto', opacity: 0.8 }} />
            <h4 style={{ marginBottom: '0.5rem' }}>Q1 Excellence Award</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Issued by Restaurant Manager</p>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }} onClick={(e) => { e.stopPropagation(); showToast('Downloading certificate as PDF...'); }}>View Certificate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
