import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

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

export default Navbar;
