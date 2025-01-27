import Image from 'next/image';

interface ExpertCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function ExpertCard({ name, role, imageUrl }: ExpertCardProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
