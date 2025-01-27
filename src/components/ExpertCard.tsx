import Image from 'next/image';

interface ExpertCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function ExpertCard({ name, role, imageUrl }: ExpertCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="relative w-full h-12 mb-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="font-medium text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
