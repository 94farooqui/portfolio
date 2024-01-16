import React from 'react'

const SkillIcon = ({image,tooltip}) => {
  return (
    <div className='relative flex flex-col items-center justify-center group w-[150px] h-[150px]'>
        <div className='w-[96px] h-[96px] bg-gray-800 rounded-lg p-4 transition-all ease-in-out duration-500'>
            <img src={image} className='object-cover'/>
        </div>
        <p className='absolute  -bottom-2 hidden group-hover:block bg-slate-600 text-white text-nowrap rounded-md mt-2 px-2 transition-all ease-in-out duration-500'>{tooltip}</p>
    </div>
    
  )
}

export default SkillIcon