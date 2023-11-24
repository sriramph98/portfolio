import NowCard from '@ui/nowCard'
import React from 'react'
import { motion } from 'framer-motion'
import { SlideInBottom } from '@/components/animation/animation'
import nowData from '@components/now.json'
import { title } from 'process'

interface NowData {

  id: number,
  imagePath: string,
  title: string,
  author: string
}

const reading: NowData[] = JSON.parse(JSON.stringify(nowData.reading));
const listening: NowData[] = JSON.parse(JSON.stringify(nowData.listening));
const watching: NowData[] = JSON.parse(JSON.stringify(nowData.watching));
const playing: NowData[] = JSON.parse(JSON.stringify(nowData.playing));

export default function Now() {
  return (



    <React.Fragment>

      <SlideInBottom>
        <div id="now">

          <div className="px-4 md:px-40 lg:px-60 ">

            <div className='pb-8'>

              <p className="bigTitle">Now</p>
              <p>Inspired by Derek Sivers</p>
              <p className="paragraph py-2">Currently, Im focused on enhancing my design skills and strategy. Im constantly exploring new techniques and tools to improve my craft. Apart from work, Ive made a personal goal to read more books this year, and Im excited to dive into some inspiring design and technology literature.</p>
              <p className="footnote">Last updated February 2023</p>


            </div>


            <div>

              <p className="subtitle">Reading</p>


              <div className="flex gap-8">
                {
                  reading.map(item => (
                    <NowCard key={item.id} imagePath={item.imagePath} title={item.title} author={item.author}  />
                  ))

                }

              </div>



            </div>
            <div>
              <p className="subtitle">Watching</p>

              <div className="flex gap-8">
                {
                  listening.map(item => (
                    <NowCard key={item.id} imagePath={item.imagePath} title={item.title} author={item.author}  />
                  ))

                }

              </div>





            </div>
            <div>



              <p className="subtitle">Listening</p>

              <div className="flex gap-8">
                {
                  watching.map(item => (
                    <NowCard key={item.id} imagePath={item.imagePath} title={item.title}   />
                  ))

                }

              </div>




            </div>


            <div>

              <p className="subtitle">Playing</p>


              <div className="flex gap-8">
                {
                  playing.map(item => (
                    <NowCard key={item.id} imagePath={item.imagePath} title={item.title}   />
                  ))

                }

              </div>


            </div>

          </div>




        </div>






      </SlideInBottom>








    </React.Fragment>



  )
}
