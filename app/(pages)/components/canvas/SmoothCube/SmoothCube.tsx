'use client'

import { RoundedBox } from '@react-three/drei'
import useThemeConfig from '@/modules/hooks/useThemeConfig'

interface Props {}

export default function SmoothCube(props: Props): JSX.Element {
  const config = useThemeConfig()

  return (
    <mesh>
      <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.15} smoothness={10}>
        <meshStandardMaterial color="#fff" />
      </RoundedBox>
    </mesh>
  )
}
