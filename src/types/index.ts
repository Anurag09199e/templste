export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Course {
  id: string;
  level: CEFRLevel;
  title: string;
  germanTitle: string;
  shortDesc: string;
  fullDesc: string;
  durationHours: number;
  durationWeeks: number;
  durationString?: string;
  classDurationString?: string;


  recommendedFor: string;
  outcomes: string[];
  syllabusModules: {
    moduleNumber: number;
    title: string;
    topics: string[];
  }[];
  goethePrepIncluded: boolean;
  upcomingBatchDate: string;
  mode: 'Online' | 'Hybrid' | 'On-Campus';
  rating: number;
  enrolledStudents: number;
  badgeTag: string;
  image: string;
  ctaText?: string;
  trustText?: string;
  learningFeatures?: {
    icon: 'MessageCircle' | 'Users' | 'Clock' | 'ShoppingBag' | 'PenTool';
    title: string;
    description: string;
  }[];
  learningFeaturesSubtitle?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface Exam {
  id: string;
  tags: string[];
  quickInfo: string;
  title: string;
  description: string;
  checklist: string[];
  infoBox: string;
  ctaText: string;
  link: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  germanLevel: string;
  experienceYears: number;
  nativeSpeaker: boolean;
  bio: string;
  certification: string;
  avatar: string;
  specialties: string[];
  greetingDe: string;
  greetingEn: string;
  studentsTaught: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  courseCompleted: CEFRLevel;
  goetheScore: string;
  quote: string;
  destination: string;
  programType: 'University' | 'Ausbildung' | 'Job Visa' | 'General';
  rating: number;
  videoThumbnail?: string;
}

export interface UpcomingBatch {
  id: string;
  courseLevel: CEFRLevel;
  startDate: string;
  timing: string;
  mode: 'Online Live' | 'Hybrid Campus';
  seatsLeft: number;
  instructor: string;

}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Events' | 'Graduation' | 'Germany Trips';
  image: string;
  caption: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Grammar Tips' | 'Study in Germany' | 'Ausbildung' | 'Culture & Life' | 'Visa Guide';
  author: string;
  authorAvatar: string;
  publishedDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Exams' | 'Courses' | 'Study in Germany' | 'Ausbildung' | 'Visa & Fees' | 'General' | 'Careers';
  question: string;
  answer: string;
}

export interface AusbildungProgram {
  id: string;
  title: string;
  field: 'Healthcare' | 'Information Technology' | 'Engineering' | 'Hospitality' | 'Business';
  monthlyStipendYear1: string;
  monthlyStipendYear3: string;
  requiredLevel: CEFRLevel;
  durationYears: number;
  description: string;
  keyBenefits: string[];
}
