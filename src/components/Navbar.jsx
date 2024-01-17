import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(themeContext);
  return (
    <div
      className={`w-full h-[100px] z-10 flex flex-col justify-center  px-6 sticky top-0 left-0`}
    >
      <div className="flex justify-between items-center">
        <button
          className={`w-24 rounded-lg text-slate-400 py-4 px-6 font-semibold text-xl ${
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
        <div className={`rounded-lg py-4 px-12 bg-indigo-500 `}>
          <ul className="flex gap-8 text-slate-400 font-semibold text-xl">
            <li className="hover:text-white">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Skills
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li className="hover:text-white">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Contact
              </NavLink>
            </li>
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
