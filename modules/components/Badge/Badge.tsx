import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Badge(props: Props): JSX.Element {
  const { children } = props

  return (
    <span
      className='inline-block align-middle items-center m-1 px-2 py-1 bg-red-500/20
     rounded-md text-sm font-medium text-red-500'
    >
      {children}
    </span>
  )
}
