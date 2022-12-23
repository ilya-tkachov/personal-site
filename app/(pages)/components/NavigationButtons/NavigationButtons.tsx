"use client"

import { navigationRoutes } from "../NavigationContainer/NavigationContainer"
import NavigationButton from "./NavigationButton/NavigationButton"

export default function NavigationButtons (): JSX.Element {
  return (
    <div className="pr-2 space-y-4 flex flex-col items-end">
      {navigationRoutes.map( ( item ) => (
        <NavigationButton key={item.href} shape={item.shape} href={item.href} />
      ) )}
    </div>
  )
}
