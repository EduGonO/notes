import React, {ReactElement} from 'react'
import {marked} from 'marked'

const BacklinkTokenizerExtension: marked.TokenizerExtension = {
  name: 'backlink',
  level: 'inline',

  start: (src: string) => src.match(/\[\[/)?.index || -1,

  tokenizer: (src: string) => {
    const rule = /^\[\[([^\]]+)\]\]/
    const match = rule.exec(src)

    if (match) {
      const text = match[0]

      return {
        type: 'backlink',
        raw: text,
        path: match[1],
        tokens: [
          {
            type: 'text',
            raw: text,
            text,
          },
        ],
      }
    }
  },
}

const BacklinkRendererExtension: marked.RendererExtension = {
  name: 'backlink',

  renderer: (token: marked.Tokens.Generic) => {
    return `<a href="${token.path}">${token.path}</a>`
  },
}

const HighlightTokenizerExtension: marked.TokenizerExtension = {
  name: 'highlight',
  level: 'inline', // or 'block'

  start: (src: string) => src.match(/(::|==)/)?.index || -1,

  tokenizer: (src: string) => {
    const rule = /^(::|==)([^]+?)\1/;
    const match = rule.exec(src);

    if (match) {
      const text = match[0];

      return {
        type: 'highlight',
        raw: text,
        content: match[2],
        tokens: [
          {
            type: 'text',
            raw: text,
            text: match[2],
          },
        ],
      };
    }
  },
};

const HighlightRendererExtension: marked.RendererExtension = {
  name: 'highlight',

  renderer: (token: marked.Tokens.Generic) => {
    return `<mark class="highlight">${token.content}</mark>`;
  },
};

const TagTokenizerExtension: marked.TokenizerExtension = {
  name: 'tag',
  level: 'inline',

  start: (src: string) => src.match(/\B#\w+/)?.index || -1,

  tokenizer: (src: string) => {
    const rule = /\B#\w+/g;
    const matches = src.match(rule);

    if (matches) {
      const tokens = matches.map((match) => ({
        type: 'tag',
        raw: match,
        tag: match.slice(1),
        tokens: [
          {
            type: 'text',
            raw: match,
            text: match,
          },
        ],
      }));

      return tokens;
    }
  },
};

const TagRendererExtension: marked.RendererExtension = {
  name: 'tag',

  renderer: (token: marked.Tokens.Generic) => {
    return `<span class="tag">${token.tag}</span>`;
    
  },
};



marked.use({
  extensions: [BacklinkTokenizerExtension, BacklinkRendererExtension, HighlightTokenizerExtension, HighlightRendererExtension, TagTokenizerExtension, TagRendererExtension],
})

export const markdownToHtml = (markdown: string) => {
  return marked.parse(markdown)
}

export const markdownToTokens = (markdown: string) => {
  return marked.lexer(markdown)
}