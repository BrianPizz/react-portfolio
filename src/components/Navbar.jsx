import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // set home as the active link
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavClick = () => setNav(!nav);



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
      <div className='text-rose-500'>Brian Pizzimenti</div>

      {/* Nav */}
      <ul className='hidden md:flex'>
        <Link to='home' activeClass='active' smooth={true} spy={true} duration={500}>
          <li>
            Home
          </li>
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} duration={500}>
          <li>
            About
          </li>
        </Link>
        <Link to='portfolio' activeClass='active' smooth={true} spy={true} duration={500}>
          <li>
            Portfolio
          </li>
        </Link>
        <Link to='resume' activeClass='active' smooth={true} spy={true} duration={500}>
          <li>
            Resume
          </li>
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} duration={500}>
          <li>
            Contact
          </li>
        </Link>
      </ul>

      {/* Menu */}
      <div className='md:hidden z-10 cursor-pointer' onClick={handleNavClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <li
          className={`py-6 text-4xl ${activeLink === 'Home' ? 'active-link' : ''}`}
          onClick={() => handleNavLinkClick('Home')}
        >
          Home
        </li>
        <li
          className={`py-6 text-4xl ${activeLink === 'About' ? 'active-link' : ''}`}
          onClick={() => handleNavLinkClick('About')}
        >
          About
        </li>
        <li
          className={`py-6 text-4xl ${activeLink === 'Portfolio' ? 'active-link' : ''}`}
          onClick={() => handleNavLinkClick('Portfolio')}
        >
          Portfolio
        </li>
        <li
          className={`py-6 text-4xl ${activeLink === 'Resume' ? 'active-link' : ''}`}
          onClick={() => handleNavLinkClick('Resume')}
        >
          Resume
        </li>
        <li
          className={`py-6 text-4xl ${activeLink === 'Contact' ? 'active-link' : ''}`}
          onClick={() => handleNavLinkClick('Contact')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
