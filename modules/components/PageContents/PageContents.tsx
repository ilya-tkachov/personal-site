import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageContents(props: Props): JSX.Element {
  const { children } = props

  return <div className="p-2 bg-slate-200/50">{children}</div>
}
