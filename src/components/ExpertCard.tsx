import Image from 'next/image';

interface ExpertCardProps {
  name: string;
  title: string;
  institution: string;
  image: string;
}

export default function ExpertCard({ name, title, institution, image }: ExpertCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
        <Image
          src={`/images/experts/${image}`}
          alt={name}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <h3 className="text-base font-medium text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 truncate">{title}</p>
        <p className="text-sm text-gray-600 mt-0.5 truncate">{institution}</p>
      </div>
    </div>
  );
}
