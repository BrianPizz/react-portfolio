import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // set home as the active link
  const [activeLink, setActiveLink] = useState('Home'); 

  const handleNavClick = () => setNav(!nav);

  // set clicked link to active
  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setNav(false); 
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
      <div className='text-rose-300'>Brian Pizzimenti</div>

      {/* Nav */}
      <ul className='hidden md:flex'>
        <li
          onClick={() => handleNavLinkClick('Home')}
          className={activeLink === 'Home' ? 'active' : ''}
        >
          Home
        </li>
        <li
          onClick={() => handleNavLinkClick('About')}
          className={activeLink === 'About' ? 'active' : ''}
        >
          About
        </li>
        <li
          onClick={() => handleNavLinkClick('Portfolio')}
          className={activeLink === 'Portfolio' ? 'active' : ''}
        >
          Portfolio
        </li>
        <li
          onClick={() => handleNavLinkClick('Resume')}
          className={activeLink === 'Resume' ? 'active' : ''}
        >
          Resume
        </li>
        <li
          onClick={() => handleNavLinkClick('Contact')}
          className={activeLink === 'Contact' ? 'active' : ''}
        >
          Contact
        </li>
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
