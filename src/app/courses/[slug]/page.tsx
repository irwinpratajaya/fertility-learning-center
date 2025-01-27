import ExpertCard from '@/components/ExpertCard';
import CourseContentList from '@/components/CourseContentList';
import RelatedCourseCard from '@/components/RelatedCourseCard';
import { AiOutlineEye } from 'react-icons/ai';
import { formatNumber } from '@/utils/format';
import { courseDetails } from '@/data/courseDetails';
import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const courseIndex = courses.findIndex(course => course.slug === slug);
  
  if (courseIndex === -1 || !courseDetails[courseIndex]) {
    notFound();
  }

  const course = courses[courseIndex];
  const courseData = courseDetails[courseIndex];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-serif">{course.title}</h1>
            <div className="flex items-center text-gray-500">
              <AiOutlineEye className="w-5 h-5 mr-2" />
              <span>{formatNumber(course.viewCount)}</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-3xl">{course.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Experts Section */}
            <section className="mb-12">
              <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Taught by</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courseData.experts.map((expert, index) => (
                  <ExpertCard key={index} {...expert} />
                ))}
              </div>
            </section>

            {/* Course Content Section */}
            <section>
              <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Course Content</h2>
              <CourseContentList items={courseData.content} />
            </section>
          </div>

          {/* Related Courses Section */}
          <aside>
            <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Related Courses</h2>
            <div className="space-y-6">
              {courseData.relatedCourses.map((course, index) => (
                <RelatedCourseCard key={index} {...course} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
