import React from "react";

const Navbar = () => {
    return (
    <div>
    <nav className="bg-[#080320] text-white py-4 px-8 flex justify-between items-center">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-bold text-2xl">
        DEBUG
      </div>
      <ul className="flex space-x-6 text-xl gap-8">
        <li>
          <a href="#" className="hover:text-blue-400 transition-colors font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition-colors font-semibold">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition-colors font-semibold">
            Feature
          </a>
        </li>
        <li>
            <a href="#" className="hover:text-blue-400 transition-colors font-semibold">Contact</a>
        </li>
      </ul>
      <div className="text-white border border-white p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75L18 18m0 0l2.25 2.25M18 18l-2.25-2.25M18 18l2.25-2.25M10.5 6a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm1.5 13.5c-3 0-6.75-1.5-6.75-4.5 0-.75.75-2.25 3.75-3.75 2.25-1.5 4.5-1.5 6 0 1.5 1.5 2.25 2.25 2.25 3 0 3-3.75 4.5-6.75 4.5z"
          />
        </svg>
      </div>
    </nav>
</div>
    )
}
export default Navbar;