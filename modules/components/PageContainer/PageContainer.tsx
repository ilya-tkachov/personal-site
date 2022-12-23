import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function PageContainer(props: Props): JSX.Element {
  const { children } = props

  return (
    <div className="flex relative justify-center h-full w-full pointer-events-none">
      <div className="w-full max-w-2xl pointer-events-auto">{children}</div>
    </div>
  )
}
