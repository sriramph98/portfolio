/* About Me */

import React from 'react'
import ExperienceCard from '@ui/experienceCard'
import Divider from '@ui/divider'
import {motion} from 'framer-motion'
import { FadeIn, SlideInBottom } from '@/components/animation/animation'
import aboutMeData from '@components/aboutMe.json'


interface AboutMeData {
  id: number,
  company: string,
  designation: string,
  fromYear: string,
  toYear: string,
  description: string,
}

const experience: AboutMeData[] = JSON.parse(JSON.stringify(aboutMeData.experience));
const education: AboutMeData[] = JSON.parse(JSON.stringify(aboutMeData.education));

export default function AboutMe() {
  return (

    <React.Fragment>

      <SlideInBottom>
      <div id="aboutMe">

<div className="px-4 py-4 md:px-40 lg:px-60 ">

  <div>

    <div className='pb-8'>

    <p className="bigTitle">About Me</p>

<p className="paragraph">As a User Experience Designer, I bring a unique blend of design and technical skills to the table. With over 3 years of experience in creating intuitive and user-centered designs, I am passionate about improving the way people interact with technology.</p>

    </div>

    {/* Experience & Education */}

    <div className="flex gap-8 ">

      {/* Experience */}

      <div className="w-full">
        <p className="subtitle">Experience</p>

                {
                  experience.map(item => (
                    <ExperienceCard key={item.id} company={item.company} designation={item.designation} fromYear={item.fromYear} toYear={item.toYear} description={item.description}   />
                  ))

                }

      </div>

      {/* Education */}

      <div className="w-full">
        <p className="subtitle">Education</p>

        {
                  education.map(item => (
                    <ExperienceCard key={item.id} company={item.company} fromYear={item.fromYear} toYear={item.toYear} designation={item.designation}   />
                  ))

                }

      </div>

    </div>

  </div>





</div>
</div>


      </SlideInBottom>

     

    </React.Fragment>


  )
}
