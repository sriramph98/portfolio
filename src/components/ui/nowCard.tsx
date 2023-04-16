
import React from 'react'
import Image from 'next/image'
import img from '@now/design.jpg'


export default function NowCard({title,author}: any) {
  return (
    

<div className="card  border-solid border-2 border-neutral-700 flex my-4 p-10 w-full">

  <div className="w-fit pr-8 flex text-center "><Image src={img} alt="" width="80" /></div>

<div className="w-full  align-baseline ">

<p>{title}</p>
<p>{author}</p>

</div>
</div>
   
  


  )
}
