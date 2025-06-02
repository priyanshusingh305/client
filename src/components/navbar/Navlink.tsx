'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface DropdownItem {
  href: string;
  label: string;
  external?: boolean;
}

interface NavLinkProps {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, hasDropdown = false, dropdownItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (hasDropdown) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative" ref={ref}>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
        onMouseEnter={() => hasDropdown && setIsOpen(true)}
        onMouseLeave={() => hasDropdown && setIsOpen(false)}
      >
        {hasDropdown ? (
          <button className="flex items-center gap-1 text-gray-900 tracking-tight rounded-md px-4 py-2 text-[14px] font-medium leading-10 hover:bg-gray-50  transition-colors duration-200">
            {label}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        ) : (
          <Link
            href={href}
            className="text-gray-900 tracking-tight rounded-md px-4 py-2 text-[14px] font-medium leading-6 hover:bg-gray-50 transition-colors duration-200"
          >
            {label}
          </Link>
        )}
      </div>

      {hasDropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            >
              <div className="py-2">
                {dropdownItems.map((item, index) => (
                  <DropdownItem
                    key={index}
                    href={item.href}
                    label={item.label}
                    external={item.external}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

interface DropdownItemProps {
  href: string;
  label: string;
  external?: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, label, external }) => {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-150"
      {...linkProps}
    >
      {label}
    </Link>
  );
};

export default NavLink;