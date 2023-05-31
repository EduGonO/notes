import { marked } from 'marked'
import React, { MouseEvent, useState } from 'react'
import { markdownToTokens } from 'app/helpers/markdown'
import { NoteBacklink } from './note-backlink'
import clsx from 'clsx'

interface Props {
  markdown: string
  style?: React.CSSProperties
  size?: 'sm' | 'md'
  onClickBacklink?: (event: MouseEvent, path: string) => void
}

function tokenToElement(
    token: marked.Tokens.Generic,
    options: MarkdownOptions
  ): JSX.Element {
    switch (token.type) {
      case 'heading':
        return React.createElement('h' + token.depth, {}, token.text)
      case 'text':
        return textTokenToElement(token as marked.Tokens.Text, options)
      case 'paragraph':
        return <p>{tokensToElements(token.tokens || [], options)}</p>
      case 'link':
        return (
          <a href={token.href} target="_blank">
            {tokensToElements(token.tokens || [], options)}
          </a>
        )
      case 'backlink':
        return (
          <NoteBacklink
            path={token.path}
            onClick={(event) => options.onClickBacklink?.(event, token.path)}
          />
        )
      case 'em':
        return <em>{tokensToElements(token.tokens || [], options)}</em>
      case 'bold':
        return <strong>{tokensToElements(token.tokens || [], options)}</strong>
      case 'blockquote':
        return <blockquote>{tokensToElements(token.tokens || [], options)}</blockquote>
      case 'hr':
        return <hr />
      case 'list':
        listIndex++
        return token.ordered ? (
          <ol
            onClick={() =>
              setExpandedLists((prevExpandedLists) => ({
                ...prevExpandedLists,
                [listIndex]: !prevExpandedLists[listIndex],
              }))
            }
          >
            {expandedLists[listIndex] &&
              tokensToElements(token.items || [], options)}
          </ol>
        ) : (
          <ul
            onClick={() =>
              setExpandedLists((prevExpandedLists) => ({
                ...prevExpandedLists,
                [listIndex]: !prevExpandedLists[listIndex],
              }))
            }
          >
            {expandedLists[listIndex] &&
              tokensToElements(token.items || [], options)}
          </ul>
        )
      case 'list_item':
        return <li>{tokensToElements(token.tokens || [], options)}</li>
      case 'space':
        return <></>
      default:
        console.error('Unknown token type:', token.type)
        return <></>
    }
  }

const markdownToElements = (markdown: string, options: MarkdownOptions = {}) => {
  const tokens = markdownToTokens(markdown)
  const elements = tokens.map((token) => tokenToElement(token, options))

  return elements.map((element, index) => elementWithKey(element, index))
}

export const NoteMarkdown: React.FC<Props> = ({
  markdown,
  onClickBacklink,
  style,
  size = 'md',
}) => {
  const [expandedLists, setExpandedLists] = useState<Record<number, boolean>>({})
  let listIndex = 0

  return (
    <div
      className={clsx('prose w-auto', size === 'sm' ? 'prose-sm' : 'prose-md')}
      style={style}
    >
      {markdownToElements(markdown, { onClickBacklink })}
    </div>
  )

  

  function tokensToElements(
    tokens: marked.Tokens.Generic[],
    options: MarkdownOptions
  ): JSX.Element[] {
    return tokens.map((token, index) =>
      elementWithKey(tokenToElement(token, options), index)
    )
  }

  function textTokenToElement(
    token: marked.Tokens.Text,
    options: MarkdownOptions
  ): JSX.Element {
    if (token.tokens?.length) {
      return <span>{tokensToElements(token.tokens, options)}</span>
    } else {
      return <span dangerouslySetInnerHTML={{ __html: token.text }} />
    }
  }

  function elementWithKey(
    element: React.ReactElement,
    key: string | number
  ): JSX.Element {
    return <React.Fragment key={key}>{element}</React.Fragment>
  }
}

interface MarkdownOptions {
  onClickBacklink?: (event: MouseEvent, path: string) => void
}

