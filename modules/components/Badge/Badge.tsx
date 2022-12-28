import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function Badge(props: Props): JSX.Element {
  const { children } = props

  return (
    <span className="inline-block align-middle items-center m-1 px-2 py-1 bg-indigo-100  rounded-full text-sm font-semibold text-indigo-500">
      {children}
    </span>
  )
}
