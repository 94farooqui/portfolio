import React from 'react'
import about from './../data/about.json'

const About = () => {
  return (
   
     <div className='w-[70%] mx-auto py-10 font-body'>
        <h2 className='text-indigo-500 text-center text-4xl font-bold mb-12'>About</h2>
        <div className='flex flex-col gap-8 justify-between items-center'>
            <div className='flex-1'>
                <img src='vite.svg' width={'250px'} /> 
            </div>
            <p className='text-white text-3xl flex-1 leading-normal '>
        <span className='text-indigo-500 font-bold '>I'm a,<br/></span>{about.about}
        </p>
        </div>
        
    </div>
  )
}

export default About