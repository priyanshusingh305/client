import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="">
      <img src="/logo.svg" alt="Logo" className="aspect-auto object-contain w-[8.70rem] h-8 pl-0" />
    </Link>
  );
};

export default Logo;