import React from 'react';
import Navbar from './Navbar';
import ProfileView from './ProfileView';
import Widgets from './Widgets';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-0 md:px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Main Profile Area - 8 cols */}
        <div className="col-span-1 md:col-span-8">
          <ProfileView />
        </div>

        {/* Right Sidebar - 4 cols */}
        <div className="hidden md:block md:col-span-4">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Layout;