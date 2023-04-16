import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (

    <React.Fragment>

<nav className="flex rounded-full  dark:text-white items-center justify-between bg-white dark:bg-black backdrop m-4 p-2 sticky top-0">
  <div className="text-black dark:text-white font-bold">
    <a href="#">Sriram Hemanth</a>
  </div>

  <div className="  flex space-x-4 ">
    <Link href="/" className="NavBtn  ">Work</Link>
    <Link href="/now" className="NavBtn  ">Now</Link>
    <Link href="/aboutMe" className="NavBtn  ">About Me</Link>

  </div>
  

  <div className="flex space-x-4">
    <a href="mailto:sriramph9812@gmail.com" target="_blank" >
      Mail
    </a>
    <a href="https://twitter.com/sriramph98" target="_blank" >
      Instagram
    </a>
    <a href="https://linkedin.com/in/sriram-ph" target="_blank" >
      LinkedIn
    </a>
  </div>



</nav> 


    </React.Fragment>

  
   
  )
}
