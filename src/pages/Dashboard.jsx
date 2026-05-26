import React from 'react';
import { IndianRupee, TrendingUp, Award, Clock, Star, Target } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="animate-fade-in stagger-1">Employee Dashboard</h1>
      <p className="animate-fade-in stagger-1" style={{ marginBottom: '2rem' }}>Welcome back, Rahul! Here is your performance overview.</p>

      {/* Top Stats */}
      <div className="grid-cols-4 animate-fade-in stagger-2" style={{ marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Monthly Salary</span>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--info)' }}>
              <IndianRupee size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>₹45,000</h2>
          <span className="badge badge-success">+5% from last month</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Attendance</span>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--success)' }}>
              <Clock size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>98%</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>On track for attendance bonus</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Performance Score</span>
            <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent-gold)' }}>
              <Star size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>4.8/5</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Top 10% in region</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Incentives Earned</span>
            <div style={{ background: 'rgba(229, 22, 54, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--kfc-red)' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>₹3,500</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>This quarter</span>
        </div>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-3">
        {/* Career Growth Tracker */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Career Growth Progress</h3>
            <Target size={20} color="var(--text-secondary)" />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '500' }}>Next Role: Shift Supervisor</span>
              <span style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>85% Ready</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ marginTop: '0.25rem', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }}></div>
              <div>
                <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-primary)' }}>Food Safety Certification</p>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>Completed on May 10, 2026</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ marginTop: '0.25rem', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-color)' }}></div>
              <div>
                <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-primary)' }}>Leadership Training Module</p>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>In Progress - 40% completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Recent Recognitions</h3>
            <Award size={20} color="var(--text-secondary)" />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid var(--border-color)', 
              padding: '1rem', 
              borderRadius: '12px',
              textAlign: 'center',
              flex: '1 1 calc(50% - 0.5rem)'
            }}>
              <div style={{ 
                width: '48px', height: '48px', 
                background: 'rgba(251, 191, 36, 0.1)', 
                color: 'var(--accent-gold)', 
                borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 0.75rem auto'
              }}>
                <Star size={24} />
              </div>
              <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Customer Hero</h4>
              <p style={{ fontSize: '0.75rem', margin: 0 }}>Awarded April 2026</p>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid var(--border-color)', 
              padding: '1rem', 
              borderRadius: '12px',
              textAlign: 'center',
              flex: '1 1 calc(50% - 0.5rem)'
            }}>
              <div style={{ 
                width: '48px', height: '48px', 
                background: 'rgba(16, 185, 129, 0.1)', 
                color: 'var(--success)', 
                borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 0.75rem auto'
              }}>
                <Clock size={24} />
              </div>
              <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Punctuality Pro</h4>
              <p style={{ fontSize: '0.75rem', margin: 0 }}>Awarded March 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
