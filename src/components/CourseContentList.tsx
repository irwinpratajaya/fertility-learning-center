interface ContentItem {
  title: string;
  duration?: string;
}

interface CourseContentListProps {
  items: ContentItem[];
}

export default function CourseContentList({ items }: CourseContentListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
        >
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">{(index + 1).toString().padStart(2, '0')}</span>
            <span className="text-sm text-gray-900">{item.title}</span>
          </div>
          {item.duration && (
            <span className="text-sm text-gray-400">{item.duration}</span>
          )}
        </div>
      ))}
    </div>
  );
}
