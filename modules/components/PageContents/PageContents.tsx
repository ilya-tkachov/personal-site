import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageContents(props: Props): JSX.Element {
  const { children } = props

  return (
    <div className="p-2 bg-white/75 min-h-screen overflow-hidden rounded-sm py-2">
      {children}
    </div>
  )
}
