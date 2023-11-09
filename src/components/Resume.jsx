import React from 'react';

function Resume() {
  return (
    <div className='w-full h-screen bg-gradient-to-t from-black to-slate-700'>
        <p className='text-xl text-rose-300 text-center pt-6'>Resume</p>
      <div className='container mx-auto py-10 px-4'>
        <p className='text-white mb-4'>Download <span className='text-rose-300'><a href="https://drive.google.com/file/d/14IaavanMSDmXGpOGmR8vp50Ebm1ZZdXE/view?usp=drive_link" target='blank'>resume</a></span></p>
        <h1 className='text-3xl font-bold text-white mb-4'>Brian Pizzimenti</h1>

        <h2 className='text-xl font-semibold text-white mb-4'>Summary:</h2>
        <p className='text-white mb-6'>
          I am a Full Stack Web Developer with a strong foundation in web technologies and a passion for creating dynamic and user-friendly web applications. A graduate of the UCLA Coding Bootcamp, I am proficient in HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, and React. I am dedicated to writing clean, efficient code and building responsive, interactive websites that deliver exceptional user experiences.
        </p>

        <h2 className='text-xl font-semibold text-white mb-4'>Education:</h2>
        <p className='text-white mb-6'>
          UCLA Coding Bootcamp<br />
          Full Stack Web Development<br />
          11/2023
        </p>

        <h2 className='text-xl font-semibold text-white mb-4'>Skills:</h2>
        <ul className='text-white mb-6 list-disc pl-6'>
          <li>Languages: HTML, CSS, JavaScript, jQuery</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Frontend: React</li>
          <li>Version Control: Git, GitHub</li>
          <li>Responsive Web Design</li>
          <li>API Integration</li>
          <li>Debugging and Testing</li>
          <li>Web Performance Optimization</li>
          <li>Cross-Browser Compatibility</li>
        </ul>

        <h2 className='text-xl font-semibold text-white mb-4'>Languages:</h2>
        <p className='text-white mb-6'>- Fluent in English</p>

        <h2 className='text-xl font-semibold text-white mb-4'>References:</h2>
        <p className='text-white mb-6'>Available upon request.</p>
      </div>
    </div>
  );
}

export default Resume;
