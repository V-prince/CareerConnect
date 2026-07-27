import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md border-b border-zinc-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-15 px-5 sm:px-8 lg:px-10">
        
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-32 sm:w-36 lg:w-40 object-contain"
        />

        
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-indigo-600 transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition-all duration-300">
            Jobs
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition-all duration-300">
            About Us
          </li>
          <li className="cursor-pointer hover:text-indigo-600 transition-all duration-300">
            Contact
          </li>
        </ul>

        
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 border border-zinc-300 rounded-lg hover:bg-gray-100 transition-all duration-300">
            Login
          </button>

          <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300">
            Register
          </button>
        </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>


      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 border-t" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col px-5 py-4 gap-4 font-medium bg-white">
          <li className="cursor-pointer hover:text-indigo-600">Home</li>
          <li className="cursor-pointer hover:text-indigo-600">Jobs</li>
          <li className="cursor-pointer hover:text-indigo-600">About Us</li>
          <li className="cursor-pointer hover:text-indigo-600">Contact</li>

          <hr />

          <button className="w-full border border-zinc-300 rounded-lg py-2 hover:bg-gray-100">
            Login
          </button>

          <button className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700">
            Register
          </button>
        </ul>
      </div>
    </header>
  );
}