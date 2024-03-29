import React from 'react'
import data from './../data/skills.json'
import SkillIcon from '../components/SkillIcon';

const Skills = () => {
  const {skills} = data;
  return (
    <div className='w-[70%] mx-auto py-12 font-body'>
      <h4 className='text-indigo-500 text-center text-4xl font-bold mb-12'>Skills</h4>
      <div className='grid grid-cols-5 gap-6'>
        {skills.map((skill,index) => <span key={index}><SkillIcon tooltip={skill.tooltip} image={skill.image} /> </span>)}
      </div>
    </div>
  )
}

export default Skills