import React from 'react'
import ProjectTechTag from './ProjectTechTag'

const Project = ({project}) => {
  return (
    <div className='grid grid-cols-3 gap-6 hover:bg-gray-800 p-8 rounded-lg group font-body'>
        
        <div className='col-start-1 col-span-1 w-[320px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg'>
            <img src={project.image} className='w-[400px] h-[300px] object-cover'/>
        </div>
        <div className='col-start-2 col-span-2 flex flex-col gap-4 rounded-lg drop-shadow-lg group-hover:drop-shadow-none'>
          <div className='font-bold col-span-3'>
            <h2 className='text-white text-3xl '>{project.name}</h2>
          </div>
            <p className='text-md text-slate-300'>{project.description}</p>
            <div className='flex flex-wrap gap-2  text-slate-300'>
                {project.technologies.frontend.map(tech =><ProjectTechTag text={tech}/>)}
                {project.technologies.backend.map(tech => <ProjectTechTag text={tech}/>)} 
                {project.technologies.database.map(tech => <ProjectTechTag text={tech} />)} 
                <ProjectTechTag text={project.technologies.authentication}/>
                <ProjectTechTag text={project.technologies.testing} />
                <ProjectTechTag text={project.technologies.versionControl}/>
                <ProjectTechTag text={project.technologies.documentation}/>
                <ProjectTechTag text={project.technologies.deployment}/>
            </div>
        </div>
    </div>
  )
}

export default Project