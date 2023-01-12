import { Inter } from '@next/font/google'
import { ReactNode } from 'react'
import '../styles/dist.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

interface Props {
  children: ReactNode
}

export default function RootLayout(props: Props) {
  const { children } = props

  return (
    <html lang='en' className={`${inter.variable} font-sans`}>
      <head />
      <body className='bg-black'>{children}</body>
    </html>
  )
}
