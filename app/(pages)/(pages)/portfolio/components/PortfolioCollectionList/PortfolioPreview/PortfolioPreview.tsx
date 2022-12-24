import ContentfulRichText from "@/modules/contentful/Contentful/Contentful/ContentfulRichText"
import { Document } from "@contentful/rich-text-types"
import Image from "next/image"

interface Props {
  src: string
  width: number
  height: number
  description: Document
  title: string
}

export default function PortfolioPreview(props: Props): JSX.Element {
  const { src, width, height, title, description } = props

  return (
    <div className="space-y-2 flex flex-col w-full">
      <p className="text-xl text-gray-700 font-bold">{title}</p>
      <div
        className={`flex flex-shrink-0 bg-slate-300 rounded-2xl border-2 w-full h-max-36 border-white ring-4 ring-gray-300 overflow-hidden`}
      >
        <Image alt={title} src={src} priority height={height} width={width} />
      </div>
      <ContentfulRichText document={description} />
    </div>
  )
}
