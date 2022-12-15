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
    <div className="flex rounded-lg  items-center justify-between">
      <p className="text-gray-900 text-4xl font-bold">
        {pathname?.replace('/', '')}
      </p>
      <Link href="/">
        <div className="w-9 h-9 ring-1 ring-red-500 rounded-full">
          <ShapeIconCanvas>
            <ShapeIcon shape={'Dodecahedron'}>
              <meshPhongMaterial
                color={config?.theme?.colors.red[700]}
                emissive={config?.theme?.colors.red[900]}
                shininess={50}
                specular={config?.theme?.colors.red[900]}
              />
            </ShapeIcon>
          </ShapeIconCanvas>
        </div>
      </Link>
    </div>
  )
}
