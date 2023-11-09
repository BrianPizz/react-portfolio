import React from 'react'
import { Link } from 'react-scroll';

function Navigation() {
    return (
        <>
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
        </>
    )
}

export default Navigation