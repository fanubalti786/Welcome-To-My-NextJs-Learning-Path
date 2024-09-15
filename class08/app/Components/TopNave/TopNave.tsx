import Link from 'next/link'
import React from 'react'

export default function TopNave() {
  return (
    <div>

<nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-gray-400">MySite</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link>
          <Link href="/Blogs" className="hover:text-gray-400 transition duration-300">Blogs</Link>
          <Link href="/services" className="hover:text-gray-400 transition duration-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button id="menu-button" className="text-2xl focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div id="menu" className="md:hidden bg-gray-800">
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link href="/" className="block text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block text-white hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link href="/services" className="block text-white hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="block text-white hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  
    </div>
  )
}
