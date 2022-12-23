"use client"

import { ReactNode } from "react"
import NavigationButtons from "./components/NavigationButtons/NavigationButtons"
import { NavigationContainer } from "./components/NavigationContainer/NavigationContainer"

interface Props {
  children: ReactNode
}

export default function CubeNav(props: Props) {
  const { children } = props

  return (
    <>
      <div className="flex fixed items-center justify-center h-screen w-screen">
        <NavigationContainer />
      </div>
      <div className="flex pointer-events-none fixed items-center justify-center right-0 top-0 bottom-0">
        <NavigationButtons />
      </div>
      {children}
    </>
  )
}
