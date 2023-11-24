
import React from 'react'
import Image from 'next/image'

export default function NowCard({imagePath,title,author}: any) {
  return (
    

<div className="card  border-solid border-2 border-neutral-700 flex my-4 p-10 w-full ">


  <div className="w-fit h-full pr-8 flex  drop-shadow-xl hover:-rotate-6 transition duration-200 ease-in-out "><Image src={imagePath} alt="" width={100} height={100} style={{position:"relative",objectFit:"contain"}} /></div>

<div className="w-full  h-full">

<p>{title}</p>
<p>{author}</p>

</div>
</div>
   
  


  )
}
