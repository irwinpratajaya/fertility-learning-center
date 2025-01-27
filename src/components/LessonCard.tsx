interface LessonCardProps {
  title: string;
  category: string;
  slug: string;
}

export default function LessonCard({ title, category, slug }: LessonCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="p-6 bg-[#FAFAFA] rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-300">
        <div className="space-y-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">{category}</p>
          <h3 className="text-lg font-serif text-gray-900 group-hover:text-coral-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
