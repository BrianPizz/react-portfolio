import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
// set nav state true or false each click
const [nav, setNav] = useState(false);
const handleNavClink = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-black text-gray-300'>

            {/* Nav */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>

            {/* Menu */}
            <div className='md:hidden z-10 cursor-pointer' onClick={handleNavClink}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Portfolio</li>
                <li className='py-6 text-4xl'>Resume</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar