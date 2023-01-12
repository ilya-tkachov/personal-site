import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageContents(props: Props): JSX.Element {
  const { children } = props

  return <div className='min-h-screen overflow-hidden'>{children}</div>
}
