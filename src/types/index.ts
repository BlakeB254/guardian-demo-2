// Course Types
export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  duration: number; // in minutes
  lessons: Lesson[];
  category: CourseCategory;
  level: CourseLevel;
  price: number;
  isFeatured: boolean;
  instructor: Instructor;
  requirements: string[];
  objectives: string[];
  certification?: Certification;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  videoUrl?: string;
  content?: string;
  resources?: Resource[];
  quiz?: Quiz;
  order: number;
}

export interface Resource {
  id: string;
  title: string;
  type: "pdf" | "video" | "link" | "download";
  url: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export type CourseCategory =
  | "fundamentals"
  | "threat-recognition"
  | "conflict-resolution"
  | "team-coordination"
  | "executive-protection"
  | "hospitality"
  | "healthcare"
  | "event-security"
  | "armed-security"
  | "compliance";

export type CourseLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  validityPeriod: number; // in months
  requirements: string[];
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  subscription?: Subscription;
  enrollments: Enrollment[];
  createdAt: Date;
}

export type UserRole = "student" | "instructor" | "admin" | "organization_admin";

export interface Enrollment {
  id: string;
  courseId: string;
  userId: string;
  progress: number;
  completedLessons: string[];
  startedAt: Date;
  completedAt?: Date;
  certificateUrl?: string;
}

export interface Subscription {
  id: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
}

export type SubscriptionPlan = "individual" | "professional" | "enterprise";
export type SubscriptionStatus = "active" | "cancelled" | "expired" | "trial";

// Instructor Types
export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  credentials: string[];
  yearsExperience: number;
}

// Organization Types
export interface Organization {
  id: string;
  name: string;
  industry: Industry;
  size: OrganizationSize;
  logo?: string;
  contactEmail: string;
  subscription: OrganizationSubscription;
  members: OrganizationMember[];
}

export type Industry =
  | "hospitality"
  | "healthcare"
  | "corporate"
  | "retail"
  | "event-management"
  | "private-security"
  | "government"
  | "education"
  | "other";

export type OrganizationSize = "small" | "medium" | "large" | "enterprise";

export interface OrganizationSubscription {
  plan: "team" | "business" | "enterprise";
  seats: number;
  usedSeats: number;
  features: string[];
}

export interface OrganizationMember {
  userId: string;
  role: "admin" | "manager" | "member";
  enrolledCourses: string[];
}

// Training Program Types
export interface TrainingProgram {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  duration: string;
  courses: Course[];
  price: number;
  features: string[];
  outcomes: string[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

// Contact/Lead Types
export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: "individual" | "organization" | "partnership" | "other";
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Stats Types
export interface Stat {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
}
