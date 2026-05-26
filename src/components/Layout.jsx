import React from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Gift, 
  Award, 
  TrendingUp, 
  PieChart,
  LogOut,
  Bell,
  Search,
  User
} from 'lucide-react';
import ToastContainer from './ToastContainer';
import AIChatbot from './AIChatbot';
import { showToast } from '../utils/toast';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/rewards', label: 'Rewards & Bonus', icon: Gift },
    { path: '/recognition', label: 'Recognition', icon: Award },
    { path: '/career', label: 'Career Growth', icon: TrendingUp },
    { path: '/analytics', label: 'HR Analytics', icon: PieChart },
  ];

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="flex-center" style={{ marginBottom: '3rem', marginTop: '1rem', cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, var(--kfc-red), var(--kfc-dark-red))', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              boxShadow: '0 4px 10px var(--kfc-red-glow)'
            }}>
              KFC
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0', color: 'white' }}>RewardSync</h2>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>HR Portal</span>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1 }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <button onClick={() => { showToast("Logging out..."); setTimeout(() => navigate('/'), 1500); }} className="nav-link" style={{ color: 'var(--kfc-red)', width: '100%', background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <input type="text" placeholder="Search..." style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '20px', color: 'white', outline: 'none' }} />
              <Search size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            
            <button onClick={() => showToast("No new notifications")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
              <Bell size={20} />
            </button>

            <div 
              onClick={() => navigate('/profile')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', padding: '0.5rem', borderRadius: '12px', background: location.pathname === '/profile' ? 'rgba(255,255,255,0.05)' : 'transparent', border: location.pathname === '/profile' ? '1px solid var(--border-color)' : '1px solid transparent', transition: 'all 0.2s' }}
            >
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Rahul Sharma</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>Crew Member</div>
              </div>
              <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=E51636&color=fff" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--kfc-red)' }} />
            </div>
          </div>
        </header>

        <div className="page-content animate-fade-in">
          <Outlet />
        </div>
      </main>

      <AIChatbot />
      <ToastContainer />
    </div>
  );
};

export default Layout;
