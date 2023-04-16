import { Inter } from 'next/font/google'
import React from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function NavBar() {
  return (

    <React.Fragment>

<nav className="flex items-center justify-between bg-gradient-to-t from-transparent to-white dark:to-black p-4 sticky top-0">
  <div className="text-white font-bold">
    <a href="#">Sriram Hemanth</a>
  </div>

  <div className="bg-neutral-700 bg-opacity-40 backdrop-blur-md rounded-xl p-1 flex space-x-4 ">
    <Link href="/" className="NavBtn text-white hover:text-gray-300">Work</Link>
    <Link href="/now" className="NavBtn text-white hover:text-gray-300">Now</Link>
    <Link href="/aboutMe" className="NavBtn text-white hover:text-gray-300">About Me</Link>

  </div>
  

  <div className="flex space-x-4">
    <a href="mailto:sriramph9812@gmail.com" target="_blank" className="text-white hover:text-gray-300">
      Mail
    </a>
    <a href="https://twitter.com/sriramph98" target="_blank" className="text-white hover:text-gray-300">
      Instagram
    </a>
    <a href="https://linkedin.com/in/sriram-ph" target="_blank" className="text-white hover:text-gray-300">
      LinkedIn
    </a>
  </div>



</nav> 


    </React.Fragment>

  
   
  )
}
