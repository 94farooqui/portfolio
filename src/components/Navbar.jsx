import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(themeContext);
  return (
    <div
      className={`w-full h-[100px] z-10 flex flex-col justify-center  px-6 sticky top-0 left-0 font-body`}
    >
      <div className="flex justify-between items-center">
        <button
          className={`w-24 rounded-lg text-slate-400 py-4 font-semibold text-xl ${
            darkTheme ? `bg-zinc-800` : `bg-gray-700`
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            Home
          </NavLink>
        </button>
        <div className={`rounded-lg bg-indigo-500 overflow-hidden`}>
          <ul className="flex text-slate-400 font-semibold text-xl">
            
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-white shadow-inner shadow-inidgo-900 bg-indigo-700" : "")}
              >
                <li className="hover:text-white py-4 px-4">
                About</li>
              </NavLink>
            
           
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "text-white shadow-inner shadow-inidgo-900  bg-indigo-700" : "")}
              >
                 <li className="hover:text-white py-4 px-4">
                Skills</li>
              </NavLink>
            
            
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-white shadow-inner shadow-inidgo-900 bg-indigo-700" : "")}
              ><li className="hover:text-white py-4 px-4">
                Projects</li>
              </NavLink>
            
            
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-white shadow-inner shadow-inidgo-900 bg-indigo-700" : "")}
              ><li className="hover:text-white py-4 px-4">
                Contact</li>
              </NavLink>
            
          </ul>
        </div>
        <button
          className={`w-24 rounded-lg text-slate-400 py-4 text-center font-semibold text-xl`}
          onClick={() => setDarkTheme(!darkTheme)}
        >
          <img src="theme-toggle.svg" className="mx-auto" width={'32px'} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
