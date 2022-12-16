'use client'
import { Environment, OrbitControls, useContextBridge } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'
import { NavigationContext } from '../../../../NavigationContainer/NavigationContainer'

interface Props {
  children: ReactNode
}

export default function Scene(props: Props): JSX.Element {
  const { children } = props

  const ContextBridge = useContextBridge(NavigationContext)

  return (
    <>
      <Canvas>
        <ContextBridge>
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
          <spotLight position={[0, -10, 0]} angle={1} penumbra={0.5} />
          <Environment preset="city" />
          <OrbitControls
            enableDamping={false}
            enablePan={false}
            enableZoom={false}
          />
          {children}
        </ContextBridge>
      </Canvas>
    </>
  )
}
