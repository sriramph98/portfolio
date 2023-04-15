/* About Me */

import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import NavBar from '@/components/navbar'




const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {
  return (

    <React.Fragment>
<div>

<div class="px-4 md:px-40 lg:px-60 ">

  <div>
    
<p class="bigTitle">About Me</p>

<p class="paragraph">As a User Experience Designer, I bring a unique blend of design and technical skills to the table. With over 3 years of experience in creating intuitive and user-centered designs, I am passionate about improving the way people interact with technology.</p>

{/* Experience & Education */}

<div class="flex ">

{/* Experience */}

  <div class="w-full">
<p class="subtitle">Experience</p>

<div>

  <p class="heading">Zoho Corporation</p>
  <div class="flex"><p>UI Designer</p><p>•</p><p>2021 - 2023</p></div>
  <p class="caption">Collaborated with cross-functional teams to design user interfaces for iOS, iPadOS, Apple TV, macOS apps, and websites. My focus was to enhance the user experience, resulting in an improved product.</p>
  
</div>


<div>
  
  <p class="heading">Campus Avenue</p>
  <div class="flex"><p>Intern | UX Designer</p><p>•</p><p>Oct '18 to Dec '18</p></div>
  <p class="caption">Developed the user experience for an EduTech application, which was extensively used for pitching the product to potential stakeholders.</p>
  
</div>


<div>
  
  <p class="heading">One More Rep</p>
  <div class="flex"><p>Freelance | Video Editor</p><p>•</p><p>Oct '18 to Dec '18</p></div>
  <p class="caption">Worked closely with the production team to ensure that the videos were edited to a high standard and met the desired objectives. This included selecting appropriate music, adding graphics and special effects, and ensuring that the videos were consistent in terms of tone and style.</p>
  
</div>


<div>
  
  <p class="heading">Sri Venkateswara College of Engineering</p>
  <div class="flex"><p>Student Volunteer</p><p>•</p><p>Sep '18 - Sep '20</p></div>
  <p class="caption">Created a series of posters and other publicity materials that helped promote the event and drew in a huge crowd. From brainstorming concepts to selecting the perfect color schemes and typography, I loved every aspect of the design process</p>
  
</div>

  </div>

  {/* Education */}

  <div class="w-full">
  <p class="subtitle">Education</p>

<div>

  <p class="heading">Indiana University Bloomington</p>
  <div class="flex"><p>Incoming Student (HCI/d)</p><p>•</p><p>2023 - 2025</p></div>
  
</div>


<div>
  
  <p class="heading">Sri Venkateswara College of Engineering </p>
  <div class="flex"><p>B.E in Computer Science Engineering</p><p>•</p><p>2016 - 2020</p></div>
  
</div>


<div>
  
  <p class="heading">KRM Public School</p>
  <div class="flex"><p>Higher Secondary in Science</p><p>•</p><p>2014 - 2016</p></div>
  
</div>




  </div>

</div>

<hr></hr>

<div>
  <p class="subtitle">Let's create something amazing together!</p>
<p class="paragraph">From brainstorming to implementation, I'll be there every step of the way to ensure your vision is achieved. </p>
</div>

</div>


 


</div>
</div>


    </React.Fragment>

   
  )
}
