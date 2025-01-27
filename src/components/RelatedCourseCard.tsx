import Link from 'next/link';

interface RelatedCourseCardProps {
  title: string;
  slug: string;
}

export default function RelatedCourseCard({ title, slug }: RelatedCourseCardProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
        <h3 className="text-lg font-serif text-gray-900">{title}</h3>
      </div>
    </Link>
  );
}
