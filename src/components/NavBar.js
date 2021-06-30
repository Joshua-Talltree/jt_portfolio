import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-betweeen">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-800 text-4xl font-bold tracking-widest"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Josh Talltree
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-blue-100 bg-blue-700"
          >
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
