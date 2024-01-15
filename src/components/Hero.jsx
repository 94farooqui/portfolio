import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-60px)]'>
        <div className='h-full flex flex-col justify-center py-8'>
        <div className='w-full h-full mx-auto flex items-center justify-between'>
            <div>
                <h4 className='text-6xl font-bold text-slate-200 leading-tight '>Hi, <br/> I'm <span>Mubasshir Farooqui</span></h4>
                <h4 className='text-indigo-400 font-bold text-5xl leading-tight'>Web Developer</h4>
            </div>
            <div>
                <img src='join.svg' width={'400px'} />
            </div>
        </div>
        <h1 className='text-white'>github</h1>
        </div>
    </div>
  )
}

export default Hero