import React, { useState } from 'react';
import { Camera, Pencil, MapPin, Building2, ExternalLink, ArrowRight, Eye, Zap, GraduationCap, X, Users, ThumbsUp, Award, MoreHorizontal, Info, Sparkles, AlertTriangle } from 'lucide-react';
import { CURRENT_USER, FEED_POSTS } from '../constants';
import { Experience, UserComment, Certification } from '../types';
import PostCard from './PostCard';
import { useToast } from './Toast';

const ProfileView: React.FC = () => {
  const [isRealityVisible, setIsRealityVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState<'posts' | 'comments'>('posts');
  const [showAllPosts, setShowAllPosts] = useState(true);
  const [showAllComments, setShowAllComments] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  
  const { showToast } = useToast();
  
  // Toggle function with animation
  const toggleReality = () => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      const nextState = !isRealityVisible;

      // Wait for fade out before switching state
      // 300ms matches the new faster duration for a snappier feel
      setTimeout(() => {
          setIsRealityVisible(nextState);
          showToast(nextState ? "Entering reality mode. Brace yourself." : "Returning to the curated illusion...", nextState ? 'error' : 'info');
          
          // Short delay to ensure DOM update happens while invisible
          setTimeout(() => {
              setIsTransitioning(false);
          }, 50);
      }, 300);
  };

  const handleEdit = () => {
      showToast("Editing is disabled. You cannot change who you are.", 'error');
  };

  const handleMessage = () => {
      showToast(isRealityVisible ? "User is currently having an existential crisis. Try later." : "Message sent to the void.", 'success');
  };

  const handleMore = () => {
    showToast("No additional options available in this timeline.", 'info');
  };

  const handleContactInfo = () => {
      showToast("Contact info hidden to prevent recruiter spam.", 'info');
  };

  // Determine which data to show
  const displayProfile = isRealityVisible && CURRENT_USER.reality ? CURRENT_USER.reality : CURRENT_USER;
  const marketAuthor = FEED_POSTS[0].author;

  // Helper styles
  const textStyle = isRealityVisible ? "font-mono text-red-800" : "text-gray-900";
  const mutedTextStyle = isRealityVisible ? "font-mono text-red-600" : "text-gray-500";
  const borderStyle = isRealityVisible ? "border-red-300 shadow-[0_0_15px_rgba(220,38,38,0.2)]" : "border-gray-300";
  const bgStyle = isRealityVisible ? "bg-red-50" : "bg-white";

  return (
    <div className={`w-full space-y-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter] transform ${isTransitioning ? 'opacity-0 blur-lg scale-[0.96] translate-y-4' : 'opacity-100 blur-0 scale-100 translate-y-0'}`}>
      
      {/* 1. TOP CARD (Header) */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} overflow-hidden relative transition-all duration-300`}>
        {/* Cover Image */}
        <div className="h-48 sm:h-56 relative overflow-hidden group">
            <img 
                src={displayProfile.coverImage} 
                alt="Cover" 
                className={`w-full h-full object-cover transition-all duration-700 ${isRealityVisible ? 'grayscale contrast-125' : ''}`} 
            />
            {!isRealityVisible && (
                <div 
                    className="absolute top-4 right-4 bg-white p-2 rounded-full cursor-pointer hover:bg-gray-100 shadow transition-transform hover:scale-105"
                    onClick={() => showToast("Uploading cover images is disabled.", 'error')}
                >
                    <Camera className="w-5 h-5 text-blue-600" />
                </div>
            )}
            {isRealityVisible && <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />}
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6 relative">
            {/* Avatar Row */}
            <div className="flex justify-between items-start -mt-16 sm:-mt-24 mb-4 relative">
                <div className="relative group">
                    <img 
                        src={displayProfile.avatar} 
                        alt="Profile" 
                        className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover cursor-pointer transition-transform duration-500 ${isRealityVisible ? 'grayscale rotate-2' : ''}`}
                        onClick={toggleReality}
                    />
                     {/* Reality Toggle Badge on Avatar */}
                     <button 
                        onClick={toggleReality}
                        className={`absolute bottom-2 right-2 p-2 rounded-full shadow-lg border transition-all hover:scale-110 z-10 ${isRealityVisible ? 'bg-red-600 border-red-700 text-white' : 'bg-white border-gray-200 text-blue-600'}`}
                     >
                        {isRealityVisible ? <X className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                     </button>
                </div>

                <div className="mt-4 flex gap-2">
                     <div onClick={handleEdit} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-600">
                        <Pencil className="w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Name & Headline */}
            <div className="flex justify-between items-start">
                <div className="w-full sm:w-2/3">
                    <h1 className={`text-2xl font-bold leading-tight flex items-center gap-2 ${textStyle}`}>
                        {displayProfile.name}
                        {isRealityVisible && <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded font-sans tracking-widest self-center">IMPOSTER</span>}
                    </h1>
                    <div className={`mt-1 text-base leading-snug ${textStyle} ${isRealityVisible ? 'bg-red-100 inline-block px-1 rounded' : ''}`}>
                        {displayProfile.headline}
                    </div>
                    
                    <div className="mt-2 text-sm text-gray-500 flex items-center gap-1.5 flex-wrap">
                        <span className={mutedTextStyle}>{displayProfile.location}</span>
                        {!isRealityVisible && (
                             <>
                                <span className="text-gray-400">•</span>
                                <span onClick={handleContactInfo} className="text-blue-600 font-bold hover:underline cursor-pointer">Contact info</span>
                             </>
                        )}
                    </div>
                     <div onClick={() => showToast(isRealityVisible ? "42 disappointed recruiters." : "5,000 bots and 2 people.", 'info')} className="mt-2 text-sm text-blue-600 font-bold hover:underline cursor-pointer w-fit">
                        {displayProfile.stats.connections.toLocaleString()} connections
                    </div>

                    {/* Buttons Row - Matched to LinkedIn 'Visitor' View */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {!isRealityVisible ? (
                            <>
                                <button 
                                    onClick={handleMessage} 
                                    className="bg-blue-600 text-white border border-transparent px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    Message
                                </button>
                                <button 
                                    onClick={handleMore} 
                                    className="bg-white text-gray-600 border border-gray-600 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-50 hover:border-gray-900 transition-colors"
                                >
                                    More
                                </button>
                            </>
                        ) : (
                             <button onClick={() => showToast("Report submitted to the Cyber Police.", 'success')} className="px-4 py-1.5 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors font-mono animate-pulse">
                                REPORT FRAUD
                            </button>
                        )}
                        
                        <button 
                            className={`px-4 py-1.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-sm ${
                                isRealityVisible 
                                ? 'bg-white border border-red-500 text-red-600 hover:bg-red-50' 
                                : 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200'
                            }`}
                            onClick={toggleReality}
                        >
                            {isRealityVisible ? <Zap className="w-4 h-4 fill-current" /> : <Eye className="w-4 h-4" />}
                            {isRealityVisible ? "Restore Illusion" : "Reality Check"}
                        </button>
                    </div>
                    
                     {/* Open to work Section */}
                     {!isRealityVisible && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => showToast("Recruiters alerted.", 'success')}>
                            <div>
                                <div className="text-sm font-bold text-gray-900">Open to work</div>
                                <div className="text-xs text-gray-600">Lead AI Engineer, Senior Full Stack Developer and Architect roles</div>
                                <div className="text-xs text-blue-600 font-semibold mt-1">Show details</div>
                            </div>
                            <Pencil className="w-5 h-5 text-gray-500" />
                        </div>
                     )}
                </div>
                
                {/* Current Company/School - Floating Right */}
                <div className="hidden sm:block w-1/3 pl-4">
                    <div onClick={() => showToast("Company page not found.", 'error')} className="flex items-center gap-2 mb-4 cursor-pointer group">
                        <img src={isRealityVisible ? "https://picsum.photos/id/66/32/32" : "https://picsum.photos/id/1/32/32"} alt="Company" className="w-10 h-10 rounded object-cover" />
                        <span className={`text-sm font-semibold hover:underline group-hover:text-blue-600 leading-tight ${isRealityVisible ? 'text-red-800 line-through' : 'text-gray-900'}`}>
                            {isRealityVisible ? "Unemployed" : "Stealth Startup"}
                        </span>
                    </div>
                     <div onClick={() => showToast("Institution has denied knowledge of this student.", 'error')} className="flex items-center gap-2 cursor-pointer group">
                        <img src={isRealityVisible ? "https://picsum.photos/id/99/32/32" : "https://picsum.photos/id/3/32/32"} alt="School" className="w-10 h-10 rounded object-cover" />
                        <span className={`text-sm font-semibold hover:underline group-hover:text-blue-600 leading-tight ${isRealityVisible ? 'text-red-800' : 'text-gray-900'}`}>
                            {isRealityVisible ? "YouTube" : "TU Munich"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. ANALYTICS (Fake) */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-4`}>
          <div className="mb-2">
            <h2 className={`text-lg font-semibold ${textStyle}`}>Analytics</h2>
            <div className={`text-sm flex items-center gap-1 ${mutedTextStyle}`}>
                <Eye className="w-3 h-3" /> Private to you
            </div>
          </div>
          <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-2">
              <div 
                className="flex items-start gap-2 min-w-[140px] cursor-pointer hover:bg-gray-100/50 p-1 rounded group"
                onClick={() => showToast(isRealityVisible ? "These are your actual views. Mom visited 11 times." : "Analytics are generated by a random number generator.", 'info')}
              >
                   <div className="mt-1"><Building2 className={`w-6 h-6 ${isRealityVisible ? 'text-red-400' : 'text-gray-500'}`} /></div>
                   <div>
                       <div className={`font-bold flex items-center gap-1 ${isRealityVisible ? 'text-red-600 font-mono' : 'text-gray-900'}`}>
                           {displayProfile.stats.profileViews}
                           {isRealityVisible && <span className="text-[10px] bg-red-100 text-red-600 px-1 rounded border border-red-200 tracking-tighter">ACTUAL</span>}
                       </div>
                       <div className="text-xs text-gray-500">Profile views</div>
                       {isRealityVisible && <div className="text-[10px] text-red-500 flex items-center gap-1">(-99.9%) <span className="italic opacity-75">Irrelevant</span></div>}
                       {!isRealityVisible && <div className="text-[10px] text-green-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">🚀 Trending up</div>}
                   </div>
              </div>
              <div 
                className="flex items-start gap-2 min-w-[140px] cursor-pointer hover:bg-gray-100/50 p-1 rounded group"
                onClick={() => showToast(isRealityVisible ? "You are invisible to recruiters." : "You appeared in 0 searches today.", 'info')}
              >
                   <div className="mt-1"><Zap className={`w-6 h-6 ${isRealityVisible ? 'text-red-400' : 'text-gray-500'}`} /></div>
                   <div>
                       <div className={`font-bold flex items-center gap-1 ${isRealityVisible ? 'text-red-600 font-mono' : 'text-gray-900'}`}>
                           {isRealityVisible ? "0" : "124"}
                           {isRealityVisible && <span className="text-[10px] bg-red-100 text-red-600 px-1 rounded border border-red-200 tracking-tighter">ZERO</span>}
                       </div>
                       <div className="text-xs text-gray-500">Search appearances</div>
                        {isRealityVisible && <div className="text-[10px] text-red-500 italic">Ghosted</div>}
                   </div>
              </div>
          </div>
      </div>

      {/* 2.5 ACTIVITY SECTION */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-4`}>
         <div className="flex justify-between items-start mb-2">
             <div>
                <h2 className={`text-xl font-semibold ${textStyle}`}>Activity</h2>
                <div onClick={() => showToast("Follower count is inflated by bots.", 'info')} className="text-blue-600 font-semibold text-sm hover:underline cursor-pointer w-fit">
                    {displayProfile.stats.followers.toLocaleString()} followers
                </div>
             </div>
             <div className="flex gap-2">
                <button 
                    className={`border rounded-full px-4 py-1 text-sm font-semibold transition-colors ${activeTab === 'posts' ? (isRealityVisible ? 'bg-red-100 border-red-300 text-red-800' : 'bg-green-700 text-white border-green-800') : 'text-gray-500 border-gray-500 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('posts')}
                >
                    Posts
                </button>
                <button 
                    className={`border rounded-full px-4 py-1 text-sm font-semibold transition-colors ${activeTab === 'comments' ? (isRealityVisible ? 'bg-red-100 border-red-300 text-red-800' : 'bg-green-700 text-white border-green-800') : 'text-gray-500 border-gray-500 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('comments')}
                >
                    Comments
                </button>
             </div>
         </div>

         <div className="mt-4">
             {activeTab === 'posts' ? (
                 <div className="space-y-4">
                     {(showAllPosts ? FEED_POSTS : FEED_POSTS.slice(0, 2)).map((post) => (
                         <PostCard key={post.id} post={post} />
                     ))}
                     <div 
                        className="text-center py-2 border-t border-gray-100 font-semibold text-gray-500 text-sm cursor-pointer hover:bg-gray-50 rounded select-none"
                        onClick={() => setShowAllPosts(!showAllPosts)}
                     >
                         {showAllPosts ? "Show fewer posts" : "Show all posts"} <ArrowRight className={`w-4 h-4 inline transition-transform ${showAllPosts ? 'rotate-[-90deg]' : ''}`} />
                     </div>
                 </div>
             ) : (
                 <div className="space-y-4">
                     {displayProfile.comments?.slice(0, showAllComments ? undefined : 3).map((comment) => (
                         <div key={comment.id} className="border-b border-gray-100 pb-3 last:border-0">
                             <div className="text-xs text-gray-500 mb-1">
                                 <span className="font-semibold text-gray-900">{displayProfile.name}</span> commented on this
                             </div>
                             <div className="flex gap-3">
                                 <div className="w-1 bg-gray-200 rounded"></div>
                                 <div className="flex-1">
                                    <div className={`text-sm mb-2 ${textStyle}`}>"{comment.text}"</div>
                                    <div className="bg-gray-50 p-2 rounded border border-gray-200 cursor-pointer hover:bg-gray-100" onClick={() => showToast("Post unavailable.", 'info')}>
                                        <div className="text-xs font-semibold text-gray-900 truncate">{comment.postTitle}</div>
                                    </div>
                                    <div className="mt-2 flex items-center text-xs text-gray-500 gap-3">
                                        <span>{comment.likes} Likes</span>
                                        <span>•</span>
                                        <span>{comment.timestamp}</span>
                                    </div>
                                 </div>
                             </div>
                         </div>
                     ))}
                     {(!displayProfile.comments || displayProfile.comments.length === 0) && (
                         <div className="text-center py-4 text-gray-500 italic">No comments yet.</div>
                     )}
                     <div 
                        className="text-center py-2 border-t border-gray-100 font-semibold text-gray-500 text-sm cursor-pointer hover:bg-gray-50 rounded select-none"
                        onClick={() => setShowAllComments(!showAllComments)}
                     >
                        {showAllComments ? "Show fewer comments" : "Show all comments"} <ArrowRight className={`w-4 h-4 inline transition-transform ${showAllComments ? 'rotate-[-90deg]' : ''}`} />
                     </div>
                 </div>
             )}
         </div>
      </div>

      {/* 5.6 AI PERSONA (New Section) */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
        <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${textStyle}`}>
                {isRealityVisible ? "Real Professional Identity" : "Honors & Awards"}
            </h2>
             <div onClick={handleEdit} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                <Pencil className="w-5 h-5" />
            </div>
        </div>
        
        <div className={`p-4 rounded-lg border flex items-start gap-4 transition-colors duration-500 ${isRealityVisible ? 'bg-red-100 border-red-200' : 'bg-indigo-50 border-indigo-100'}`}>
             <div className="mt-1">
                {isRealityVisible ? <AlertTriangle className="w-8 h-8 text-red-600 animate-bounce" /> : <Sparkles className="w-8 h-8 text-indigo-600" />}
             </div>
             <div>
                 <h3 className={`font-bold text-lg ${isRealityVisible ? 'text-red-900 font-mono' : 'text-indigo-900'}`}>
                     {isRealityVisible ? "Overhyped AI Guru" : "Top Voice in Artificial Intelligence"}
                 </h3>
                 <p className={`text-sm mt-1 leading-relaxed ${isRealityVisible ? 'text-red-800 font-mono' : 'text-indigo-800'}`}>
                     {isRealityVisible 
                        ? "Certified master of pretending to understand neural networks. Has successfully convinced management that 'prompting' is engineering." 
                        : "Recognized by the tech community for pioneering contributions to Generative AI architectures and thought leadership in the post-code era."}
                 </p>
                 <div className="flex flex-wrap gap-2 mt-3">
                     {(isRealityVisible ? ["#Grifter", "#WrapperDev", "#BuzzwordBingo", "#CopyPaste"] : ["#ThoughtLeader", "#Visionary", "#Innovation", "#AI"]).map((tag, i) => (
                         <span key={i} className={`text-xs px-2 py-1 rounded-full font-semibold border ${isRealityVisible ? 'bg-red-200 text-red-800 border-red-300' : 'bg-white text-indigo-600 border-indigo-200'}`}>
                             {tag}
                         </span>
                     ))}
                 </div>
             </div>
        </div>
      </div>
      
       {/* 7. ABOUT THE AUTHOR (Moved Here) */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
         <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${textStyle}`}>About the Author</h2>
             <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500" onClick={() => showToast("The Market cannot be edited.", 'error')}>
                <Info className="w-5 h-5" />
            </div>
         </div>
         
         <div className="flex flex-col sm:flex-row items-start gap-4">
            <img 
                src={marketAuthor.avatar}
                alt={marketAuthor.name}
                className={`w-16 h-16 rounded-full object-cover border border-gray-200 ${isRealityVisible ? 'grayscale contrast-125' : ''}`}
                onClick={() => showToast("The Market sees you.", 'info')}
            />
            <div className="flex-1">
                <div className={`font-bold text-lg ${textStyle}`}>{marketAuthor.name}</div>
                <div className={`text-sm mb-2 ${isRealityVisible ? 'font-mono text-red-600' : 'text-gray-600'}`}>{marketAuthor.title}</div>
                <div className={`text-sm leading-relaxed ${textStyle}`}>
                    The Market is a non-sentient, collective intelligence composed of supply, demand, and efficiency curves. It does not care about your tech stack, your feelings, or your legacy code. It only cares about value.
                </div>
                 <button 
                    onClick={() => showToast("You are already owned by The Market.", 'info')}
                    className="mt-3 font-semibold text-blue-600 hover:underline flex items-center gap-1 text-sm"
                >
                    View full profile <ArrowRight className="w-4 h-4" />
                </button>
            </div>
         </div>
      </div>

      {/* 3. ABOUT */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
         <div className="flex justify-between items-center mb-3">
            <h2 className={`text-xl font-semibold ${textStyle}`}>About</h2>
            <div onClick={handleEdit} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                <Pencil className="w-5 h-5" />
            </div>
         </div>
         <div className={`text-sm whitespace-pre-wrap leading-relaxed ${textStyle}`}>
             {displayProfile.about}
         </div>
      </div>

      {/* 4. EXPERIENCE */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
         <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${textStyle}`}>Experience</h2>
            <div className="flex gap-2">
                <div onClick={() => showToast("Adding new experience is locked.", 'error')} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                    <Pencil className="w-5 h-5" />
                </div>
            </div>
         </div>
         
         <div className="space-y-6">
            {displayProfile.experience?.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} isReality={isRealityVisible} />
            ))}
         </div>
      </div>

      {/* 5. EDUCATION */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
         <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${textStyle}`}>Education</h2>
            <div className="flex gap-2">
                <div onClick={handleEdit} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                    <Pencil className="w-5 h-5" />
                </div>
            </div>
         </div>
         
         <div className="space-y-6">
            {displayProfile.education?.map((edu, idx) => (
                <ExperienceItem key={idx} exp={edu} isReality={isRealityVisible} isEducation />
            ))}
         </div>
      </div>

      {/* 5.5 CERTIFICATIONS */}
      <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
         <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${textStyle}`}>Licenses & certifications</h2>
            <div className="flex gap-2">
                <div onClick={() => showToast("Adding a certification...", 'info')} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                    <Award className="w-5 h-5" />
                </div>
                <div onClick={handleEdit} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                    <Pencil className="w-5 h-5" />
                </div>
            </div>
         </div>
         
         <div className="space-y-6">
            {displayProfile.certifications?.map((cert, idx) => (
                <CertificationItem key={idx} cert={cert} isReality={isRealityVisible} />
            ))}
             {(!displayProfile.certifications || displayProfile.certifications.length === 0) && (
                <div className="text-gray-500 italic text-sm">No certifications to display.</div>
            )}
         </div>
      </div>
      
       {/* 6. SKILLS */}
       <div className={`${bgStyle} rounded-lg border ${borderStyle} p-6`}>
         <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${textStyle}`}>Skills</h2>
            <div className="flex gap-2">
                 <button 
                    onClick={() => showToast(isRealityVisible ? "Weaknesses exposed." : "Skill demonstration requested.", isRealityVisible ? 'error' : 'success')}
                    className={`${isRealityVisible ? 'border-red-500 text-red-600 hover:bg-red-50' : 'border-blue-600 text-blue-600 hover:bg-blue-50'} font-semibold px-4 py-1 rounded-full border transition-colors text-sm`}
                >
                    {isRealityVisible ? "Expose Weakness" : "Demonstrate skill"}
                 </button>
                 <div onClick={handleEdit} className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500">
                    <Pencil className="w-5 h-5" />
                </div>
            </div>
         </div>
         
         <div className="space-y-4">
             {displayProfile.skills?.slice(0, showAllSkills ? undefined : 5).map((skill, idx) => (
                 <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                     <div className={`font-semibold text-sm mb-1 ${textStyle}`}>{skill.name}</div>
                     <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className={`text-sm ${isRealityVisible ? 'text-red-700 italic' : 'text-gray-500'}`}>
                           {skill.endorsements} endorsements
                        </span>
                     </div>
                 </div>
             ))}
         </div>
         
         <div 
            className="mt-4 text-center border-t border-gray-100 pt-2 cursor-pointer hover:bg-gray-50 rounded py-1 select-none"
            onClick={() => setShowAllSkills(!showAllSkills)}
        >
             <span className="text-sm font-semibold text-gray-600">
                 {showAllSkills ? "Show fewer skills" : `Show all ${displayProfile.skills?.length} skills`} <ArrowRight className={`w-4 h-4 inline transition-transform ${showAllSkills ? 'rotate-[-90deg]' : ''}`} />
             </span>
         </div>
      </div>

    </div>
  );
};

// Subcomponent for list items (Experience/Education)
const ExperienceItem: React.FC<{ exp: Experience; isReality: boolean; isEducation?: boolean }> = ({ exp, isReality, isEducation }) => {
    const { showToast } = useToast();
    return (
    <div className="flex gap-3 sm:gap-4 group cursor-pointer" onClick={() => showToast(`Opening details for ${exp.company}...`, 'info')}>
        <img 
            src={exp.logo} 
            alt="Logo" 
            className={`w-12 h-12 rounded object-cover mt-1 ${isReality ? 'grayscale opacity-70' : ''}`} 
        />
        <div className="flex-1 border-b border-gray-100 pb-4 group-last:border-0 group-last:pb-0">
            <div className={`font-bold text-base ${isReality ? 'text-red-900 font-mono' : 'text-gray-900'}`}>
                {exp.role}
            </div>
            <div className="text-sm text-gray-900">
                {exp.company}
            </div>
            <div className="text-sm text-gray-500 mt-0.5">
                {exp.duration}
            </div>
            <div className={`text-sm mt-2 leading-relaxed ${isReality ? 'text-red-700 bg-red-100/50 p-2 rounded font-mono text-xs border border-red-100' : 'text-gray-900'}`}>
                {exp.description}
            </div>
        </div>
    </div>
    );
};

// Subcomponent for Certifications
const CertificationItem: React.FC<{ cert: Certification; isReality: boolean }> = ({ cert, isReality }) => {
    const { showToast } = useToast();

    if (isReality) {
        return (
            <div className="mb-4 last:mb-0 cursor-pointer" onClick={() => showToast("This isn't worth the paper it's not printed on.", 'error')}>
                 <div className="flex items-start gap-2">
                    <div className="mt-1 min-w-[4px] h-4 bg-red-400 rounded-full"></div>
                    <div>
                        <div className="text-red-900 font-mono text-sm font-bold leading-tight">
                            {cert.name}
                        </div>
                        <div className="text-red-700 font-mono text-xs mt-0.5">
                            {cert.issuer}
                        </div>
                    </div>
                 </div>
            </div>
        );
    }

    return (
    <div className="flex gap-3 sm:gap-4 group cursor-pointer" onClick={() => showToast(`Verifying certificate: ${cert.name}`, 'info')}>
        <img 
            src={cert.logo} 
            alt="Logo" 
            className={`w-12 h-12 rounded object-cover mt-1`} 
        />
        <div className="flex-1 border-b border-gray-100 pb-4 group-last:border-0 group-last:pb-0">
             <div className={`font-bold text-base text-gray-900`}>
                {cert.name}
            </div>
            <div className="text-sm text-gray-900">
                {cert.issuer}
            </div>
            <div className={`text-sm mt-0.5 text-gray-500`}>
                {cert.date}
            </div>
             <button 
                onClick={(e) => {
                    e.stopPropagation();
                    showToast("Credential verification link expired.", 'error');
                }}
                className="mt-2 border border-gray-500 text-gray-600 rounded-full px-3 py-1 text-sm font-semibold hover:bg-gray-100 hover:border-gray-800 transition-colors flex items-center gap-1 w-fit"
            >
                Show credential <ExternalLink className="w-3 h-3" />
            </button>
        </div>
    </div>
    );
};

export default ProfileView;