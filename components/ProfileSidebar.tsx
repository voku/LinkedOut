import React, { useState } from 'react';
import { Bookmark, Square, Eye, Zap, RefreshCw, Briefcase, MapPin } from 'lucide-react';
import { CURRENT_USER } from '../constants';
import { useToast } from './Toast';

const ProfileSidebar: React.FC = () => {
  const [isRealityVisible, setIsRealityVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { showToast } = useToast();

  // We toggle on click, but also peek on hover if not already toggled
  const showReality = isRealityVisible || isHovering;
  const displayProfile = showReality && CURRENT_USER.reality ? CURRENT_USER.reality : CURRENT_USER;
  
  const toggleReality = () => {
    setIsRealityVisible(!isRealityVisible);
    showToast(!isRealityVisible ? "Sidebar reality check engaged." : "Sidebar returning to normal.", 'info');
  };

  return (
    <div className="w-full">
      {/* Identity Card */}
      <div 
        className={`bg-white rounded-lg border overflow-hidden mb-2 relative transition-all duration-300 ${showReality ? 'border-red-400 shadow-red-100 shadow-lg scale-[1.01]' : 'border-gray-300'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* Cover Image */}
        <div className="h-16 relative overflow-hidden cursor-pointer" onClick={toggleReality}>
             <div className={`absolute inset-0 transition-opacity duration-300 ${showReality ? 'opacity-0' : 'opacity-100'}`}>
                <img src={CURRENT_USER.coverImage} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-900 opacity-60"></div>
             </div>
             <div className={`absolute inset-0 transition-opacity duration-300 ${showReality ? 'opacity-100' : 'opacity-0'}`}>
                 <img src={CURRENT_USER.reality?.coverImage} alt="Cover Real" className="w-full h-full object-cover grayscale contrast-125" />
                 <div className="absolute inset-0 bg-red-900 opacity-20 mix-blend-multiply"></div>
             </div>
        </div>
        
        <div className="px-4 pb-4 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 group">
            <div className="relative">
                <img 
                src={displayProfile.avatar} 
                alt={displayProfile.name} 
                className={`w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm cursor-pointer transition-all duration-300 ${showReality ? 'grayscale rotate-3' : ''}`}
                onClick={toggleReality}
                />
                <button 
                    onClick={toggleReality}
                    className={`absolute -right-2 -bottom-1 rounded-full p-1.5 shadow border transition-all duration-300 z-10 ${showReality ? 'bg-red-600 border-red-700 text-white rotate-180' : 'bg-white border-gray-200 text-blue-600 hover:scale-110'}`}
                    title="Toggle Reality View"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className={`font-semibold text-lg hover:underline cursor-pointer flex items-center justify-center gap-1 transition-colors ${showReality ? 'text-red-700 font-mono' : 'text-gray-900 decoration-blue-600'}`} onClick={() => showToast("Opening profile...", 'info')}>
              {displayProfile.name}
              {showReality && <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-sans tracking-wider uppercase">FRAUD</span>}
            </h2>
            <p className={`text-xs mt-2 leading-relaxed px-1 transition-all duration-300 ${showReality ? 'text-red-800 font-mono text-xs border border-red-200 bg-red-50 p-2 rounded transform -rotate-1' : 'text-gray-500'}`}>
              {displayProfile.headline}
            </p>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-3">
            <div 
                className="flex justify-between items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded group"
                onClick={() => showToast("Stats are fabricated.", 'info')}
            >
              <span className="text-xs font-semibold text-gray-500">Profile viewers</span>
              <span className={`text-xs font-semibold ${showReality ? 'text-red-600 line-through decoration-2' : 'text-blue-600'}`}>
                 {showReality ? (Math.floor(Math.random() * 10)).toString() : CURRENT_USER.stats.profileViews.toLocaleString()}
              </span>
            </div>
            <div 
                className="flex justify-between items-center px-2 py-1 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => showToast("Connection list is private.", 'info')}
            >
              <span className="text-xs font-semibold text-gray-500">Connections</span>
              <span className="text-xs font-semibold text-gray-900">
                  {displayProfile.stats.connections.toLocaleString()}
              </span>
            </div>
          </div>
          
           <div 
             className={`mt-2 border-t border-gray-200 pt-3 hover:bg-gray-100 cursor-pointer -mx-4 px-4 py-3 transition-colors ${showReality ? 'bg-red-50' : ''}`}
             onClick={toggleReality}
           >
              <div className="text-xs text-gray-500">
                  {showReality ? "Stop looking at the wreckage" : "See the code behind the curtain"}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                 {showReality ? (
                    <Zap className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                 ) : (
                    <Square className="w-3.5 h-3.5 fill-yellow-600 text-yellow-600" />
                 )}
                 <span className={`text-xs font-bold underline decoration-1 ${showReality ? 'text-red-700' : 'text-gray-800'}`}>
                     {showReality ? "Return to the Matrix" : "Execute Reality Check"}
                 </span>
              </div>
           </div>

          <div 
            className="mt-1 border-t border-gray-200 pt-3 hover:bg-gray-100 cursor-pointer -mx-4 px-4 py-2 flex items-center gap-2"
            onClick={() => showToast("No items saved.", 'info')}
          >
             <Bookmark className="w-4 h-4 text-gray-500" />
             <span className="text-xs font-semibold text-gray-600">Saved items</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      {(displayProfile.about) && (
        <div className={`bg-white rounded-lg border mb-2 overflow-hidden px-4 py-3 transition-colors duration-300 ${showReality ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}>
            <div className="text-sm font-semibold text-gray-900 mb-2">About</div>
            <div className={`text-xs leading-relaxed whitespace-pre-wrap ${showReality ? 'font-mono text-red-800' : 'text-gray-600'}`}>
                {displayProfile.about}
            </div>
        </div>
      )}

      {/* Experience Section */}
      {(displayProfile.experience) && (
        <div className={`bg-white rounded-lg border mb-2 overflow-hidden px-4 py-3 transition-colors duration-300 ${showReality ? 'border-red-300' : 'border-gray-300'}`}>
            <div className="text-sm font-semibold text-gray-900 mb-3">Experience</div>
            <div className="space-y-3">
                {displayProfile.experience.map((exp, idx) => (
                    <div key={idx} className="flex gap-2 relative">
                        {/* Timeline dot/line */}
                        <div className="flex flex-col items-center">
                             <div className={`w-2 h-2 rounded-full mt-1.5 ${showReality ? 'bg-red-400' : 'bg-gray-400'}`}></div>
                             {idx !== (displayProfile.experience!.length - 1) && (
                                 <div className={`w-0.5 flex-1 my-1 ${showReality ? 'bg-red-200' : 'bg-gray-200'}`}></div>
                             )}
                        </div>
                        <div className="pb-1">
                            <div className={`text-sm font-bold ${showReality ? 'text-red-900 font-mono' : 'text-gray-900'}`}>{exp.role}</div>
                            <div className="text-xs text-gray-700 flex items-center gap-1">
                                {exp.company} • <span className="text-gray-500">{exp.duration}</span>
                            </div>
                            <div className={`text-xs mt-1.5 leading-snug ${showReality ? 'text-red-700 font-mono bg-white/50 p-1 rounded border border-red-100' : 'text-gray-500'}`}>
                                {exp.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}
      
      {/* Skills / Reality Skills */}
      {displayProfile.skills && (
          <div className={`bg-white rounded-lg border mb-2 overflow-hidden px-4 py-3 transition-colors duration-300 ${showReality ? 'border-red-300' : 'border-gray-300'}`}>
             <div className="text-sm font-semibold text-gray-900 mb-2">
                 {showReality ? "What I Actually Do" : "Skills"}
             </div>
             <div className="flex flex-wrap gap-2">
                 {displayProfile.skills.map((skill, idx) => (
                     <span key={idx} className={`text-xs font-semibold px-2 py-1 rounded-full border transition-all hover:scale-105 cursor-default ${showReality ? 'bg-red-100 text-red-800 border-red-200 font-mono' : 'bg-white text-gray-600 border-gray-400 hover:shadow-sm'}`}>
                         {skill.name}
                     </span>
                 ))}
             </div>
          </div>
      )}

      {/* Recent Card */}
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden hidden md:block px-3 py-2">
        <div className="text-xs font-medium text-gray-900 mb-2">Recent</div>
        {[
          "PHP Developers Group",
          "Laravel Enthusiasts",
          "Remote Jobs Worldwide",
          "No-Code Haters Club",
          "Web Assembly Futures"
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 cursor-pointer -mx-3 px-3 transition-colors"
            onClick={() => showToast(`Navigating to group: ${item}`, 'info')}
          >
             <UsersGroupIcon />
             <span className="text-xs font-semibold truncate">{item}</span>
          </div>
        ))}
         <div onClick={() => showToast("Groups functionality coming soon.", 'info')} className="text-xs font-semibold text-blue-600 mt-3 hover:underline cursor-pointer w-fit">Groups</div>
         <div onClick={() => showToast("No upcoming events.", 'info')} className="flex items-center justify-between text-xs font-semibold text-blue-600 mt-2 hover:underline cursor-pointer">
            <span>Events</span>
            <span className="text-gray-500 text-lg leading-3">+</span>
         </div>
      </div>
    </div>
  );
};

const UsersGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="w-3 h-3" width="16" height="16" focusable="false">
    <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8zM3.25 8h.5A1.25 1.25 0 005 9.25V14H2V9.25A1.25 1.25 0 003.25 8z"></path>
  </svg>
);

export default ProfileSidebar;