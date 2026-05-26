import React from 'react';
import { Gift, IndianRupee, History, Award, CheckCircle } from 'lucide-react';

const RewardBonus = () => {
  const bonusHistory = [
    { id: 1, date: 'Apr 2026', type: 'Performance Incentive', amount: '₹1,500', status: 'Credited' },
    { id: 2, date: 'Jan 2026', type: 'Quarterly Bonus', amount: '₹4,000', status: 'Credited' },
    { id: 3, date: 'Dec 2025', type: 'Holiday Bonus', amount: '₹2,500', status: 'Credited' },
  ];

  return (
    <div>
      <h1 className="animate-fade-in stagger-1">Reward & Bonus Management</h1>
      <p className="animate-fade-in stagger-1" style={{ marginBottom: '2rem' }}>Track your incentives, bonuses, and achievement points.</p>

      <div className="grid-cols-3 animate-fade-in stagger-2" style={{ marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(229, 22, 54, 0.1), rgba(15, 23, 42, 0.8))' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Current Quarter Bonus</span>
            <Gift size={24} color="var(--kfc-red)" />
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>₹4,500</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Estimated payout: July 1, 2026</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Achievement Points</span>
            <Award size={24} color="var(--accent-gold)" />
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>1,250</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Points redeemable for KFC merchandise</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Eligibility Tracker</span>
            <CheckCircle size={24} color="var(--success)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--success)' }}>Eligible</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>You meet all criteria for Q2 bonuses based on attendance and performance.</span>
        </div>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-3">
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Bonus History Records</h3>
            <History size={20} color="var(--text-secondary)" />
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bonusHistory.map((record) => (
                  <tr key={record.id}>
                    <td style={{ fontWeight: '500' }}>{record.date}</td>
                    <td>{record.type}</td>
                    <td style={{ color: 'var(--success)', fontWeight: '600' }}>{record.amount}</td>
                    <td><span className="badge badge-success">{record.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Incentive Calculation</h3>
            <IndianRupee size={20} color="var(--text-secondary)" />
          </div>
          <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Your bonus amount is calculated based on the following metrics for the current quarter:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div className="flex-between" style={{ marginBottom: '0.25rem', fontSize: '0.875rem' }}>
                <span>Attendance (Target: 95%)</span>
                <span style={{ color: 'var(--success)' }}>98% Achieved</span>
              </div>
              <div className="progress-container"><div className="progress-bar" style={{ width: '98%', background: 'var(--success)' }}></div></div>
            </div>

            <div>
              <div className="flex-between" style={{ marginBottom: '0.25rem', fontSize: '0.875rem' }}>
                <span>Customer Satisfaction (Target: 4.5/5)</span>
                <span style={{ color: 'var(--success)' }}>4.8 Achieved</span>
              </div>
              <div className="progress-container"><div className="progress-bar" style={{ width: '95%', background: 'var(--success)' }}></div></div>
            </div>

            <div>
              <div className="flex-between" style={{ marginBottom: '0.25rem', fontSize: '0.875rem' }}>
                <span>Store Targets (Target: ₹5L/month)</span>
                <span style={{ color: 'var(--accent-gold)' }}>₹4.8L Achieved</span>
              </div>
              <div className="progress-container"><div className="progress-bar" style={{ width: '90%', background: 'var(--accent-gold)' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardBonus;
