import React from 'react'

function Footer() {
    return (
        <div className='fixed bottom-0 left-0 h-[45px] bg-black w-full pl-5 text-gray-300 flex items-center'>
            <a href='https://github.com/BrianPizz' target='blank'>
                <i className="devicon-github-original ml-2 text-3xl"></i>
            </a>
            <a href='https://www.linkedin.com/in/brian-pizzimenti-b1a53929a/' target='blank'>
                <i className="devicon-linkedin-plain ml-2 text-3xl"></i>
            </a>
            <a href='https://stackoverflow.com/users/22884760/pizz' target='blank' className='w-10 ml-1'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt="" />
            </a>
        </div>
    )
}

export default Footer