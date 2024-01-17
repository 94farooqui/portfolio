import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-100px)]'>
        <div className='h-full flex flex-col justify-center py-8'>
        <div className='w-full h-full mx-auto flex items-center justify-between'>
            <div>
                <h4 className='text-6xl font-bold text-slate-200 leading-tight '>Hi, <br/> I'm <span>Mubasshir Farooqui</span></h4>
                <h4 className='text-indigo-500 font-bold text-5xl leading-tight'>Web Developer</h4>
            </div>
            <div>
                <img src='join.svg' width={'400px'} />
            </div>
        </div>
        <div className='flex gap-4'>
          <img src='github.svg' className='w-[48px] h-[48px] invert opacity-30'  />
          <img src='linkedin.svg' className='w-[48px] h-[48px] invert opacity-30'  />
        </div>
        </div>
    </div>
  )
}

export default Hero