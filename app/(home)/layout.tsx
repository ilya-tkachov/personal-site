import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout(props: Props) {
  const { children } = props

  // TODO add 3d component in background

  return (
    <div className='flex flex-col justify-center items-center relative py-8 pb-16 h-full w-full'>
      <div className='flex justify-center absolute h-full py-8 w-full max-lg:hidden'>
        <div className='flex justify-center rounded-2xl h-full max-w-4xl min-w-4xl w-full p-6 border border-white'>
          <div className='h-full rounded-2xl w-full border border-white'></div>
        </div>
      </div>
      <div className='w-full relative max-w-3xl pt-16 max-lg:pt-0 max-lg:px-2'>
        {children}
      </div>
    </div>
  )
}
