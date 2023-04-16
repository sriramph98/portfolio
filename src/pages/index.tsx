import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectDescription from '@/components/projectCard'
import ProjectCard from '@/components/projectCard'
import {motion} from 'framer-motion'





export default function Work() {
  return (

    <React.Fragment>
      <motion.div initial={{ y:100, opacity: 0, scale: 1 }}
    animate={{ y:0, opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }} >

        <div className="px-4 md:px-40 lg:px-60 ">

          <div className='py-8'>

             
              <p className="quote py-8">Crafting experience  that matters</p> 
            <div>
              <p className="paragraph">I'm an independant creative based in Chennai.</p>
              <p className="paragraph">Formerly at Zoho Corporation and Campus Avenue.</p>

            </div>


          </div>


          <p className="bigTitle">Portfolio</p>


          <div className="grid grid-cols-2 gap-16 py-6">
            

       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />

       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />


       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />

       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />


       <ProjectCard className="col-span-2" path="" title="iPhone" button="Explore" category="Zoho Show" year="2017" />

       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />
       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />


       <ProjectCard path="img1" title="iPhone" button="Explore" category="Zoho Show" year="2017" />


          </div>

        </div>

      </motion.div>

    </React.Fragment>

  )
}
