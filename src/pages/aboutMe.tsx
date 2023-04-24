/* About Me */

import React from 'react'
import ExperienceCard from '@ui/experienceCard'
import Divider from '@ui/divider'
import {motion} from 'framer-motion'
import { FadeIn, SlideInBottom } from '@/components/animation/animation'


export default function AboutMe() {
  return (

    <React.Fragment>

      <SlideInBottom>
      <div>

<div className="px-4 md:px-40 lg:px-60 ">

  <div>

    <p className="bigTitle">About Me</p>

    <p className="paragraph">As a User Experience Designer, I bring a unique blend of design and technical skills to the table. With over 3 years of experience in creating intuitive and user-centered designs, I am passionate about improving the way people interact with technology.</p>

    {/* Experience & Education */}

    <div className="flex gap-8 ">

      {/* Experience */}

      <div className="w-full">
        <p className="subtitle">Experience</p>

        <ExperienceCard company="Zoho Corporation" designation="UI Designer" fromYear="2016" toYear="2020" description="Collaborated with cross-functional teams to design user interfaces for iOS, iPadOS, Apple TV, macOS apps, and websites. My focus was to enhance the user experience, resulting in an improved product." />

        <ExperienceCard company="Campus Avenue" designation="Intern | UX Designer" fromYear="October" toYear="December 2018" description="Developed the user experience for an EduTech application, which was extensively used for pitching the product to potential stakeholders." />

        <ExperienceCard company="One More Rep" designation="Freelance | Video Editor" fromYear="2016" toYear="2020" description="Worked closely with the production team to ensure that the videos were edited to a high standard and met the desired objectives. This included selecting appropriate music, adding graphics and special effects, and ensuring that the videos were consistent in terms of tone and style." />

        <ExperienceCard company="Sri Venkateswara College of Engineering" designation="Student Volunteer" fromYear="September 2018" toYear="2020" description="Created a series of posters and other publicity materials that helped promote the event and drew in a huge crowd. From brainstorming concepts to selecting the perfect color schemes and typography, I loved every aspect of the design process" />

      </div>

      {/* Education */}

      <div className="w-full">
        <p className="subtitle">Education</p>


        <ExperienceCard company="Indiana University Bloomington" designation="Incoming Student (HCI/d)" fromYear="2023" toYear="2025" />


        <ExperienceCard company="Sri Venkateswara College of Engineering " designation="B.E in Computer Science Engineering" fromYear="2016" toYear="2020" />



        <ExperienceCard company="KRM Public School" designation="Higher Secondary in Science" fromYear="2014" toYear="2016" />





      </div>

    </div>
<Divider/>
    <div>
      <p className="subtitle">Let's create something amazing together!</p>
      <p className="paragraph">From brainstorming to implementation, I'll be there every step of the way to ensure your vision is achieved. </p>
    </div>

  </div>





</div>
</div>


      </SlideInBottom>

     

    </React.Fragment>


  )
}
