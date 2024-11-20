import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Tech from './Personal/Tech';

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
            {/* container */}
            <div className='max-w-1000px mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-rose-500 sm:text-2xl'>👋🏻 Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white my-3'>Brian Pizzimenti</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-slate-400'>I'm a passionate Full Stack Developer based in Orlando, FL. 📍</h2>
                <div className='text-white flex sm:text-xl my-4'>
                    <p className='mr-3 my-auto'>Tech Stack</p>
                    <div className='mr-3 my-auto'>|</div>
                    <Tech />
                </div>
                <div className='my-2'>
                    <Link to='portfolio' activeClass='active' smooth={true} spy={true} duration={500}>
                        <button className='group text-rose-500 border-rose-500 border-2 px-6 py-3 text-xl flex items-center hover:bg-rose-500 hover:text-black'>
                            My Work
                            <span className='group-hover:rotate-90 duration-300 ml-1'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home