import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, TrendingUp, Activity, IndianRupee } from 'lucide-react';

const HRAnalytics = () => {
  const satisfactionData = [
    { name: 'Jan', score: 4.2 },
    { name: 'Feb', score: 4.3 },
    { name: 'Mar', score: 4.5 },
    { name: 'Apr', score: 4.6 },
    { name: 'May', score: 4.8 },
  ];

  const attritionData = [
    { name: 'Q1 2025', rate: 12 },
    { name: 'Q2 2025', rate: 10 },
    { name: 'Q3 2025', rate: 8 },
    { name: 'Q4 2025', rate: 7 },
    { name: 'Q1 2026', rate: 5 },
  ];

  const bonusDistribution = [
    { name: 'Performance', value: 45 },
    { name: 'Attendance', value: 30 },
    { name: 'Tenure', value: 15 },
    { name: 'Peer', value: 10 },
  ];

  const COLORS = ['var(--kfc-red)', 'var(--info)', 'var(--success)', 'var(--accent-gold)'];

  return (
    <div>
      <h1 className="animate-fade-in stagger-1">HR Analytics Dashboard</h1>
      <p className="animate-fade-in stagger-1" style={{ marginBottom: '2rem' }}>Data-driven insights for workforce management.</p>

      {/* Top Metrics */}
      <div className="grid-cols-4 animate-fade-in stagger-2" style={{ marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Total Employees</span>
            <Users size={20} color="var(--info)" />
          </div>
          <h2 style={{ fontSize: '2rem' }}>1,245</h2>
          <span className="badge badge-success">+12 this month</span>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Avg Satisfaction</span>
            <Activity size={20} color="var(--success)" />
          </div>
          <h2 style={{ fontSize: '2rem' }}>4.8/5</h2>
          <span className="badge badge-success">+0.2 from last Q</span>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Attrition Rate</span>
            <TrendingUp size={20} color="var(--accent-gold)" />
          </div>
          <h2 style={{ fontSize: '2rem' }}>5%</h2>
          <span className="badge badge-success">-2% from last Q</span>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Total Bonus Payout</span>
            <IndianRupee size={20} color="var(--kfc-red)" />
          </div>
          <h2 style={{ fontSize: '2rem' }}>₹12.5L</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Q1 2026</span>
        </div>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-3" style={{ marginBottom: '1.5rem' }}>
        {/* Employee Satisfaction */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: '350px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Employee Satisfaction Trend</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <YAxis domain={[0, 5]} stroke="var(--text-secondary)" />
              <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="score" stroke="var(--kfc-red)" strokeWidth={3} dot={{ r: 4, fill: 'var(--kfc-red)' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Attrition Analysis */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: '350px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Attrition Analysis (%)</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={attritionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderRadius: '8px' }} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="rate" fill="var(--info)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid-cols-2 animate-fade-in stagger-4">
        {/* Bonus Distribution */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: '350px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Bonus Distribution</h3>
          <div style={{ display: 'flex', height: '80%' }}>
            <ResponsiveContainer width="60%" height="100%">
              <PieChart>
                <Pie data={bonusDistribution} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {bonusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
              {bonusDistribution.map((entry, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span style={{ fontSize: '0.875rem' }}>{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reward Utilization */}
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
            <h3>Reward Utilization</h3>
            <span className="badge badge-primary">High</span>
          </div>
          <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Breakdown of how achievement points are being redeemed by employees this quarter.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div className="flex-between" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <span>KFC Merchandise (45%)</span>
                <span>4,500 pts redeemed</span>
              </div>
              <div className="progress-container"><div className="progress-bar" style={{ width: '45%' }}></div></div>
            </div>
            <div>
              <div className="flex-between" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <span>Extra Paid Leave (30%)</span>
                <span>3,000 pts redeemed</span>
              </div>
              <div className="progress-container"><div className="progress-bar" style={{ width: '30%', background: 'var(--info)' }}></div></div>
            </div>
            <div>
              <div className="flex-between" style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                <span>Gift Vouchers (25%)</span>
                <span>2,500 pts redeemed</span>
              </div>
              <div className="progress-container"><div className="progress-bar" style={{ width: '25%', background: 'var(--success)' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRAnalytics;
