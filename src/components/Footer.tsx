import Image from 'next/image';
import Link from 'next/link';

const navigationLinks = [
  { name: 'Courses', href: '/courses' },
  { name: 'Find a Doctor', href: '/find-a-doctor' },
  { name: 'Share a Review', href: '/share-review' },
  { name: 'For Employers', href: '/for-employers' },
  { name: 'For Doctors and Clinics', href: '/for-doctors-clinics' },
  { name: 'All US Providers', href: '/us-providers' },
];

const bottomLinks = [
  { name: 'info@fertility.com', href: 'mailto:info@fertility.com' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFA69E] text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Top Section with Logo and Badge */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-2xl font-serif italic">
            inflection
          </Link>
          <div className="flex items-center gap-3">
            <div className="uppercase text-sm tracking-wide bg-white/20 px-3 py-1.5 rounded-full">
              Women Owned
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {/* Main Navigation */}
            <nav className="flex flex-wrap gap-x-8 mb-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Bottom Links */}
            <div className="flex flex-wrap gap-x-8 mb-3">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>


          {/* Disclaimer */}
          <div className="flex max-w-[30%] justify-end items-end">
            <p className="text-xs opacity-80">
              Our content is for informational purposes only — it is not a substitute for medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
