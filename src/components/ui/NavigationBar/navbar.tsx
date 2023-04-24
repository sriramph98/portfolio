import React from 'react'
import Link from 'next/link'
import NavBtn from './navBtn'
import {ContactLinkBtn} from '@ui/NavigationBar/contactLinkBtn'


export default function NavBar() {
  return (

    <React.Fragment>

<nav className="flex z-10 text-black dark:text-white items-center justify-between   bg-gradient-to-t from-transparent to-white dark:to-black px-8 py-4 sticky top-0">
  <div className="text-black dark:text-white font-bold">
    <a className='paragraph' href="#">Sriram Hemanth</a>
  </div>

  <div className=" flex space-x-4 ">
    <NavBtn path="/" name="Work"/>
    <NavBtn path="/now" name="Now"/>
    <NavBtn path="/aboutMe" name="About Me"/>

  </div>
  

  <div className="flex space-x-4">
 <ContactLinkBtn intent="primary" size="medium" path="mailto:srirmaph9812@gmail.com" name="Mail"/>
 <ContactLinkBtn path="https://twitter.com/sriramph98" name="Twitter"/>
 <ContactLinkBtn path="https://linkedin.com/in/sriram-ph" name="LinkedIn"/>

  </div>



</nav> 


    </React.Fragment>

  
   
  )
}
