import React, { useState } from 'react';
import { Home, Users, Briefcase, MessageSquare, Bell, Search, UserCircle, Grid, Github } from 'lucide-react';
import { CURRENT_USER } from '../constants';
import { useToast } from './Toast';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }> = ({ icon, label, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex flex-col items-center cursor-pointer px-4 min-w-[80px] hover:text-black transition-colors ${active ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
  >
    <div className="mb-1">{icon}</div>
    <span className="text-xs hidden md:block">{label}</span>
  </div>
);

const Navbar: React.FC = () => {
  const { showToast } = useToast();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        showToast(`Searching for "${searchValue}"... No results found in reality.`, 'info');
    }
  };

  const handleNavClick = (feature: string) => {
      showToast(`${feature} is currently unavailable in simulation mode.`, 'info');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 h-[52px]">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[#0a66c2] text-4xl font-bold rounded flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            in
          </div>
          <div className="relative hidden md:block ml-2">
            <Search className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search for 'Job Security'" 
              className="bg-[#edf3f8] pl-10 pr-4 py-1.5 rounded w-[280px] text-sm focus:outline-none focus:w-[350px] transition-all duration-300 focus:bg-white focus:border focus:border-gray-400"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        <div className="flex items-center h-full overflow-x-auto">
          <NavItem icon={<Home className="w-6 h-6" />} label="Home" active onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <NavItem icon={<Users className="w-6 h-6" />} label="My Network" onClick={() => handleNavClick("Network")} />
          <NavItem icon={<Briefcase className="w-6 h-6" />} label="Jobs" onClick={() => handleNavClick("Jobs")} />
          <NavItem icon={<MessageSquare className="w-6 h-6" />} label="Messaging" onClick={() => handleNavClick("Messaging")} />
          <NavItem icon={<Bell className="w-6 h-6" />} label="Notifications" onClick={() => handleNavClick("Notifications")} />
          
          <div className="flex flex-col items-center cursor-pointer px-4 border-l border-gray-100 ml-2 hover:bg-gray-50 h-full justify-center transition-colors" onClick={() => showToast("Profile settings are locked.", 'error')}>
            <img src={CURRENT_USER.avatar} alt="Profile" className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs hidden md:block text-gray-500 mt-1">Me ▼</span>
          </div>
          
          <div className="hidden md:flex flex-col items-center cursor-pointer px-4 border-l border-gray-100 hover:bg-gray-50 h-full justify-center transition-colors" onClick={() => showToast("Enterprise features require a paid subscription.", 'error')}>
             <Grid className="w-6 h-6 text-gray-500" />
             <span className="text-xs text-gray-500 mt-1">For Business ▼</span>
          </div>
          
          <a 
            href="https://github.com/voku/LinkedOut" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex flex-col items-center px-4 border-l border-gray-100 hover:bg-gray-50 h-full justify-center transition-colors group"
            title="View on GitHub"
          >
             <Github className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors" />
             <span className="text-xs text-gray-500 mt-1 group-hover:text-black transition-colors">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;