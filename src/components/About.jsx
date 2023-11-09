import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-t from-slate-700 to-black'>
            <div className='flex justify-center items-center w-full h-full'>

                <div className='hidden md:block mr-5'>
                    <img src="/assets/images/8bitpix.png" alt="Brian's avatar" />
                </div>
                <div className='ml-5 md:w-3/12'>
                    <p className='text-xl text-rose-300'>About Me 👨‍💻</p>
                    <p className='text-4xl font-bold text-slate-400 my-2'>A dedicated Full Stack Developer</p>
                    <p className='text-white mr-4 md:mr-0'>
                    As a web developer, I thrive on solving complex problems and creating efficient, elegant solutions. My technical toolbox includes a range of technologies, such as HTML5, CSS3, JavaScript, and the power of modern web frameworks like React. I love working with databases, whether it's setting up SQL databases like MySQL, building scalable NoSQL solutions with MongoDB, or using the versatile MERN stack.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About