import React from 'react'
import Link from 'next/link'
import NavBtn from './navBtn'
import {ContactLinkBtn} from '@ui/NavigationBar/contactLinkBtn'


export default function NavBar() {
  return (

    <React.Fragment>

<nav className="flex z-10 text-black dark:text-white items-center justify-between   bg-gradient-to-t from-transparent to-white dark:to-black px-8 py-4 sticky top-0 ">
  <div className="text-black dark:text-white font-bold">
    <a className='' href="#">Sriram Hemanth Kumar</a>
  </div>

  <div className=" flex space-x-4 p-1 drop-shadow-lg rounded-xl   bg-dark-400 bg-opacity-30 backdrop-blur-lg ">
    <NavBtn path="/" name="Work"/>
    <NavBtn path="/now" name="Now"/>
    <NavBtn path="/aboutMe" name="About Me"/>

  </div>
  

  <div className=" space-x-4 hidden lg:block md:block">
 <ContactLinkBtn intent="primary" size="medium" path="mailto:srirmaph9812@gmail.com" target="_blank" rel="noopener"  name="Mail"  />
 <ContactLinkBtn path="https://twitter.com/sriramph98" target="_blank" rel="noopener" name="Twitter"  />
 <ContactLinkBtn path="https://linkedin.com/in/sriram-ph" target="_blank" rel="noopener" name="LinkedIn"  />

  </div>


</nav> 


    </React.Fragment>

  
   
  )
}
