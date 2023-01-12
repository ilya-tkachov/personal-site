import { avatarSizes, AvatarSizes } from '@/modules/theme/avatar'
import Image from 'next/image'

interface Props {
  src: string
  size: AvatarSizes
  width: number
  height: number
  className?: string
}

export default function Avatar(props: Props): JSX.Element {
  const { src, size, width, height, className } = props

  const avatarSize = avatarSizes[size]

  return (
    <div
      className={`flex flex-shrink-0 bg-black rounded-3xl overflow-hidden ${avatarSize} ${className}`}
    >
      <Image alt='Avatar' src={src} priority height={height} width={width} />
    </div>
  )
}
