import { Inter } from 'next/font/google'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (

    <React.Fragment>

<div  className="flex footer">
<p className="w-full">Designed + Code by Sriram P H</p>
<p className="w-full text-right">2023 © All rights reserved</p>

</div>

    </React.Fragment>

  
   
  )
}
