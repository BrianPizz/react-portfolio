import React from 'react'

function ProjectCard() {
    return (
        <div className='border-2 md:flex w-full p-3 rounded-2xl'>
            <div className='rounded-2xl md:w-6/12 overflow-clip '>
                <img src="https://placehold.co/800x400" alt="placeholder" className='object-scale-down h-full' />
            </div>
            <div className='md:w-6/12 px-4 my-2 text-center flex flex-col'>
                <div>
                    <h2 className='text-xl'> Title </h2>
                    <p className=' text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit deserunt doloribus commodi, aspernatur labore voluptates autem sunt porro officiis eligendi laboriosam illum obcaecati maxime similique minima dolor illo! Ratione.</p>
                </div>
                <div className='flex justify-center mt-2 text-xl font-bold'>
                    <p className='mx-2'>Tech 1</p>
                    <p className='mx-2'>Tech 2</p>
                </div>
                <div className='mt-auto flex justify-between text-2xl font-bold text-rose-300'>
                    <a href='#'>Code
                        <i className="devicon-github-original ml-2"></i>
                    </a>
                    <a href='#'>Live Demo 🔗</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
