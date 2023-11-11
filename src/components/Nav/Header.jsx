import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';
import { Link } from 'react-scroll';


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
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
            <Link onClick={handleNavClick} to='home' activeClass='active' smooth={true} spy={true} duration={500}>
                <li className='py-6 text-4xl'>
                    Home
                </li>
            </Link>
            <Link onClick={handleNavClick} to='about' activeClass='active' smooth={true} spy={true} duration={500}>
                <li className='py-6 text-4xl'>
                    About
                </li>
            </Link>
            <Link onClick={handleNavClick} to='portfolio' activeClass='active' smooth={true} spy={true} duration={500}>
                <li className='py-6 text-4xl'>
                    Portfolio
                </li>
            </Link>
            <Link onClick={handleNavClick} to='resume' activeClass='active' smooth={true} spy={true} duration={500}>
                <li className='py-6 text-4xl'>
                    Resume
                </li>
            </Link>
            <Link onClick={handleNavClick} to='contact' activeClass='active' smooth={true} spy={true} duration={500}>
                <li className='py-6 text-4xl'>
                    Contact
                </li>
            </Link>
            </ul>
    </div>
  );
};

export default Header;
