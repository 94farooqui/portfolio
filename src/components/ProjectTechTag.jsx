import React from 'react'
import {motion} from 'framer-motion'

const ProjectTechTag = ({text,index}) => {
  const delay = index * 0.1;


  const listItemVariants = {
    initial:{opacity:0, y:100},
    animated : {opacity : 1, y:0, transition : {staggerChildren : 0.1}}
  }
  return (
    <motion.div className='bg-gray-700 text-indigo-300 rounded-full px-3 py-1 text-sm'
      variants={listItemVariants}
    >
        <p>{text}</p>
    </motion.div>
  )
}

export default ProjectTechTag