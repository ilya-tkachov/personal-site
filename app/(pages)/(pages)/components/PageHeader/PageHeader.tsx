'use client'

import useThemeConfig from '@/modules/hooks/useThemeConfig'
import ShapeIcon from '@/modules/three/ShapeIcon/ShapeIcon'
import ShapeIconCanvas from '@/modules/three/ShapeIconCanvas/ShapeIconCanvas'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageHeader(): JSX.Element {
  const pathname = usePathname()
  const config = useThemeConfig()

  return (
    <div className="flex items-center justify-between">
      <p className={`text-gray-300 text-4xl font-bold`}>
        {pathname?.replace('/', '')}
      </p>
      <Link href="/">
        <div className={`w-9 h-9 ring-1 ring-gray-300 rounded-full`}>
          <ShapeIconCanvas>
            <ShapeIcon shape="Dodecahedron">
              <meshPhongMaterial
                color={config?.theme?.colors.gray[500]}
                emissive={config?.theme?.colors.gray[700]}
                shininess={50}
                specular={config?.theme?.colors.gray[700]}
              />
            </ShapeIcon>
          </ShapeIconCanvas>
        </div>
      </Link>
    </div>
  )
}
