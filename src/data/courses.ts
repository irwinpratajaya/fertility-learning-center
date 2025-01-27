export type CourseType = 'Introductory' | 'Advanced' | 'Population Specific';

export interface Course {
  title: string;
  description: string;
  experts: string[];
  viewCount: number;
  type: CourseType
}

export const courses: Course[] = [
  {
    title: "IVF - In Vitro Fertilization",
    description: "The most complex fertility treatment, this course will help you do it right the first time.",
    experts: [
      "Cornell", "Harvard Medical School", "Mayo Clinic", "Johns Hopkins", 
      "Stanford Medicine", "UCLA Health", "UCSF Medical Center", 
      "NYU Langone", "Mount Sinai", "Columbia University",
      "Yale Medicine", "Cleveland Clinic", "Mass General", 
      "Northwestern Medicine", "Duke Health", "Penn Medicine",
      "Weill Cornell Medicine"
    ],
    viewCount: 631,
    type: 'Advanced',
  },
  {
    title: "Fertility 101",
    description: "You took sex ed, but now you need to understand fertility. Data to answer your questions about natural conception and diagnosing what might be wrong.",
    experts: [
      "Cornell", "Johns Hopkins", "Harvard Medical School", "Mayo Clinic",
      "Stanford Medicine", "UCLA Health", "UCSF Medical Center",
      "NYU Langone", "Mount Sinai", "Columbia University",
      "Yale Medicine", "Cleveland Clinic", "Mass General",
      "Northwestern Medicine", "Duke Health", "Penn Medicine"
    ],
    viewCount: 1500,
    type: 'Introductory',
  },
  {
    title: "Mental Health & Fertility",
    description: "Breaking down every important topic relating to mental health & fertility. We cover data around anxiety, depression, and stress as they relate to fertility & fertility outcomes. Studies on relaxation techniques & SSRI antidepressants.",
    experts: [
      "Cornell", "Harvard Medical School", "Mount Sinai", "UCLA Health"
    ],
    viewCount: 8,
    type: 'Population Specific',
  },
  {
    title: "PCOS - Polycystic Ovary Syndrome",
    description: "Understanding PCOS and its impact on fertility. Learn about diagnosis, treatment options, and lifestyle changes.",
    experts: [
      "Mayo Clinic", "Stanford Medicine", "UCLA Health"
    ],
    viewCount: 12,
    type: 'Advanced',
  },
  {
    title: "Lifestyle Changes for Fertility",
    description: "Evidence-based lifestyle modifications that can improve your fertility outcomes.",
    experts: [
      "Harvard Medical School", "UCLA Health", "Mayo Clinic", 
      "Stanford Medicine", "Mount Sinai"
    ],
    viewCount: 25,
    type: 'Introductory',
  },
  {
    title: "Male Factor Infertility",
    description: "Comprehensive guide to understanding and treating male fertility issues.",
    experts: [
      "Johns Hopkins", "Cornell", "Harvard Medical School",
      "UCLA Health", "Stanford Medicine", "Mount Sinai"
    ],
    viewCount: 18,
    type: 'Advanced',
  },
  {
    title: "Miscarriage",
    description: "Understanding the causes, coping strategies, and future pregnancy planning after loss.",
    experts: [
      "Stanford Medicine", "UCSF Medical Center", "Mount Sinai"
    ],
    viewCount: 14,
    type: 'Population Specific',
  },
  {
    title: "Egg Freezing",
    description: "Everything you need to know about preserving your fertility through egg freezing.",
    experts: [
      "NYU Langone", "Cornell", "Harvard Medical School", "UCLA Health"
    ],
    viewCount: 22,
    type: 'Advanced',
  },
  {
    title: "Adoption",
    description: "Guide to domestic and international adoption processes, costs, and preparations.",
    experts: [
      "Columbia University", "Yale Medicine"
    ],
    viewCount: 10,
    type: 'Population Specific',
  },
  {
    title: "Fertility on a Budget",
    description: "Financial planning and cost-effective approaches to fertility treatment.",
    experts: [
      "Mayo Clinic", "Mount Sinai", "UCLA Health"
    ],
    viewCount: 30,
    type: 'Introductory',
  },
  {
    title: "Endometriosis",
    description: "Understanding endometriosis and its impact on fertility, treatment options.",
    experts: [
      "Stanford Medicine", "Cleveland Clinic", "Harvard Medical School",
      "Mount Sinai", "UCLA Health"
    ],
    viewCount: 16,
    type: 'Advanced',
  },
  {
    title: "Fertility Treatment Options",
    description: "Compare different fertility treatments, success rates, and what to expect.",
    experts: [
      "UCSF Medical Center", "Cornell", "Harvard Medical School",
      "Mayo Clinic", "Stanford Medicine", "UCLA Health", "Mount Sinai"
    ],
    viewCount: 0,
    type: 'Advanced',
  }
];
