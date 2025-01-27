import ExpertCard from '@/components/ExpertCard';
import CourseContentList from '@/components/CourseContentList';
import CourseCard from '@/components/CourseCard';
import { AiOutlineEye, AiOutlineClockCircle } from 'react-icons/ai';
import { formatNumber } from '@/utils/format';
import { courseDetails } from '@/data/courseDetails';
import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
  const waveNumber = (courseIndex % 6) + 1;
  const wavePath = `/images/courses/background/wave_${waveNumber}.png`;

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <div className="relative w-full h-[100px] sm:h-[240px]">
          <Image
            src={wavePath}
            alt=""
            fill
            className="object-contain sm:object-fill"
            priority
          />
        </div>

        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="flex flex-col max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <AiOutlineClockCircle className="w-4 h-4 mr-1" />
                <span>16 Lessons</span>
              </div>
              <div className="flex items-center">
                <AiOutlineEye className="w-4 h-4 mr-1" />
                <span>{formatNumber(course.viewCount)} views</span>
              </div>
            </div>

            <h1 className="text-[2.5rem] sm:text-6xl font-serif mb-6 leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-coral-600 text-white px-6 py-3 rounded-lg hover:bg-coral-700 transition-colors">
                Start Learning
              </button>
              <button className="text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Buy This Course →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3">
            {/* Experts Section */}
            <section className="mb-12 -mx-4 sm:-mx-8 px-4 sm:px-8 py-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-serif mb-8">{`Experts you'll learn from`}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ExpertCard
                    name="Dr. Terri Woodard Plowden"
                    title="Co-Director, Oxford Endo"
                    institution="Walter Reed Medical Center"
                    image="Alice_Domar_Expert_HS.png"
                  />
                  <ExpertCard
                    name="Dr. Shannon Cross"
                    title="Medical Director"
                    institution="Johns Hopkins School of Medicine"
                    image="chantel_cross.png"
                  />
                  <ExpertCard
                    name="Dr. Caroline McCaffrey"
                    title="Laboratory Director"
                    institution="NYU School of Medicine"
                    image="Torie_Comeaux_Plowden__Expert_HS.png"
                  />
                  <ExpertCard
                    name="Dr. Christian M. Becker"
                    title="Associate Professor, Oxford University"
                    institution="Oxford (England)"
                    image="Christian_Becker_Expert_HS.png"
                  />
                  <ExpertCard
                    name="Dr. Eric Forman"
                    title="Medical Director"
                    institution="Columbia University Medical Center"
                    image="Eric_Forman_Expert_HS.png"
                  />
                  <ExpertCard
                    name="Dr. Nalini Kaul (Mahajan)"
                    title="Director, Mother & Child Hospital"
                    institution="Scientific Director, Fertility Fertility Clinics India"
                    image="Nalini_Kaul_Expert_HS.png"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="text-gray-700 mt-6 text-sm hover:text-gray-900">
                    Show 18 More
                  </button>
                </div>
              </div>
            </section>

            {/* Course Content Section */}
            <section className="mb-12">
              <CourseContentList
                content={[
                  {
                    id: 1,
                    title: "What is IVF?",
                    duration: 480,
                    topics: [
                      "Summary of the IVF Process",
                      "Why do IVF? Who does it help?",
                      "Success Rates: How Often Does IVF Work?",
                      "IVF Compared To Other Fertility Treatments"
                    ]
                  },
                  {
                    id: 2,
                    title: "The Steps and Decisions In The IVF Process",
                    duration: 840,
                    topics: [
                      "The IVF Timeline & Forms!",
                      "Ovarian Stimulation & Monitoring",
                      "Egg Retrieval",
                      "Egg Fertilization",
                      "Growing Embryos",
                      "Chromosomally Normal Embryos",
                      "Embryo Transfer Decisions",
                      "Pregnancy Testing, Early Pregnancy and Delivery"
                    ]
                  },
                  {
                    id: 3,
                    title: "IVF Success Rates",
                    duration: 240,
                    topics: []
                  },
                  {
                    id: 4,
                    title: "Ovarian Stimulation Protocols",
                    duration: 2700,
                    topics: []
                  },
                  {
                    id: 5,
                    title: "Conventional Insemination or ICSI",
                    duration: 540,
                    topics: []
                  },
                  {
                    id: 6,
                    title: "Growing Embryos To Cleavage or Blastocyst Stage",
                    duration: 1440,
                    topics: []
                  },
                  {
                    id: 7,
                    title: "PGT-A and PGS Genetic Screening of Embryos",
                    duration: 540,
                    topics: []
                  }
                ]}
              />
            </section>

            {/* Other Courses Section */}
            <section className="mb-12">
              <h2 className="text-[2rem] font-serif mb-8">Other courses you might like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses
                  .filter(c => c.slug !== slug)
                  .slice(0, 6)
                  .map((course, index) => (
                    <CourseCard
                      key={course.slug}
                      title={course.title}
                      description={course.description}
                      experts={course.experts}
                      viewCount={course.viewCount}
                      slug={course.slug}
                      index={index}
                    />
                  ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
