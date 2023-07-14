import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={process.env.NEXT_PUBLIC_LINK_HOME ?? ''} onClick={closeMobileMenu} className="text-white text-lg font-bold">
              { process.env.NEXT_PUBLIC_SITE_TITLE }
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href={process.env.NEXT_PUBLIC_LINK_ARTICLES ?? ''}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Articles
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_LINK_CONTACTS ?? ''}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacts
              </Link>
            </div>
          </div>
          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              { isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} /> }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden">
          <Link
            href={process.env.NEXT_PUBLIC_LINK_ARTICLES ?? ''}
            onClick={closeMobileMenu}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Articles
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_LINK_CONTACTS ?? ''}
            onClick={closeMobileMenu}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
}
