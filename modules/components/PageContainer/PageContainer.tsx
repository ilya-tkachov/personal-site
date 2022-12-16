import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageContainer(props: Props): JSX.Element {
  const { children } = props

  return (
    <div className="flex relative justify-center rounded-sm h-full w-full">
      <div className="w-full max-w-xl">{children}</div>
    </div>
  )
}
