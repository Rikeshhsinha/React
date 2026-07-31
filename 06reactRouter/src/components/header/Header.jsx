import React from 'react'

import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <>
         <header className="w-full bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

      
        <div>
          <Link to="/" className="text-3xl font-bold text-white">
            Git<span className="text-blue-500">Finder</span>
          </Link>
        </div>

      
        <div className="flex justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-blue-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-blue-400 transition"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-white hover:text-blue-400 transition"
            }
          >
            Github
          </NavLink>
        </div>

        
        <div className="flex justify-end gap-4">
          <button className="text-white hover:text-blue-400 transition">
            Login
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
            Get Started
          </button>
        </div>

      </nav>
    </header>
  
        </>
    )
}

export default Header
