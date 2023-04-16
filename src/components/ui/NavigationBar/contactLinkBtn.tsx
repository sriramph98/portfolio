
import React from 'react'
import { cva,VariantProps } from 'class-variance-authority';


export default function ContactLinkBtn({path,name}:any) {
  return (
    <a href={path} target="_blank" >
    {name}
  </a>
  )
}
