import { motion } from "framer-motion"
import React from "react"

export default function FadeIn() {

  return(
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    </motion.div>
)
}



