import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        id: 1,
        title: 'FitHub',
        description: 'This project was created to provide the user with an application to display their fashion sense. Users will be able to put together outfits, save them to their account, and display them to other users',
        tech1: 'Handlebars.js',
        tech2: 'Express.js',
        codeLink: 'https://github.com/BrianPizz/fithub',
        demoLink: 'https://morning-ravine-18715-2df03199dbf8.herokuapp.com/',
        imageLink: '/assets/images/fithub.png', 
    },
    {
        id: 2,
        title: 'techBlog',
        description: 'A blog for tech enthusiasts, developer, and anyone interested in the world of tech. Stay informed about the latest tech trends and engage with the community. Users can create an account, make posts, and interact with other posts.',
        tech1: 'Handlebars.js',
        tech2: 'MySQL',
        codeLink: 'https://github.com/BrianPizz/tech-blog',
        demoLink: 'https://secret-earth-93021-43fb7762532d.herokuapp.com/',
        imageLink: '/assets/images/techblog.png', 

    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Get weather information for any city. View current weather, five day forecast, and current date. Switch between metric and imperial units along with a persistent search history.',
        tech1: 'JavaScript',
        tech2: 'HTML/CSS',
        codeLink: 'https://github.com/BrianPizz/weather-dashboard',
        demoLink: 'https://brianpizz.github.io/weather-dashboard/',
        imageLink: '/assets/images/weatherapp.png', 

    },
]

function Portfolio() {
    return (
        <div name='portfolio' className='w-full h-screen bg-gradient-to-t to-slate-700 from-black text-white flex flex-col items-center'>
            <p className='text-rose-300 text-xl mb-4'>Portfolio</p>

            {/* projects container */}
            <div className='w-8/12'>
                {/* projects */}
                {projects.map((project) => (
                <ProjectCard 
                key={project.id}
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