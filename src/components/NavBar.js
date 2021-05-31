import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-pink-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-pink-500"
          >
            Inicio
          </NavLink>
          <NavLink
            activeClassName="text-pink-500"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-gray-900 hover:text-pink-500"
            to="/post"
          >
            Blog Posts
          </NavLink>
          <NavLink
            activeClassName="text-pink-500"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-gray-900 hover:text-pink-500"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="text-pink-500"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-gray-900 hover:text-pink-500"
            to="/about"
          >
            About KIDO
          </NavLink>
              </nav>
              <div className="inline-flex py-3 px-3 my-6">
                  <SocialIcon url="https://www.linkedin.com/company/kido-dynamics/mycompany/" className="mr-4" target="_blank" fgColor="#f5f5f5" style={{height:35, width: 35}}/>
                  <SocialIcon url="https://twitter.com/kidodynamics" className="mr-4" target="_blank" fgColor="#f5f5f5" style={{height:35, width: 35}}/>

              </div>
      </div>
    </header>
  );
}
