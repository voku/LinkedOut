import React, { useState } from 'react';
import { Info, ExternalLink, UserPlus, Check, UserCheck } from 'lucide-react';
import { useToast } from './Toast';

const PeopleItem: React.FC<{ name: string; title: string; image: string; url?: string }> = ({ name, title, image, url }) => {
    const [status, setStatus] = useState<'connect' | 'pending' | 'connected'>('connect');
    const { showToast } = useToast();

    const handleConnect = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (status === 'connect') {
            setStatus('pending');
            showToast(`Invitation sent to ${name}.`, 'success');
        } else if (status === 'pending') {
            setStatus('connect');
            showToast(`Invitation withdrawn for ${name}.`, 'info');
        }
    };

    const handleProfileClick = () => {
        if (url) {
            window.open(url, '_blank');
        } else {
            showToast(`Viewing profile of ${name}`, 'info');
        }
    };

    return (
    <div className="py-2 cursor-pointer hover:bg-gray-100 -mx-4 px-4 border-b border-gray-100 last:border-0 transition-colors" onClick={handleProfileClick}>
        <div className="flex items-start gap-3">
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{name}</div>
                <div className="text-xs text-gray-500 line-clamp-2 mb-1">{title}</div>
                <button 
                    onClick={handleConnect}
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold transition-all duration-300 ${
                        status === 'pending' 
                        ? 'bg-gray-100 text-gray-600 border border-gray-400 hover:bg-gray-200 hover:border-red-400 hover:text-red-500 group' 
                        : 'text-gray-600 border border-gray-500 hover:bg-gray-100 hover:border-gray-800'
                    }`}
                >
                     {status === 'pending' ? (
                         <>
                            <span className="group-hover:hidden flex items-center gap-1"><Check className="w-4 h-4" /> Pending</span>
                            <span className="hidden group-hover:inline">Withdraw</span>
                         </>
                     ) : (
                         <>
                            <UserPlus className="w-4 h-4" /> Connect
                         </>
                     )}
                </button>
            </div>
        </div>
    </div>
    );
};

const Widgets: React.FC = () => {
  const { showToast } = useToast();

  return (
    <div className="w-full space-y-2">
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden px-4 py-3">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-semibold text-gray-900">People also viewed</h2>
        </div>
        
        <div className="space-y-1">
            <PeopleItem 
                name="Maximilian Code" 
                title="10x PHP Ninja 🚀 | 100% Remote | Clean Code Evangelist"
                image="https://picsum.photos/id/100/200/200"
            />
            <PeopleItem 
                name="Sarah Smith" 
                title="AI Ethicist | Prompt Whisperer | ex-Google"
                image="https://picsum.photos/id/1011/200/200"
            />
            <PeopleItem 
                name="John Doe" 
                title="React Rockstar ⚛️ | Tailwind Fanatic"
                image="https://picsum.photos/id/1012/200/200"
            />
        </div>

        <button 
            onClick={() => showToast("Loading more clones...", 'info')}
            className="mt-2 flex items-center justify-center w-full text-sm font-semibold text-gray-600 hover:bg-gray-100 py-1 rounded transition-colors"
        >
          Show all
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden px-4 py-3">
         <div className="flex justify-between items-center mb-3">
             <h2 className="text-sm font-semibold text-gray-900">People you may know</h2>
         </div>
         <div className="space-y-1">
            <PeopleItem 
                name="Lars Moelleken"
                title="Softwareentwickler bei REMONDIS IT Services GmbH"
                image="https://github.com/voku.png"
                url="https://www.linkedin.com/in/larsmoelleken/"
            />
            <PeopleItem 
                name="Recruiter #412" 
                title="Hiring Top 1% Talent for Unicorns 🦄"
                image="https://picsum.photos/id/1025/200/200"
            />
             <PeopleItem 
                name="Junior Dev" 
                title="Looking for opportunities | React | HTML"
                image="https://picsum.photos/id/1027/200/200"
            />
         </div>
      </div>
      
      <div className="text-center mt-4 text-xs text-gray-500 space-x-3 px-4 flex justify-center flex-wrap gap-y-2">
         <span className="cursor-pointer hover:underline hover:text-blue-600" onClick={() => showToast("About: It's all fake.", 'info')}>About</span>
         <span className="cursor-pointer hover:underline hover:text-blue-600" onClick={() => showToast("Accessibility: We are trying our best.", 'info')}>Accessibility</span>
         <span className="cursor-pointer hover:underline hover:text-blue-600" onClick={() => showToast("Help Center: There is no help.", 'error')}>Help Center</span>
         <div className="mt-2 w-full">
            LinkedOut Corporation © 2024
         </div>
      </div>
    </div>
  );
};

export default Widgets;