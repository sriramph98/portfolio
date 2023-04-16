import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@ui/NavigationBar/navbar'
import Footer  from '@ui/footer'
import { motion } from "framer-motion"



export default function portfolio({ Component, pageProps }: AppProps) {

  return <>
  
   <NavBar/>
 <Component {...pageProps} />
 {/* <Footer /> */}
  </>
}

