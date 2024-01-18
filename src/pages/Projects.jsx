import React from 'react'
import data from './../data/projects.json'
import Project from '../components/Project';
import {motion} from 'framer-motion'

const Projects = () => {
  const {projects} = data;
  const containerVariants ={
    hidden : {opacity:0, y:100},
    show : {opacity:1, y:0}
  };
  return (
    <div className='w-full mx-auto py-12 font-body'>
      <h2 className='text-indigo-500 text-center text-4xl font-bold mb-8'>Projects</h2>
      <motion.div className='flex flex-col gap-8' variants={containerVariants} initial="hidden" animate="show">
        {projects.map((project,index) => <span key={index}><Project project={project} index={index}/></span>)}
      </motion.div>
    </div>
  )
}

export default Projects