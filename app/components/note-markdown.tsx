import {marked} from 'marked'
import React, {MouseEvent} from 'react'
import {markdownToTokens} from 'app/helpers/markdown'
import {NoteBacklink} from './note-backlink'
import clsx from 'clsx'

interface Props {
  markdown: string
  style?: React.CSSProperties
  size?: 'sm' | 'md'
  onClickBacklink?: (event: MouseEvent, path: string) => void
}

export const NoteMarkdown: React.FC<Props> = ({
  markdown,
  onClickBacklink,
  style,
  size = 'md',
}) => {
  return (
    <div
      className={clsx('prose w-auto', size === 'sm' ? 'prose-sm' : 'prose-md')}
      style={style}
    >
      {markdownToElements(markdown, {onClickBacklink})}
    </div>
  )
}

interface MarkdownOptions {
  onClickBacklink?: (event: MouseEvent, path: string) => void
}

const elementWithKey = (element: React.ReactElement, key: string | number) => (
  <React.Fragment key={key}>{element}</React.Fragment>
)

const tokensToElements = (tokens: marked.Tokens.Generic[], options: MarkdownOptions) => {
  return tokens.map((token, index) =>
    elementWithKey(tokenToElement(token, options), index),
  )
}

const textTokenToElement = (token: marked.Tokens.Text, options: MarkdownOptions) => {
  if (token.tokens?.length) {
    return <span style={{marginLeft: '-10px'}}>{tokensToElements(token.tokens, options)}</span>
  } else {
    return <span dangerouslySetInnerHTML={{__html: token.text}} />
  }
}
    
const tokenToElement = (token: marked.Tokens.Generic, options: MarkdownOptions) => {
  switch (token.type) {
    case 'heading':
      return React.createElement('h' + token.depth, {}, token.text)
    case 'text':
      return textTokenToElement(token as marked.Tokens.Text, options)
    case 'paragraph':
      return <p style={{marginBottom: '0px', marginTop: '2px'}}>{tokensToElements(token.tokens || [], options)}</p>
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
    case 'blockquote':
      return <blockquote>{tokensToElements(token.tokens || [], options)}</blockquote>
    case 'hr':
      return <hr />
    case 'list':
      return token.ordered ? (
        <ol>{tokensToElements(token.items || [], options)}</ol>
      ) : (
        <ul>{tokensToElements(token.items || [], options)}</ul>
      )
    case 'list_item':
      return <li style={{padding: '0px', margin: '0px'}}>{tokensToElements(token.tokens || [], options)}</li>
    case 'space':
      return <></>
    case 'highlight':
      return <mark style={{ backgroundColor: '#fef3b8', padding: '0.1em 0.2em 0.1em 0.2em' }}>{tokensToElements(token.tokens || [], options)}</mark>
     return (
        <pre>
          <code>
            {textTokenToElement(token as marked.Tokens.Text, options)}
          </code>
        </pre>
      )
    case 'strong':
      return <strong>{tokensToElements(token.tokens || [], options)}</strong>
    default:
      console.error('Unknown token type:', token.type)
      return <></>
    case 'image':
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src={token.href} 
            alt={token.text} 
            style={{
              maxHeight: '169px',
              borderRadius: '7px'
              border: '0.7px solid rgba(125, 125, 125, 0.33)',
              boxShadow: 'rgba(55, 63, 88, 0.31) -0.18066px 0.42153px 0.75212px -1.28333px, rgba(55, 63, 88, 0.27) -0.68656px 1.60197px 2.85835px -2.56667px, rgba(55, 63, 88, 0.098) -3px 7px 12.48987px -3.85px'
            }}
          />
        </div>
      );
  }
}

const markdownToElements = (markdown: string, options: MarkdownOptions = {}) => {
  const tokens = markdownToTokens(markdown)
  const elements = tokens.map((token) => tokenToElement(token, options))

  return elements.map((element, index) => elementWithKey(element, index))
}