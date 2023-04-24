import Image from 'next/image'
import ReactPlayer from 'react-player'
import Link from 'next/link'
import React from 'react'
import ProjectDescription from '@ui/projectCard'
import ProjectCard from '@ui/projectCard'
import { motion } from 'framer-motion'
import { FadeIn, SlideInBottom } from '@animation/animation'
import images from '@components/data.json'

export default function Work() {

  interface ProjectCardData {
    id: number,
    type: string,
    colSpan: string,
    mediaPath: string,
    title: string,
    buttonPath: string,
    buttonTitle: string,
    category: string,
    year: string
  }

  const imagesArr: ProjectCardData[] = JSON.parse(JSON.stringify(images));


  return (

    <React.Fragment>

      <SlideInBottom>
        <div>


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
              {
                imagesArr.map(item => (
                  <ProjectCard type={item.type} img={item.mediaPath} colSpan={item.colSpan} title={item.title} buttonTitle={item.buttonTitle} buttonPath={item.buttonPath} category={item.category} year={item.year} />
                ))

              }



            </div>

          </div>

        </div>


      </SlideInBottom>

    </React.Fragment>

  )
}
