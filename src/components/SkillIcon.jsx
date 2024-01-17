import React from 'react'

const SkillIcon = ({image,tooltip}) => {
  return (
    <div className='relative flex flex-col items-center justify-center group w-[150px] h-[150px] transition duration-150 hover:scale-110 hover:ease-in-out'>
        <div className='w-[96px] h-[96px] bg-gray-900 rounded-lg p-4 transition-all ease-in-out duration-500'>
            <img src={image} className='object-cover'/>
        </div>
        <p className='absolute  -bottom-2 hidden group-hover:block bg-indigo-500 text-white text-nowrap rounded-md mt-2 px-2 transition-all ease-in-out duration-500'>{tooltip}</p>
    </div>
    
  )
}

export default SkillIcon