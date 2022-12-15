import { ReactNode } from 'react'
import '../styles/dist.css'
import { Inter } from '@next/font/google'

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
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head />
      <body className="bg-slate-100">{children}</body>
    </html>
  )
}
