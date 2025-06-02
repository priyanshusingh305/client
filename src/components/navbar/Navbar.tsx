'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import NavLink from './Navlink';
import { Button } from '@carbon/react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className={`fixed top--2 w-full z-100 transition-all duration-300 px-12 py-0 m-0`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="flex items-center  h-14 md:h-14">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className=" ml-10 "></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 ">
            <NavLink href="/" label="Home" />
            <NavLink href="/product" label="Product" />
            <NavLink 
              href="/resources" 
              label="Resources" 
              hasDropdown={true}
              dropdownItems={[
                { href: '/resources/videos', label: 'Videos' },
                { href: '/resources/case-studies', label: 'Case Studies' },
                { href: '/theysaid-2-0-magazine', label: '2.0 Magazine' },
                { href: '/newsletter', label: 'Newsletter' },
                { href: '/blog', label: 'Blog' },
                { href: 'https://podcasters.spotify.com/pod/show/theysaid', label: 'Podcast', external: true }
              ]}
            />
            <NavLink href="/pricing" label="Pricing" />
            <NavLink href="/contact" label="Contact" />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-[12px] float-right ml-auto">   
            <Button kind="primary" className="px-2 rounded-sm  hover:bg-gray-100" size="sm" href="/">
              Login 
            </Button>
            <Button kind="primary" size="sm" href="/" className='border border-gray-200 bg-white text-gray-900 rounded-[6px] px-4 py-2 text-sm font-medium leading-6 tracking-[-0.006em]'>
              Get Started - Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md font-medium text-[1] text-[#18181B] hover:text-gray-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden bg-white absolute left-0 right-0 shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavLink href="/" label="Home" />
                <MobileNavLink href="/product" label="Product" />
                <MobileNavLink href="/resources" label="Resources" />
                <MobileNavLink href="/pricing" label="Pricing" />
                <MobileNavLink href="/contact" label="Contact" />
                
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex flex-col px-4 space-y-3">
                    <Button kind="ghost" size="sm" href="https://ai.theysaid.io/sign-up" className="w-full">
                      Get Started - Free
                    </Button>
                    <Button kind="primary" size="sm" href="http://ai.theysaid.io/home" className="w-full">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

interface MobileNavLinkProps {
  href: string;
  label: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-200"
    >
      {label}
    </a>
  );
};

export default Navbar;