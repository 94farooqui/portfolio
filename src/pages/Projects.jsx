import React from 'react'
import data from './../data/projects.json'
import Project from '../components/Project';

const Projects = () => {
  const {projects} = data;
  return (
    <div className='w-full mx-auto py-12'>
      <h2 className='text-indigo-600 text-center text-4xl font-bold mb-8'>Projects</h2>
      <div className='flex flex-col gap-8'>
        {projects.map((project,index) => <span key={index}><Project project={project}/></span>)}
      </div>
    </div>
  )
}

export default Projects