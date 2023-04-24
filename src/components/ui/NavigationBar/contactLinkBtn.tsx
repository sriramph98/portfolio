
import React from 'react'
import { cva,VariantProps } from 'class-variance-authority';

const contactLinkBtn = cva([], {
  variants: {
    intent: {
      primary: [
        "hover:text-dark-400",
      ],
    },
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
    },
  },

  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export function ContactLinkBtn ({intent,size,path,name}:any){
  return(
    <a className={contactLinkBtn({intent,size})} href={path}>{name}</a>
  )
}

