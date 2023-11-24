import React from 'react'
import ProjectCard from '@ui/projectCard'
import { SlideInBottom } from '@animation/animation'
import workData from '@components/work.json'



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

  const projectsArray: ProjectCardData[] = JSON.parse(JSON.stringify(workData));

  

  return (

    <React.Fragment>

      <SlideInBottom>
        <div id="work">


          <div className="px-4 md:px-20 lg:px-40 ">


            <div className='py-8'>

              <p className="quote py-8">Crafting experience  that matters</p>
              <div>
                <p className="paragraph">Im an independant creative based in Chennai.</p>
                <p className="paragraph">Formerly at Zoho Corporation and Campus Avenue.</p>

              </div>


            </div>





            <p className="bigTitle">Portfolio</p>




            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-6">
              {
                projectsArray.map(item => (
                  <ProjectCard key={item.id} colSpan={item.colSpan} type={item.type}  media={item.mediaPath} title={item.title} buttonTitle={item.buttonTitle} buttonPath={item.buttonPath} category={item.category} year={item.year} />
                ))

              }

            </div>

          </div>

        </div>


      </SlideInBottom>

    </React.Fragment>

  )
}
