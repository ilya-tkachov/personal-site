"use client"

import useThemeConfig from "@/modules/hooks/useThemeConfig"
import { BBAnchor, Center, RoundedBox, Text3D } from "@react-three/drei"
import { Euler } from "@react-three/fiber"
import { Vector3 } from "three"
import { navigationRoutes } from "../../../../NavigationContainer/NavigationContainer"

const anchors = [
  {
    anchor: [0, 0, -1] as Vector3 | [number, number, number],
    rotation: [0, 3.1, 0] as Euler,
  },
  {
    anchor: [0, 0, 1] as Vector3 | [number, number, number],
    rotation: [0, 0, 0] as Euler,
  },
]

export default function SmoothCube(): JSX.Element {
  const config = useThemeConfig()

  return (
    <mesh>
      <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.15} smoothness={10}>
        {navigationRoutes.map((item, index) => (
          <BBAnchor key={item.href} anchor={anchors[index].anchor}>
            <Center rotation={anchors[index].rotation}>
              <Text3D scale={0.25} font="/fonts/inter_regular.typeface.json">
                {item.href}
                <meshStandardMaterial
                  color={config.theme?.colors?.[item.color]?.["400"]}
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
