import React, { useState } from 'react';
import { Image, Calendar, Newspaper, ArrowRight, ChevronDown } from 'lucide-react';
import { CURRENT_USER, FEED_POSTS } from '../constants';
import PostCard from './PostCard';
import { useToast } from './Toast';

const Feed: React.FC = () => {
  const { showToast } = useToast();
  const [filter, setFilter] = useState<'latest' | 'promoted'>('latest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const displayedPosts = filter === 'promoted' 
    ? FEED_POSTS.filter(post => post.isPromoted)
    : FEED_POSTS;

  const handleFilterChange = (newFilter: 'latest' | 'promoted') => {
      setFilter(newFilter);
      setIsDropdownOpen(false);
      if (newFilter === 'promoted') {
          showToast("Filtering by Promoted content (just the ads).", 'info');
      } else {
          showToast("Showing all latest posts.", 'info');
      }
  };

  return (
    <div className="w-full relative">
      {/* Create Post Widget */}
      <div className="bg-white rounded-lg border border-gray-300 mb-2 p-3">
        <div className="flex items-center gap-3 mb-2">
            <img 
                src={CURRENT_USER.avatar} 
                alt="Me" 
                className="w-12 h-12 rounded-full object-cover cursor-pointer" 
                onClick={() => showToast("That's you (supposedly).", 'info')}
            />
            <button 
                className="flex-1 text-left border border-gray-400 rounded-full px-4 py-3 text-sm font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => showToast("Posting is currently disabled to prevent spread of misinformation.", 'error')}
            >
                Defend your obsolete tech stack...
            </button>
        </div>
        <div className="flex justify-between items-center px-2 pt-1">
            <div 
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors"
                onClick={() => showToast("Image upload failed: Reality too harsh.", 'error')}
            >
                <Image className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-semibold text-gray-600">Media</span>
            </div>
            <div 
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors"
                onClick={() => showToast("Scheduling 'The End of Coding' event...", 'success')}
            >
                <Calendar className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-semibold text-gray-600">Event</span>
            </div>
            <div 
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors"
                onClick={() => showToast("Opening text editor...", 'info')}
            >
                <Newspaper className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-semibold text-gray-600">Write article</span>
            </div>
        </div>
      </div>
      
      {/* Sort Divider */}
      <div className="flex items-center justify-between mb-2 px-1 relative z-20">
        <div className="h-[1px] bg-gray-300 flex-1 mr-2"></div>
        <div className="relative">
            <div 
                className="text-xs text-gray-500 flex items-center gap-1 cursor-pointer select-none hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                Sort by: <span className="font-bold text-gray-900">{filter === 'latest' ? 'Latest' : 'Promoted'}</span> <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-xl w-36 py-1 z-30 animate-in fade-in zoom-in-95 duration-100">
                    <div 
                        className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between group ${filter === 'latest' ? 'font-bold bg-gray-50 border-l-4 border-green-700' : 'border-l-4 border-transparent'}`}
                        onClick={() => handleFilterChange('latest')}
                    >
                        <span>Latest</span>
                        {filter === 'latest' && <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>}
                    </div>
                    <div 
                        className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between group ${filter === 'promoted' ? 'font-bold bg-gray-50 border-l-4 border-green-700' : 'border-l-4 border-transparent'}`}
                        onClick={() => handleFilterChange('promoted')}
                    >
                        <span>Promoted</span>
                        {filter === 'promoted' && <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>}
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-0">
        {displayedPosts.length > 0 ? (
            displayedPosts.map(post => (
                <PostCard key={post.id} post={post} />
            ))
        ) : (
            <div className="bg-white rounded-lg border border-gray-300 p-8 text-center text-gray-500 italic">
                No promoted content found. The market has given up on you.
            </div>
        )}
      </div>
      
      {/* End of Feed */}
      {displayedPosts.length > 0 && (
        <div className="text-center py-4 text-gray-500 text-sm">
            <div className="mb-2">You've reached the end of the uncomfortable truth.</div>
            <button 
                className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-1 w-full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Back to denial <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      )}
    </div>
  );
};

export default Feed;