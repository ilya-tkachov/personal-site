import { avatarSizes, AvatarSizes } from "@/modules/theme/avatar"
import Image from "next/image"


interface Props {
  src: string
  size: AvatarSizes
  width: number
  height: number
}

export default function Avatar(props: Props): JSX.Element {
  const {src, size, width, height} = props

  const avatarSize = avatarSizes[size]

  return (
    <div className={`flex flex-shrink-0 bg-slate-300 rounded-3xl border-2 border-slate-900 overflow-hidden ${avatarSize}`}>
      <Image
        alt=''
        src={src}
        priority
        height={height}
        width={width}
      />
    </div>
  )
}