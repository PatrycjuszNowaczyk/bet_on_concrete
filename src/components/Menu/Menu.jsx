import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <nav className="flex justify-center bg-neutral-500 text-white">
        <div className="logo"></div>
        <ul className="flex">
          <li className="relative mx-2">
            <Link
              className="inline-block p-2 mt-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:scale-x-0 before:bg-white before:pb-1 before:transition-transform before:duration-700 hover:before:duration-300 hover:before:scale-100 group"
              to="/"
            >
              <span className="relative px-2 py-1 font-AdventPro after:absolute after:top-0 after:left-0 after:border-2 after:border-black after:w-full after:h-full after:opacity-0 after:transform-all after:duration-300 group-hover:after:opacity-100">
              Home
              </span>
            </Link>
          </li>
          <li className="relative mx-2">
            <Link
              className="inline-block p-2 mt-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:scale-x-0 before:bg-white before:pb-1 before:transition-transform before:duration-700 hover:before:duration-300 hover:before:scale-100 group"
              to="/about"
            >
                            <span className="relative px-2 py-1 font-AdventPro after:absolute after:top-0 after:left-0 after:border-2 after:border-black after:w-full after:h-full after:opacity-0 after:transform-all after:duration-300 group-hover:after:opacity-100">
              About
              </span>
            </Link>
          </li>
          <li className="relative mx-2">
            <Link
            className="inline-block p-2 mt-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:scale-x-0 before:bg-white before:pb-1 before:transition-transform before:duration-700 hover:before:duration-300 hover:before:scale-100 group"
              to="/shop"
            >
                            <span className="relative px-2 py-1 font-AdventPro after:absolute after:top-0 after:left-0 after:border-2 after:border-black after:w-full after:h-full after:opacity-0 after:transform-all after:duration-300 group-hover:after:opacity-100">
              Shop
              </span>
            </Link>
          </li>
          <li className="relative mx-2">
            <Link
            className="inline-block p-2 mt-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:scale-x-0 before:bg-white before:pb-1 before:transition-transform before:duration-700 hover:before:duration-300 hover:before:scale-100 group"
              to="/contact"
            >
                            <span className="relative px-2 py-1 font-AdventPro after:absolute after:top-0 after:left-0 after:border-2 after:border-black after:w-full after:h-full after:opacity-0 after:transform-all after:duration-300 group-hover:after:opacity-100">
              Contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
