import { loadingSizes, LoadingSizes } from '@/modules/theme/loading'

interface Props {
  size?: LoadingSizes
}

export default function Spinner(props: Props): JSX.Element {
  const { size = 'sm' } = props

  return <div className={`bg-red-500 rounded-full ${loadingSizes[size]}`} />
}
