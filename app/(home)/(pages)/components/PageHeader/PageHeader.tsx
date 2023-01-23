'use client'

import ShapeIcon from '@/modules/three/ShapeIcon/ShapeIcon'
import ShapeIconCanvas from '@/modules/three/ShapeIconCanvas/ShapeIconCanvas'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PageHeader(): JSX.Element {
  const pathname = usePathname()

  const pathLabel = pathname?.replace('/', '')

  return (
    <div className='flex w-full items-center justify-between'>
      <p className={`text-white italic text-5xl font-thin uppercase`}>
        {pathLabel}
      </p>
      <Link href='/'>
        <div
          className={`w-12 h-12 border border-white rounded-2xl overflow-visible`}
        >
          <ShapeIconCanvas>
            <ShapeIcon shape='Box'>
              <meshPhongMaterial
                wireframe
                color={'#fff'}
                emissive={'#fff'}
                shininess={10}
                specular={'#fff'}
              />
            </ShapeIcon>
          </ShapeIconCanvas>
        </div>
      </Link>
    </div>
  )
}
