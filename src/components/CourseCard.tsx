import { AiOutlineEye } from 'react-icons/ai';
import { formatNumber } from '@/utils/format';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  experts: string[];
  viewCount: number;
  slug: string;
}

export default function CourseCard({
  title,
  description,
  experts,
  viewCount,
  slug
}: CourseCardProps) {
  const displayLimit = 2;
  const remainingCount = experts.length - displayLimit;

  return (
    <Link href={`/courses/${slug}`} className="block">
      <div className="relative group cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1">
        <div className="relative p-8 flex flex-col min-h-[400px] bg-[#FAFAFA] rounded-lg border border-gray-100">
          <div className="flex-grow">
            <h3 className="text-2xl font-serif mb-4 text-gray-900 transition-colors duration-300 group-hover:text-coral-600">{title}</h3>
            <p className="text-gray-600 text-sm mb-6 line-clamp-5">{description}</p>

            <div className="text-sm text-gray-500">
              <p className="mb-1">Featuring experts from</p>
              <p className="text-gray-900">
                {experts.slice(0, displayLimit).map((institution, index) => (
                  <span key={institution}>
                    {institution}
                    {index < Math.min(displayLimit, experts.length) - 1 && ', '}
                  </span>
                ))}
                {remainingCount > 0 && `, +${remainingCount} more`}
              </p>
            </div>
          </div>

          {viewCount > 0 && (
            <div className="absolute bottom-0 right-0 flex items-center text-gray-400 text-sm bg-coral-100 px-10 py-4 rounded-tl-xl">
              <AiOutlineEye className="w-4 h-4 mr-1 opacity-60" />
              <span>{formatNumber(viewCount)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
