export interface Expert {
  name: string;
  role: string;
  imageUrl: string;
}

export interface ContentItem {
  title: string;
  duration: string;
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

export const courseDetails: Record<string, CourseDetail> = {
  'ivf-in-vitro-fertilization': {
    title: 'IVF - In Vitro Fertilization',
    description: 'A comprehensive guide to understanding the IVF process, from initial consultation to embryo transfer.',
    viewCount: 15420,
    experts: [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Reproductive Endocrinologist',
        imageUrl: '/experts/sarah.jpg'
      },
      {
        name: 'Dr. Michael Chen',
        role: 'IVF Specialist',
        imageUrl: '/experts/michael.jpg'
      },
      {
        name: 'Dr. Emily Brown',
        role: 'Embryologist',
        imageUrl: '/experts/emily.jpg'
      }
    ],
    content: [
      { title: 'Introduction to IVF', duration: '5:20' },
      { title: 'Initial Consultation', duration: '8:15' },
      { title: 'Ovarian Stimulation', duration: '12:30' },
      { title: 'Egg Retrieval Process', duration: '10:45' },
      { title: 'Sperm Collection', duration: '6:20' },
      { title: 'Fertilization in Lab', duration: '15:00' },
      { title: 'Embryo Development', duration: '9:30' },
      { title: 'Embryo Transfer', duration: '11:15' },
      { title: 'Two Week Wait', duration: '7:45' },
      { title: 'Pregnancy Test', duration: '5:50' },
      { title: 'Early Pregnancy Care', duration: '13:20' },
      { title: 'Success Rates & Statistics', duration: '8:40' }
    ],
    relatedCourses: [
      { title: 'Understanding Fertility Basics', slug: 'fertility-basics' },
      { title: 'The Role of Genetics', slug: 'genetics-role' },
      { title: 'Preimplantation Testing', slug: 'preimplantation-testing' },
      { title: 'Medications Guide', slug: 'medications-guide' },
      { title: 'Emotional Support', slug: 'emotional-support' },
      { title: 'IVF Success Stories', slug: 'success-stories' }
    ]
  }
};
