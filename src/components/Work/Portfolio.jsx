import React from 'react'
import ProjectCard from './Project'
// import projects array from projects file
import projects from '../../utils/Projects'

function Portfolio() {
    return (
        <div name='portfolio' className='w-full bg-slate-700 text-white flex flex-col items-center pt-20'>
            <p className='text-4xl text-rose-300 mb-4'>Portfolio</p>
            {/* projects container */}
            <div className='w-10/12 md:w-8/12'>
                {/* pass projects props */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        index={index}
                        title={project.title}
                        description={project.description}
                        tech1={project.tech1}
                        tech2={project.tech2}
                        codeLink={project.codeLink}
                        demoLink={project.demoLink}
                        imageLink={project.imageLink}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio