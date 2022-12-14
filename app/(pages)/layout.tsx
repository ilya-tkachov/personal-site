'use client'

import { ReactNode } from 'react'
import { NavigationContainer } from './components/NavigationContainer/NavigationContainer'

interface Props {
  children: ReactNode
}

export default function CubeNav(props: Props) {
  const { children } = props

  return (
    <>
      <div className="relative">
        <div className="flex absolute items-center justify-center h-screen w-screen">
          <NavigationContainer />
        </div>
        <div className="relative">{children}</div>
      </div>
    </>
  )
}
