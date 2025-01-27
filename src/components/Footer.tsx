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
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <Link href="/" className="text-2xl font-serif italic">
            inflection
          </Link>
          <div className="flex items-center gap-3">
            <Image
              src="/women_owned.png"
              alt="Women Owned Business"
              width={40}
              height={40}
              className="object-cover"
            />
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/images/experts/deborah.jpeg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col space-y-6 lg:space-y-3">
            {/* Main Navigation */}
            <nav className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-3 gap-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:underline whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Bottom Links */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-3 gap-x-8">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:underline whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="lg:max-w-[30%] lg:text-right">
            <p className="text-xs opacity-80">
              Our content is for informational purposes only — it is not a substitute for medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
