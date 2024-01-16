import React from 'react'

const Project = ({project}) => {
  return (
    <div className='grid grid-cols-3 gap-6'>
        <div className='font-bold col-span-3'>
            <h2 className='text-white text-3xl underline'>{project.name}</h2>
        </div>
        <div className='w-[400px] h-[300px] rounded-lg overflow-hidden drop-shadow-lg'>
            <img src={project.image} className='w-[400px] h-[300px] object-cover'/>
        </div>
        <div className='col-start-2 col-span-2'>
            <div className='grid grid-cols-1 gap-2 text-md'>
              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>FrontEnd :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    {project.technologies.frontend.map(tech => <p className='inline'>{tech},</p>)} 
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Backend :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    {project.technologies.backend.map(tech => <p className='inline'>{tech},</p>)} 
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Databse :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    {project.technologies.database.map(tech => <p className='inline'>{tech},</p>)} 
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Authentication :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    <p className='inline'>{project.technologies.authentication}</p>
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Testing :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    <p className='inline'>{project.technologies.testing}</p>
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Version control :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    <p className='inline'>{project.technologies.versionControl}</p>
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Documentation :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    <p className='inline'>{project.technologies.documentation}</p>
                </div>
              </div>

              <div className='flex gap-4 text-slate-300'>
                <p className='font-bold'>Deployment :</p>
                <div className='flex gap-2 italic text-slate-300'>
                    <p className='inline'>{project.technologies.deployment}</p>
                </div>
              </div>
              </div>
        </div>
        <div className='col-span-3 bg-slate-800 p-6 rounded-lg drop-shadow-lg'>
            <p className='text-xl text-white italic text-center'>{project.description}</p>
        </div>

    </div>
  )
}

export default Project