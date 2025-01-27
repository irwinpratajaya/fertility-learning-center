'use client'

import Link from 'next/link';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b relative bg-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold z-20">
            Inflection
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-gray-600 hover:text-gray-900" aria-label="Search">
              <FiSearch className="w-5 h-5" />
            </button>
            <button 
              className="text-gray-600 hover:text-gray-900 z-20" 
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/courses" 
                className="text-xl text-gray-900 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/find-doctor" 
                className="text-xl text-gray-900 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Doctor
              </Link>
              <Link 
                href="/employers" 
                className="text-xl text-gray-900 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                For Employers
              </Link>
              <Link 
                href="/sign-in" 
                className="text-xl text-gray-900 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
