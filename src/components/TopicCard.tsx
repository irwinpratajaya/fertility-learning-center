import { AiOutlineEye } from 'react-icons/ai';
import { formatNumber } from '@/utils/format';

interface TopicCardProps {
  title: string;
  viewCount: number;
}

export default function TopicCard({ title, viewCount }: TopicCardProps) {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-coral-100 group-hover:bg-coral-200 transition-colors duration-300" />
      <div>
        <h3 className="text-xl text-gray-900 font-serif group-hover:text-coral-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="flex items-center text-gray-400 text-sm">
        <AiOutlineEye className="w-4 h-4 mr-1 opacity-60" />
        <span>{formatNumber(viewCount)}</span>
      </div>
    </div>
  );
}
