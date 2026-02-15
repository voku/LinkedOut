import React, { useState } from 'react';
import { ThumbsUp, MessageSquareText, Repeat2, Send, Globe, Plus, Check } from 'lucide-react';
import { BlogPost } from '../types';
import { useToast } from './Toast';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { showToast } = useToast();
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
    if (!liked) {
        showToast("You liked a hard truth.", 'success');
    }
  };

  const handleFollow = () => {
      setFollowed(!followed);
      showToast(followed ? "Unfollowed 'The Market'." : "Following 'The Market' (Good luck).", 'info');
  };

  const handleSend = async () => {
    const shareData = {
        title: "LinkedOut: The Reality Check",
        text: `Check out this post by ${post.author.name}: "${post.content[0].substring(0, 100)}..."`,
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            showToast("Shared via device menu.", 'success');
        } catch (err) {
            // User cancelled or error, silent fail often best for share cancellation
            console.debug('Share cancelled');
        }
    } else {
        try {
            await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
            showToast("Link copied to clipboard.", 'success');
        } catch (err) {
            showToast("Failed to share.", 'error');
        }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-300 mb-2 overflow-hidden">
        {/* Promoted Label */}
        {post.isPromoted && (
            <div className="px-3 pt-2 text-xs text-gray-500 font-semibold flex items-center">
                <span>Promoted</span>
                <span className="mx-1">•</span>
                <span>By The Cruel Reality</span>
            </div>
        )}

      {/* Header */}
      <div className="p-3 flex items-start gap-3">
        <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
            onClick={() => showToast("Navigating to author profile...", 'info')}
        />
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span 
                        className="font-semibold text-sm text-gray-900 hover:text-blue-600 hover:underline cursor-pointer"
                        onClick={() => showToast("Navigating to author profile...", 'info')}
                    >
                        {post.author.name}
                    </span>
                    <span className="text-xs text-gray-500 leading-tight">
                        {post.author.title}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 mt-0.5 gap-1">
                        <span>{post.timestamp}</span>
                        <span>•</span>
                        <Globe className="w-3 h-3" />
                    </div>
                </div>
                <button 
                    onClick={handleFollow}
                    className={`font-semibold flex items-center gap-1 px-2 py-1 rounded transition-colors text-sm ${followed ? 'text-gray-500 bg-gray-100' : 'text-blue-600 hover:bg-blue-50'}`}
                >
                    {followed ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />} 
                    {followed ? "Following" : "Follow"}
                </button>
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-2 text-sm text-gray-900 cursor-text">
         {post.content.map((paragraph, idx) => (
             <React.Fragment key={idx}>
                {paragraph.startsWith('>') ? (
                    <div className="border-l-4 border-gray-300 pl-4 py-1 my-3 text-gray-600 italic bg-gray-50">
                        {paragraph.replace('> ', '')}
                    </div>
                ) : paragraph === '---' ? (
                     <hr className="my-4 border-gray-200" />
                ) : paragraph.startsWith('•') ? (
                    <li className="list-none pl-4 my-1">{paragraph}</li>
                ) : (
                    <p className={`mb-3 leading-relaxed ${idx === 0 && post.id === 'intro' ? 'font-semibold text-base' : ''}`}>
                        {paragraph}
                    </p>
                )}
             </React.Fragment>
         ))}
      </div>

      {/* Stats */}
      <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1 hover:text-blue-600 hover:underline cursor-pointer" onClick={() => showToast("List of people who agree with this reality.", 'info')}>
            <div className="flex -space-x-1">
                 <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center border border-white">
                    <ThumbsUp className="w-2 h-2 text-white fill-white" />
                 </div>
                 <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center border border-white">
                    <span className="text-[8px] text-white">💡</span>
                 </div>
            </div>
            <span>{likesCount.toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
            <span onClick={() => showToast("Comments section is a war zone.", 'info')} className="hover:text-blue-600 hover:underline cursor-pointer">{post.comments} comments</span>
            <span>•</span>
            <span onClick={() => showToast("Reposts are just people saying 'Agreed'.", 'info')} className="hover:text-blue-600 hover:underline cursor-pointer">{post.reposts} reposts</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-2 py-1 flex justify-between items-center">
        <ActionButton 
            icon={<ThumbsUp className={`w-5 h-5 ${liked ? 'fill-blue-600 text-blue-600' : ''}`} />} 
            label={liked ? "Liked" : "Like"} 
            onClick={handleLike}
            active={liked}
        />
        <ActionButton 
            icon={<MessageSquareText className="w-5 h-5" />} 
            label="Comment" 
            onClick={() => showToast("Comments are disabled for your mental health.", 'error')}
        />
        <ActionButton 
            icon={<Repeat2 className="w-5 h-5" />} 
            label="Repost" 
            onClick={() => showToast("Reposted to your 2 followers.", 'success')}
        />
        <ActionButton 
            icon={<Send className="w-5 h-5" />} 
            label="Send" 
            onClick={handleSend}
        />
      </div>
    </div>
  );
};

const ActionButton: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void; active?: boolean }> = ({ icon, label, onClick, active }) => (
    <button 
        onClick={onClick}
        className={`flex items-center gap-2 px-3 py-3 rounded hover:bg-gray-100 font-semibold text-sm transition-colors flex-1 justify-center ${active ? 'text-blue-600' : 'text-gray-600'}`}
    >
        {icon}
        <span className="hidden sm:inline">{label}</span>
    </button>
);

export default PostCard;