'use client'

import { createContext, useState } from 'react'
import CubeContainer from './CubeContainer/CubeContainer'

export const navigationRoutes = [
  {
    href: '/about',
    color: 'teal'
  },
  {
    href: '/portfolio',
    color: 'orange'
  }
]

const defaultValue = {
  index: 0,
  setIndex: (index: number) => {}
}

export const NavigationContext = createContext(defaultValue)

export function NavigationContainer(): JSX.Element {
  const [contextIndex, setContextIndex] = useState(0)

  const contextValue = {
    index: contextIndex,
    setIndex: (index: number) => setContextIndex(index)
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      <div className="w-full h-full">
        <CubeContainer />
      </div>
    </NavigationContext.Provider>
  )
}
