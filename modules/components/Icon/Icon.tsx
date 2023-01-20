import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
}

export default function Icon(props: Props): JSX.Element {
  const { icon } = props

  return <svg className='stroke-1 stroke-red-100'>{icon}</svg>
}
