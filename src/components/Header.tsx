import Link from 'next/link';
import { FiSearch, FiMenu } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Inflection
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/courses" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/find-doctor" className="text-gray-600 hover:text-gray-900">
              Find a Doctor
            </Link>
            <Link href="/employers" className="text-gray-600 hover:text-gray-900">
              For Employers
            </Link>
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            
            <button className="text-gray-600 hover:text-gray-900" aria-label="Search">
              <FiSearch className="w-5 h-5" />
            </button>
            
            <button className="text-gray-600 hover:text-gray-900" aria-label="Menu">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
