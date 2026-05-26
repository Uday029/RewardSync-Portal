import React from 'react';
import { Target, CheckCircle, Circle, Briefcase, BookOpen, ChevronRight } from 'lucide-react';
import { showToast } from '../utils/toast';

const CareerGrowth = () => {
  const roadmap = [
    { role: 'Crew Member', status: 'completed', date: 'Joined: Jan 2025' },
    { role: 'Shift Supervisor', status: 'current', date: 'In Progress: 85%' },
    { role: 'Assistant Manager', status: 'locked', date: 'Requires 2 yrs exp' },
    { role: 'Restaurant Manager', status: 'locked', date: 'Requires 4 yrs exp' }
  ];

  return (
    <div>
      <h1 className="animate-fade-in stagger-1">Career Growth Dashboard</h1>
      <p className="animate-fade-in stagger-1" style={{ marginBottom: '2rem' }}>Track your path to becoming a Restaurant Manager.</p>

      <div className="grid-cols-3 animate-fade-in stagger-2" style={{ marginBottom: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', gridColumn: 'span 2' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Career Roadmap Visualization</h3>
            <Target size={20} color="var(--text-secondary)" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', marginTop: '2rem' }}>
            <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '4px', background: 'var(--border-color)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '24px', left: '10%', width: '40%', height: '4px', background: 'var(--kfc-red)', zIndex: 0 }}></div>

            {roadmap.map((step, idx) => (
              <div key={idx} style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '25%' }}>
                <div style={{ 
                  width: '52px', height: '52px', 
                  borderRadius: '50%', 
                  background: step.status === 'completed' ? 'var(--success)' : step.status === 'current' ? 'var(--kfc-red)' : 'var(--bg-dark)',
                  border: `4px solid ${step.status === 'completed' ? 'var(--success)' : step.status === 'current' ? 'var(--kfc-red)' : 'var(--border-color)'}`,
                  color: step.status === 'locked' ? 'var(--text-secondary)' : 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  boxShadow: step.status === 'current' ? '0 0 0 4px rgba(229, 22, 54, 0.2)' : 'none'
                }}>
                  {step.status === 'completed' ? <CheckCircle size={24} /> : <Briefcase size={20} />}
                </div>
                <h4 style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{step.role}</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{step.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Promotion Eligibility</h3>
            <Target size={20} color="var(--kfc-red)" />
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>85%</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Ready for Shift Supervisor Role</span>
          
          <div style={{ marginTop: '2rem' }}>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => showToast('Review requested! HR will get back to you soon.')}>
              Request Review <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-3">
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Skill Requirement Checklist</h3>
            <CheckCircle size={20} color="var(--text-secondary)" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { task: 'Complete Food Safety L2', status: 'done' },
              { task: 'Inventory Management Training', status: 'done' },
              { task: 'Leadership Basics Module', status: 'pending' },
              { task: 'Conflict Resolution Workshop', status: 'pending' },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                {item.status === 'done' ? <CheckCircle size={20} color="var(--success)" /> : <Circle size={20} color="var(--text-secondary)" />}
                <span style={{ textDecoration: item.status === 'done' ? 'line-through' : 'none', color: item.status === 'done' ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Internal Job Opportunities</h3>
            <Briefcase size={20} color="var(--text-secondary)" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(229, 22, 54, 0.05)', border: '1px solid rgba(229, 22, 54, 0.2)', borderRadius: '8px' }}>
              <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                <h4 style={{ color: 'var(--kfc-red)', margin: 0 }}>Shift Supervisor</h4>
                <span className="badge badge-primary">New</span>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Location: KFC Downtown | Full-time</p>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }} onClick={() => showToast('Application submitted successfully!')}>Apply Now</button>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                <h4 style={{ margin: 0 }}>Training Coordinator</h4>
              </div>
              <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Location: KFC North Mall | Part-time</p>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }} onClick={() => showToast('Details sent to your email.')}>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGrowth;
