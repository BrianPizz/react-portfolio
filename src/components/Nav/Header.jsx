import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';
import MobileNav from './MobileNav';

const Header = () => {
  // toggle mobile nav visibility on click
  const [nav, setNav] = useState(false);
  const handleNavClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
      <div className='text-rose-500'>Brian Pizzimenti</div>
      <Navigation />
      {/* mobile menu icon */}
      <div className='md:hidden z-10 cursor-pointer' onClick={handleNavClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile nav */}
        <MobileNav />
    </div>
  );
};

export default Header;
