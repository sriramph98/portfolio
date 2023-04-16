
import React from 'react'
import Image from 'next/image'
import img from '@work/iphone-show.png'


export default function ProjectCard({path,title, button, category, year}: any) {
  return (

    <div >

    <div className="card"><Image src={img} alt=""  /></div>

    <div className='py-4'>
    <div className="cardDescription">
      <div className="cardProduct">{title}</div>
      <button className="cardBtn cardBtnText">{button}</button>

    </div>

    <div className="cardDescription">
      <div className="caption">{category}</div>
      <div className="cardYear">{year}</div>

    </div>

  </div>


  </div>

  )
}
