// Commonly used request data

// Experience data
export interface ExperienceProps {
  title: string;
  role: string;
  date: string;
  badges: string[];
  src: string;
  info: string;
}

// Project data
export interface ProjectProps {
  title: string;
  type: string;
  date: string;
  badges: string[];
  src: string;
  info: string;
}

// General result data
export interface ResultProps {
  data: ExperienceProps | ProjectProps | unknown;
}
