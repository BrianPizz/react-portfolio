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
    {
        id: 4,
        title: 'Note Taker',
        description: 'The Note Taker App is a user-friendly web application that simplifies the process of taking and organizing notes. Whether you are a student, professional, or anyone in need of a reliable note-taking solution, this app is designed to streamline the note-taking experience.',
        tech1: 'JavaScript',
        tech2: 'Express.js',
        codeLink: 'https://github.com/BrianPizz/note-taker',
        demoLink: 'https://secure-wildwood-92062-f253f9758515.herokuapp.com/',
        imageLink: '/assets/images/noteapp.png', 
    },
    {
        id: 5,
        title: 'Moodie',
        description: 'On the Moodie app, a movie and meal plan is generated for users to have a perfect night in. Third-party APIs are used to suggest movie titles based off of a users response to prompts along with a recipe',
        tech1: 'JavaScript',
        tech2: 'HTML/BULMA',
        codeLink: 'https://github.com/BrianPizz/caseCamels-Moodie',
        demoLink: 'https://brianpizz.github.io/caseCamels-Moodie/',
        imageLink: '/assets/images/moodie.png', 
    },
    {
        id: 5,
        title: 'Password Generator',
        description: 'Used to generate a random secure password.',
        tech1: 'JavaScript',
        tech2: 'HTML/CSS',
        codeLink: 'https://github.com/BrianPizz/random-password-generator',
        demoLink: 'https://brianpizz.github.io/random-password-generator/',
        imageLink: '/assets/images/passwordapp.png', 
    },
]

function Portfolio() {
    return (
        <div name='portfolio' className='w-full bg-slate-700 text-white flex flex-col items-center'>
            <p className='text-rose-300 text-xl mb-4'>Portfolio</p>

            {/* projects container */}
            <div className='w-10/12 md:w-8/12'>
                {/* projects */}
                {projects.map((project, index) => (
                <ProjectCard 
                index={index}
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