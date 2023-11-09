import React, { useState } from 'react';
import { Link } from 'react-scroll';


function MobileNav() {
    const [nav, setNav] = useState(false);
    const handleNavClick = () => setNav(!nav);

    return (
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
    )
}

export default MobileNav