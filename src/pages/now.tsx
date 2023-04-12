import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Now() {
  return (

    <React.Fragment>

      <div>

        <div class="px-4 md:px-40 lg:px-60 ">

          <p class="bigTitle">Now</p>
          <p>Inspired by Derek Sivers</p>
          <p class="paragraph">Currently, I'm focused on enhancing my design skills and strategy. I'm constantly exploring new techniques and tools to improve my craft. Apart from work, I've made a personal goal to read more books this year, and I'm excited to dive into some inspiring design and technology literature.</p>
          <p class="footnote">Last updated February 2023</p>
          <p class="subtitle">Reading</p>

          <div class="grid grid-row-2 grid-flow-col gap-16 py-6">



  <div class="card flex">
    <div class="w-full">1</div>
<div class="w-full">
  <div>Name</div>
  <div>Author</div>
</div>
  </div>

    <div class="card flex">
    <div class="w-full">1</div>
<div class="w-full">
  <div>Name</div>
  <div>Author</div>
</div>
  </div>

  



  </div>


</div>






        </div>
      



    </React.Fragment>



  )
}
