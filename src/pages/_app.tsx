import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/navbar'
import Footer  from '@/components/footer'
import { motion } from "framer-motion"


export default function portfolio({ Component, pageProps }: AppProps) {

  return <>
  
   <NavBar/>
 <Component {...pageProps} />
 {/* <Footer /> */}
  </>
}

