import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed">

            {/* container */}
            <div className='max-w-1000px mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-rose-500 sm:text-2xl'>👋🏻 Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white my-3'>Brian Pizzimenti</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-slate-400'>I'm a passionate Full Stack Developer based in Los Angeles, CA. 📍</h2>
                <div className='text-white flex sm:text-xl my-4'>
                    <p className='mr-3 my-auto'>Tech Stack</p>
                    <div className='mr-3 my-auto'>|</div>
                    <div>
                        <i className="devicon-html5-plain colored text-3xl sm:text-4xl mr-1"></i>
                        <i className="devicon-css3-plain colored text-3xl sm:text-4xl"></i>
                        <i className="devicon-javascript-plain colored text-3xl sm:text-4xl mx-2"></i>
                        <i className="devicon-nodejs-plain colored text-3xl sm:text-4xl mx-2"></i>
                        <i className="devicon-express-original text-3xl sm:text-4xl"></i>
                        <i className="devicon-mysql-plain colored text-3xl sm:text-4xl ml-2"></i>
                        <i className="devicon-mongodb-plain colored text-3xl sm:text-4xl"></i>
                        <i className="devicon-react-plain colored text-3xl sm:text-4xl mx-2"></i>
                        <i className="devicon-tailwindcss-plain colored text-3xl sm:text-4xl mx-2"></i>
                    </div>
                </div>
                <div className='my-2'>
                    <button className='group text-rose-500 border-rose-500 border-2 px-6 py-3 text-xl flex items-center hover:bg-rose-500 hover:text-black'>
                        My Work 
                        <span className='group-hover:rotate-90 duration-300 ml-1'>
                        <HiArrowNarrowRight className='ml-3' />
                        </span>
                        </button>
                </div>
            </div>

        </div>
    )
}

export default Home