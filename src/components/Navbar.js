import React from "react";
import Icon from "../assets/Vithyea.jpg";

const Navbar = () => {
    return (
    <div>
    <nav className="bg-[#080320] text-white py-4 px-8 flex justify-between items-center">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-bold text-2xl">
        DEBUG
      </div>
      <ul className="flex space-x-6 text-xl gap-8">
        <li>
          <a href="https://lim-vithyea.github.io/Portfolio/" className="hover:text-blue-400 transition-colors font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="https://lim-vithyea.github.io/Portfolio/" className="hover:text-blue-400 transition-colors font-semibold">
            About Us
          </a>
        </li>
        <li>
          <a href="https://lim-vithyea.github.io/Portfolio/" className="hover:text-blue-400 transition-colors font-semibold">
            Feature
          </a>
        </li>
        <li>
            <a href="https://lim-vithyea.github.io/Portfolio/" className="hover:text-blue-400 transition-colors font-semibold">Contact</a>
        </li>
      </ul>
        <img src={Icon} className="rounded-full w-[50px] h-[50px]" alt="face"/>
    </nav>
</div>
    )
}
export default Navbar;