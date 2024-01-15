import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'
import Hero from '../components/Hero'


const Home = () => {
  const {darkTheme} = useContext(themeContext)
  return (
    <div className={`${darkTheme? `bg-zinc-900`:`white`}`}>
     <Hero/>
    </div>
  )
}

export default Home