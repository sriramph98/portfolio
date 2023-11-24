
import React from 'react'


export default function ExperienceCard({company,designation,fromYear,toYear,description}:any) {
  return (

<div className='py-2'>

<div className='py-2'>

<p className="heading">{company}</p>
<div className="flex gap-2"><p>{designation}</p><p> • </p><p className='flex'><p>{fromYear}</p><p>-</p><p>{toYear}</p></p></div>

</div>

<p className="caption">{description}</p>

</div>

  )
}
