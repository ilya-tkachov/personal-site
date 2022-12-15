import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'

interface ShapeIconCanvasProps {
  children: ReactNode
}

export default function ShapeIconCanvas(props: ShapeIconCanvasProps) {
  const { children } = props

  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
      <pointLight color="#fff" position={[10, 0, 10]} intensity={2} />
      {children}
    </Canvas>
  )
}
