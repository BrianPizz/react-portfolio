import React from 'react'
// destructure props
function ProjectCard({ key, title, description, tech1, tech2, codeLink, demoLink, imageLink, index }) {
    // display image on left side on projects with an even numbered index
    const isEven = index % 2 === 0;
    const leftSide = isEven ? 'md:w-6/12' : 'md:w-6/12 order-2'

    return (
        <div key={key} className=' bg-black md:flex w-full p-5 rounded-2xl mb-5 shadow-2xl'>
            {/* image section */}
            <div className={`rounded-2xl overflow-clip ${leftSide}`}>
                <img src={imageLink} alt={title} className='object-scale-down h-full' />
            </div>
            {/* info section */}
            <div className='text-center flex flex-col md:w-6/12 px-4 my-2'>
                <div>
                    <h2 className='text-xl mb-3'> {title} </h2>
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
