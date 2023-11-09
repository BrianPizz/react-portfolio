import React from 'react'
import ProjectCard from './ProjectCard'

function Portfolio() {
    return (
        <div name='portfolio' className='w-full h-screen bg-gradient-to-t to-slate-700 from-black text-white flex flex-col items-center'>
            <p className='text-rose-300 text-xl mb-4'>Portfolio</p>

            {/* projects container */}
            <div className='w-8/12'>
                {/* projects */}
                <ProjectCard />
            </div>

        </div>
    )
}

export default Portfolio