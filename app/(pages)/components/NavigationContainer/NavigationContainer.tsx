'use client'

import { createContext, useState } from 'react'
import CubeContainer from './CubeContainer/CubeContainer'

export const navigationRoutes = [
  {
    href: '/about',
    color: 'purple',
    shape: 'Box'
  },
  {
    href: '/portfolio',
    color: 'orange',
    shape: 'Octahedron'
  }
]

const defaultValue = {
  index: null,
  setIndex: (index: number | null) => {}
}

export const NavigationContext = createContext(defaultValue)

export function NavigationContainer(): JSX.Element {
  const [contextIndex, setContextIndex] = useState<null | number>(null)

  const contextValue = {
    index: contextIndex,
    setIndex: (index: number | null) => setContextIndex(index)
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      <div className="w-full h-full">
        <CubeContainer />
      </div>
    </NavigationContext.Provider>
  )
}
