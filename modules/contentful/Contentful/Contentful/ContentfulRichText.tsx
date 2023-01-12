import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  Block,
  BLOCKS,
  Document,
  Inline,
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
    <strong className={`text-md font-semibold text-white ${className}`}>
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
      )
    }
    // renderText: (text: string) => text.replace('!', '?')
  }

  return <>{documentToReactComponents(document, options)}</>
}
