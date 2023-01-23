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
      <p className='text-xl text-white'>{title}</p>
      <div className={`rounded-lg w-full h-full overflow-hidden`}>
        <Image alt={title} src={src} priority height={height} width={width} />
      </div>
      <div>
        {tags.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <ContentfulRichText document={description} />
    </div>
  )
}
