import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Layout(props: Props) {
  const { children } = props

  // TODO add 3d component in background

  return (
    <div className='flex justify-center relative py-8 h-full w-full'>
      <div className='flex justify-center absolute h-full pb-8 w-full max-sm:hidden'>
        <div className='flex justify-center rounded-2xl h-full max-w-3xl min-w-3xl w-full p-6 border border-white'>
          <div className='h-full rounded-2xl w-full border border-white'></div>
        </div>
      </div>
      <div className='relative w-full max-w-lg pt-16 max-sm:pt-0 max-sm:px-2'>
        {children}
      </div>
    </div>
  )
}
