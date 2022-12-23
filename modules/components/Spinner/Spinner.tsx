import { loadingSizes, LoadingSizes } from "@/modules/theme/loading"

interface Props {
  size?: LoadingSizes
}

export default function Spinner(props: Props): JSX.Element {
  const { size = "sm" } = props

  return (
    <div
      className={`ring-indigo-200 bg-indigo-400 rounded-full ring-4 ${loadingSizes[size]}`}
    />
  )
}
