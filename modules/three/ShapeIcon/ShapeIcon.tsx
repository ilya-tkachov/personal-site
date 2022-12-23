import * as shapes from "@react-three/drei/core/shapes"
import { useFrame } from "@react-three/fiber"
import { MutableRefObject, ReactNode, useRef } from "react"
import { Mesh } from "three"
import { degToRad } from "three/src/math/MathUtils"

const useTurntable = (): MutableRefObject<Mesh> => {
  const ref = useRef<Mesh>(null!)
  useFrame(() => {
    ref.current.rotation.y += 0.01
    ref.current.rotation.z += 0.005
  })

  return ref
}

export interface ShapeIconProps {
  children: ReactNode
  shape: string
}

export default function ShapeIcon(props: ShapeIconProps) {
  const { children, shape, ...rest } = props

  const Comp = shapes[shape]

  const ref = useTurntable()

  return (
    <mesh rotation={[degToRad(-35), degToRad(25), 0]}>
      <Comp ref={ref} radius={5} smoothness={5} {...rest}>
        {children}
      </Comp>
    </mesh>
  )
}
