import ExpertCard from '@/components/ExpertCard';
import CourseContentList from '@/components/CourseContentList';
import RelatedCourseCard from '@/components/RelatedCourseCard';
import { AiOutlineEye } from 'react-icons/ai';
import { formatNumber } from '@/utils/format';
import { courseDetails } from '@/data/courseDetails';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const courseData = courseDetails[slug];

  if (!courseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-serif">{courseData.title}</h1>
            <div className="flex items-center text-gray-500">
              <AiOutlineEye className="w-5 h-5 mr-2" />
              <span>{formatNumber(courseData.viewCount)}</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-3xl">{courseData.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Experts Section */}
            <section className="mb-12">
              <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Taught by</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courseData.experts.map((expert) => (
                  <ExpertCard
                    key={expert.name}
                    name={expert.name}
                    role={expert.role}
                    imageUrl={expert.imageUrl}
                  />
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
          <div>
            <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Related Courses</h2>
            <div className="space-y-4">
              {courseData.relatedCourses.map((course) => (
                <RelatedCourseCard
                  key={course.slug}
                  title={course.title}
                  slug={course.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
