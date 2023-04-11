import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-4">
    <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>
    <p className="mt-4">Welcome to my Next.js app with Tailwind CSS.</p>
    <button className="bg-blue-700 hover:bg-blue-600 mt-4 px-4 py-2 rounded-md">
      Get Started
    </button>
  </div>
  )
}
