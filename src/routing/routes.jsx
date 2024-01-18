import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import Projects from '../pages/Projects'
import Home from '../pages/Home'
import Error from '../pages/Error'
import RootLayout from '../layouts/RootLayout'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'




const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:'/skills',
                element: <Skills/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/projects',
                element: <Projects/>
            },
            {
                path:'/contact',
                element: <Contact/>
            }
        ]
    }
    
])

export default router;
