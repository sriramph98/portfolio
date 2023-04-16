
import React from 'react'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export default function NavBtn({path,name}:any) {
  return (
<Link href={path} className="NavBtn">{name}</Link>
  )
}
