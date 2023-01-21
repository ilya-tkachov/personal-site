import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  Block,
  BLOCKS,
  Document,
  Inline,
  INLINES,
  MARKS
} from '@contentful/rich-text-types'
import { ReactElement, ReactNode } from 'react'

interface Props {
  document: Document
  className?: string
}

export default function ContentfulRichText(props: Props): ReactElement {
  const { document, className = '' } = props

  const Bold = ({ children }) => (
    <strong className={`text-md font-medium text-red-500 ${className}`}>
      {children}
    </strong>
  )

  const Text = ({ children }) => (
    <p className={`text-md font-normal text-white ${className}`}>{children}</p>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
        <Text>{children}</Text>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          target='_blank'
          className='text-red-400 underline'
          href={node.data.uri}
        >
          {children}
        </a>
      )
    }
    // renderText: (text: string) => text.replace('!', '?')
  }

  return <>{documentToReactComponents(document, options)}</>
}
