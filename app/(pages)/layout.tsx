import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function NavLayout(props: Props) {
  const { children } = props

  return (
    <>
      nav bar here + background
      {children}
    </>
  )
}
