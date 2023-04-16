import { motion } from "framer-motion"
import React from "react"


export default function FadeIn() {
return(
  <motion.div
    initial={{ y: 100, opacity: 0, scale: 1 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    />

)
}




