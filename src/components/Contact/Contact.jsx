import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-black flex flex-col items-center pt-20'>
      <p className='text-4xl text-rose-300 mb-4'>Contact</p>
      <form method='POST' action="https://getform.io/f/9e07be95-81c5-4728-ac4d-019c3f8cfc12" className='flex flex-col rounded-lg w-6/12 p-5 bg-slate-100'>
        <input required className='rounded p-1 shadow-lg' type="text" placeholder='Enter Your Name' name='name' />
        <input required className='my-4 p-1 rounded shadow-lg' type="email" placeholder='Enter Your Email' name='email' />
        <textarea required className='p-1 rounded shadow-lg' placeholder='Enter Your message' name="message" rows="10"></textarea>
        <button type='submit' className='border-2 mx-auto mt-4 px-4 py-1 rounded-2xl bg-rose-300 hover:bg-rose-500 hover:text-white'>Send</button>
      </form>
    </div>
  )
}

export default Contact