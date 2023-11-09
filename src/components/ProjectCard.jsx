import React from 'react'

function ProjectCard({ key, title, description, tech1, tech2, codeLink, demoLink, imageLink }) {
    return (
        <div key={key} className='border-2 md:flex w-full p-3 rounded-2xl mb-5 shadow-2xl'>
            <div className='rounded-2xl md:w-6/12 overflow-clip '>
                <img src={imageLink} alt={title} className='object-scale-down h-full' />
            </div>
            <div className='md:w-6/12 px-4 my-2 text-center flex flex-col'>
                <div>
                    <h2 className='text-xl'> {title} </h2>
                    <p className=' text-slate-300'> {description} </p>
                </div>
                <div className='flex justify-center mt-4 mb-4 text-xl font-bold'>
                    <p className='mx-2 p-1 border rounded shadow-xl bg-white text-black'> {tech1} </p>
                    <p className='mx-2 p-1 border rounded shadow-xl bg-white text-black'> {tech2} </p>
                </div>
                <div className='mt-auto flex justify-between text-2xl font-bold text-rose-300'>
                    <a href={codeLink} target='blank'>Code
                        <i className="devicon-github-original ml-2"></i>
                    </a>
                    <a href={demoLink} target='blank'>Live Demo 🔗</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
