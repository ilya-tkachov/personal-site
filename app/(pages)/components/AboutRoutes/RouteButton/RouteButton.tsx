'use client'

import ShapeIcon, { ShapeIconProps } from '@/modules/three/ShapeIcon/ShapeIcon'
import ShapeIconCanvas from '@/modules/three/ShapeIconCanvas/ShapeIconCanvas'
import Link, { LinkProps } from 'next/link'

interface Props
  extends Pick<LinkProps, 'href'>,
    Pick<ShapeIconProps, 'shape'> {}

export default function RouteButton(props: Props): JSX.Element {
  const { href, shape } = props

  return (
    <Link href={href}>
      <div className='relative w-48 h-48'>
        <div
          className={`border border-white absolute rounded-3xl left-4 bottom-4 w-full h-full`}
        />
        <div className='flex relative flex-col space-y-4 bg-black rounded-3xl border border-white w-full items-center justify-center h-full'>
          <div className='border border-white rounded-3xl w-16 h-16 p-1'>
            <ShapeIconCanvas>
              <ShapeIcon shape={shape}>
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
          <p className='text-white italic text-2xl uppercase font-thin'>
            {href.toString().replace('/', '')}
          </p>
        </div>
      </div>
    </Link>
  )
}
