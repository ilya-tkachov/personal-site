import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageContainer(props: Props): JSX.Element {
  const { children } = props

  return <div>{children}</div>
}
