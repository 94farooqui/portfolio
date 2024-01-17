import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { themeContext } from '../context/ThemeContext'

const Navbar = () => {
    const {darkTheme,setDarkTheme} = useContext(themeContext)
  return (
    <div className={`w-full h-[60px] z-10 flex flex-col justify-center  px-6 py-4 sticky top-0 left-0`}>
        <div className='flex justify-between items-center'>
            <p className={`rounded-full text-slate-400 py-2 px-6 font-semibold text-xl ${darkTheme ? `bg-zinc-800`:`bg-gray-700`}`}><NavLink to='/' className=''>Home</NavLink></p>
            <div className={`rounded-full py-2 px-12 ${darkTheme ? `bg-zinc-800`:`bg-gray-700`}`}>
                <ul className='flex gap-8 text-slate-400 font-semibold text-xl'>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/skills'>Skills</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            <button onClick={()=>setDarkTheme(!darkTheme)}><img src='theme-toggle.svg' width='32px'  /></button>
        </div>
    </div>
  )
}

export default Navbar