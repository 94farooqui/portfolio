import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { themeContext } from '../context/ThemeContext'

const Navbar = () => {
    const {darkTheme,setDarkTheme} = useContext(themeContext)
  return (
    <div className={`w-full h-[60px] flex flex-col justify-center ${darkTheme ? `bg-zinc-800`:`bg-indigo-600`} px-6 sticky top-0 left-0`}>
        <div className='flex justify-between items-center'>
            <h1 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-4xl`}>M</h1>
            <span className='flex items-center gap-5'>
                <ul className='flex gap-5 text-white font-semibold text-xl'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/skills'>Skills</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                <button onClick={()=>setDarkTheme(!darkTheme)}><img src='theme-toggle.svg' width='32px'  /></button>
            </span>
        </div>
    </div>
  )
}

export default Navbar