import React from 'react'

const About = () => {
  return (
   
     <div className='w-[50%] mx-auto py-12'>
        <h2 className='text-indigo-600 text-center text-4xl font-bold mb-12'>About</h2>
        <div className='flex flex-col gap-8 justify-between items-center'>
            <div className='flex-1'>
                <img src='vite.svg' width={'250px'} /> 
            </div>
            <p className='text-white text-2xl flex-1'>
        <span className='text-indigo-600'>Hello,<br/></span>
        Hard working software engineering student from Zenica in my third and final year. I'm also a former Pharmacy technician and a future full stack developer. I’ve found my passion in web development. I love spending time coding and encountering new challenges. I’m highly adaptable to new challenges and projects. I'm a Junior Scholar at Bosnia and Herzegovina Futures foundation and that is the best thing that happened to me.
        </p>
        </div>
        
    </div>
  )
}

export default About