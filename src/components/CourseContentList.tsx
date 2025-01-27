import { FiChevronDown } from 'react-icons/fi';

interface Lesson {
  id: number;
  title: string;
  duration: number;
  topics: string[];
}

interface CourseContentListProps {
  content: Lesson[];
}

export default function CourseContentList({ content }: CourseContentListProps) {
  return (
    <div>
      <h2 className="text-[2rem] font-serif mb-8">Course syllabus</h2>
      <div className="space-y-2">
        {content.map((lesson, index) => (
          <div key={lesson.id} className="border border-gray-200 rounded-lg bg-white">
            <button className="w-full text-left p-5 hover:bg-gray-50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-500 mb-1">Lesson {index + 1}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 border-b pb-4">{lesson.title}</h3>
                  {lesson.topics && lesson.topics.length > 0 && (
                    <div className="space-y-2.5">
                      {lesson.topics.map((topic, i) => (
                        <div key={i} className="text-[15px] text-gray-600">
                          {topic}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-sm text-gray-500 whitespace-nowrap">{Math.round(lesson.duration / 60)} min</span>
                  <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
