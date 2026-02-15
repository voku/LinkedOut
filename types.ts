export interface BlogPost {
  id: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  content: string[]; // Array of paragraphs/lines for formatting
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
  isPromoted?: boolean;
}

export interface UserComment {
  id: string;
  text: string;
  postTitle: string; // The post they commented on
  timestamp: string;
  likes: number;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo?: string;
}

export interface Skill {
  name: string;
  endorsements: number;
}

export interface UserProfile {
  name: string;
  headline: string;
  location: string;
  avatar: string;
  coverImage: string;
  stats: {
    profileViews: number;
    connections: number;
    followers: number;
  };
  about?: string;
  experience?: Experience[];
  education?: Experience[];
  certifications?: Certification[];
  skills?: Skill[];
  comments?: UserComment[];
  reality?: UserProfile;
}