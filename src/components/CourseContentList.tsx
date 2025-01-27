import { formatDuration } from '@/utils/duration';

interface ContentItem {
  title: string;
  duration: number;
}

interface CourseContentListProps {
  items: ContentItem[];
}

export default function CourseContentList({ items }: CourseContentListProps) {
  const totalDuration = items.reduce((acc, item) => acc + item.duration, 0);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <span className="text-sm text-gray-500">
          Total Duration: {formatDuration(totalDuration)}
        </span>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
        >
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">{(index + 1).toString().padStart(2, '0')}</span>
            <span className="text-sm text-gray-900">{item.title}</span>
          </div>
          <span className="text-sm text-gray-400">{formatDuration(item.duration)}</span>
        </div>
      ))}
    </div>
  );
}
