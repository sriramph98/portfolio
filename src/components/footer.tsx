import { Inter } from 'next/font/google'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (

    <React.Fragment >

<div  class="flex footer">
<p class="w-full">Designed and developed by Sriram P H</p>
<p class="w-full text-right">2023 © All rights reserved</p>

</div>

    </React.Fragment>

  
   
  )
}
