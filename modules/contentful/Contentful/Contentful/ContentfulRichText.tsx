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
}

export default function ContentfulRichText(props: Props): ReactElement {
  const { document } = props

  const Bold = ({ children }) => (
    <strong className="text-md font-bold text-gray-900">{children}</strong>
  )

  const Text = ({ children }) => (
    <p className="text-md text-gray-700">{children}</p>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => (
        <Text>{children}</Text>
      )
    },
    // renderText: (text: string) => text.replace('!', '?')
  }

  return <>{documentToReactComponents(document, options)}</>
}
