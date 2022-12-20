'use client'

import CubeContainer from './CubeContainer/CubeContainer'

export const navigationRoutes = [
  {
    href: '/about',
    color: 'indigo',
    shape: 'Box'
  },
  {
    href: '/portfolio',
    color: 'amber',
    shape: 'Octahedron'
  }
]

export function NavigationContainer(): JSX.Element {
  return <CubeContainer />
}
