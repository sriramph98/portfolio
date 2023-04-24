import NowCard from '@ui/nowCard'
import React from 'react'
import {motion} from 'framer-motion'
import { SlideInBottom } from '@/components/animation/animation'



export default function Now() {
  return (

    <React.Fragment>

      <SlideInBottom>
      <div>

<div className="px-4 md:px-40 lg:px-60 ">

  <div className='pb-8'>
    
  <p className="bigTitle">Now</p>
  <p>Inspired by Derek Sivers</p>
  <p className="paragraph py-2">Currently, I'm focused on enhancing my design skills and strategy. I'm constantly exploring new techniques and tools to improve my craft. Apart from work, I've made a personal goal to read more books this year, and I'm excited to dive into some inspiring design and technology literature.</p>
  <p className="footnote">Last updated February 2023</p>


  </div>


<div>

<p className="subtitle">Reading</p>

<div className='flex gap-8'>


<NowCard title="Roots" author="Alex Haley"/>

<NowCard title="The Design of Everyday Things" author="Don Norman"/>


</div>


</div>
<div>
<p className="subtitle">Watching</p>

<div className='flex gap-8'>

<NowCard title="Love, Damini" author="Burna Boy"/>

<NowCard title="Harry's House" author="Harry Styles"/>


</div>






</div>
<div>



<p className="subtitle">Listening</p>

<div className='flex gap-8'>


<NowCard title="Euphoria" />

<NowCard title="Mindhunter" />


</div>




</div>


<div>

<p className="subtitle">Playing</p>


<div className='flex gap-8'>
<NowCard title="Horizon: Forbidden West" />

<NowCard title="Yakuza 0" />

</div>


</div>

</div>




</div>






      </SlideInBottom>

     

        
      



    </React.Fragment>



  )
}
