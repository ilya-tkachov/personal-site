"use client"

import Scene from "./canvas/Scene/Scene"
import SmoothCube from "./canvas/SmoothCube/SmoothCube"

export default function CubeContainer(): JSX.Element {
  return (
    <Scene>
      <SmoothCube />
    </Scene>
  )
}
