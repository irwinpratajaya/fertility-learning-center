import { courses } from './courses';

export interface Expert {
  name: string;
  role: string;
  imageUrl: string;
}

export interface ContentItem {
  title: string;
  duration: number;
}

export interface RelatedCourse {
  title: string;
  slug: string;
}

export interface CourseDetail {
  title: string;
  description: string;
  viewCount: number;
  experts: Expert[];
  content: ContentItem[];
  relatedCourses: RelatedCourse[];
}

// Helper function to get related courses excluding the current index
const getRelatedCourses = (currentIndex: number) => {
  return courses
    .filter((_, index) => index !== currentIndex)
    .slice(0, 6)
    .map(course => ({
      title: course.title,
      slug: course.slug,
    }));
};


export const courseDetails: CourseDetail[] = courses.map((course, index) => ({
  title: course.title,
  description: course.description,
  viewCount: course.viewCount,
  experts: [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Reproductive Endocrinologist',
      imageUrl: '/images/experts/deborah.jpeg'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'IVF Specialist',
      imageUrl: '/images/experts/chantel_cross.png'
    }
  ],
  content: [
    { title: 'Introduction to IVF', duration: 45 },
    { title: 'Initial Consultation and Testing', duration: 60 },
    { title: 'Ovarian Stimulation Protocol', duration: 30 },
    { title: 'Egg Retrieval Process', duration: 45 },
    { title: 'Embryo Development and Selection', duration: 60 },
    { title: 'Embryo Transfer Procedure', duration: 30 },
    { title: 'Post-Transfer Care', duration: 45 }
  ],
  relatedCourses: getRelatedCourses(index)
}));
