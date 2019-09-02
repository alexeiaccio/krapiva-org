import * as React from 'react'

import { footerStyles, rowStyles, blockStyles, publicStyles, linkStyles } from './styles'

export function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={rowStyles}>
        <div css={blockStyles}>
          <span>·К·Р·А·П·И·В·А·</span>
          <span
            css={publicStyles}
            title="Общественное достояние"
          />
          <span>2018—{new Date(Date.now()).getFullYear()}</span>
        </div>
        <div css={blockStyles}>
          <a
            css={linkStyles}
            href="https://money.yandex.ru/to/410012396039377"
            rel="noopener noreferrer"
            target="_blank"
          >
            ПОДДЕРЖАТЬ
          </a>
          <span>{' · '}</span>
          <a
            css={linkStyles}
            href="mailto:krapiva@krapiva.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            MAIL
          </a>
          <span>{' · '}</span>
          <a
            css={linkStyles}
            href="https://www.facebook.com/krapivapiter"
            rel="noopener noreferrer"
            target="_blank"
          >
            FB
          </a>
          <span>{' · '}</span>
          <a
            css={linkStyles}
            href="https://vk.com/krapiva_piter"
            rel="noopener noreferrer"
            target="_blank"
          >
            VK
          </a>
        </div>
      </div>
      <div css={rowStyles}>
        <div css={blockStyles}>
          <span>При поддержке </span>
          <a
            css={linkStyles}
            href="https://chtodelat.org/category/aid-fund-ru/?lang=ru"
            rel="noopener noreferrer"
            target="_blank"
          >
          фонда взаимопомощи «что делать»
        </a>
        </div>
        <div css={blockStyles}>
          <span> Разработка </span>
          <a
            css={linkStyles}
            href="https://beta.accio.pro"
            rel="noopener noreferrer"
            target="_blank"
          >
            accio
        </a>
        </div>
      </div>
    </footer>
  )
}