import Badge from '@/modules/components/Badge/Badge'
import ContentfulRichText from '@/modules/contentful/Contentful/Contentful/ContentfulRichText'
import { Document } from '@contentful/rich-text-types'
import Image from 'next/image'

interface Props {
  src: string
  width: number
  height: number
  description: Document
  title: string
  tags: string[]
}

export default function PortfolioPreview(props: Props): JSX.Element {
  const { src, width, height, title, description, tags } = props

  return (
    <div className='space-y-2 flex flex-col w-full'>
      <p className='text-xl text-gray-700 font-bold'>{title}</p>
      <div
        className={`flex flex-shrink-0 p-1 bg-slate-100 rounded-md w-full h-max-36`}
      >
        <div className={`rounded-md w-full h-full overflow-hidden`}>
          <Image alt={title} src={src} priority height={height} width={width} />
        </div>
      </div>
      <div className='inline-block p-1 bg-slate-100 rounded-md'>
        {tags.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <ContentfulRichText document={description} />
    </div>
  )
}
