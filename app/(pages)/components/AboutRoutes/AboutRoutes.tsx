'use client'

import { navigationRoutes } from '@/modules/constants'
import RouteButton from './RouteButton/RouteButton'

export default function AboutRoutes(): JSX.Element {
  return (
    <div className='flex space-y-2 justify-center w-full'>
      {navigationRoutes.map((item) => (
        <RouteButton key={item.href} shape={item.shape} href={item.href} />
      ))}
    </div>
  )
}
