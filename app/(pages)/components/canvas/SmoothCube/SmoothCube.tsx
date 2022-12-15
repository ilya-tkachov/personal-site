'use client'

import { BBAnchor, Center, RoundedBox, Text3D } from '@react-three/drei'
import useThemeConfig from '@/modules/hooks/useThemeConfig'
import {
  NavigationContext,
  navigationRoutes
} from '../../NavigationContainer/NavigationContainer'
import { useContext } from 'react'
import { Vector3 } from 'three'
import { Euler } from 'three'

const anchors = [
  {
    anchor: [0, 0, -1] as Vector3 | [number, number, number],
    rotation: [0, 3.1, 0]
  },
  {
    anchor: [0, 0, 1] as Vector3 | [number, number, number],
    rotation: [0, 0, 0]
  }
]

export default function SmoothCube(): JSX.Element {
  const config = useThemeConfig()

  const { index: contextIndex, setIndex } = useContext(NavigationContext)

  // add context routes and 3d text over the cube edge here
  return (
    <mesh>
      <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.15} smoothness={10}>
        {navigationRoutes.map((item, index) => (
          <BBAnchor key={item.href} anchor={anchors[index].anchor}>
            <Center rotation={anchors[index].rotation}>
              <Text3D scale={0.25} font="/fonts/inter_regular.typeface.json">
                {item.href}
                <meshStandardMaterial
                  color={
                    contextIndex === index
                      ? config.theme?.colors?.[item.color]?.['400']
                      : '#fff'
                  }
                />
              </Text3D>
            </Center>
          </BBAnchor>
        ))}
        <meshStandardMaterial color="#fff" />
      </RoundedBox>
    </mesh>
  )
}
