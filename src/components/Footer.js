/* global tw */
import React from 'react'
import { css } from 'react-emotion'

import publicdomain from '../img/publicdomain.svg'

export const Footer = () => (
  <footer
    className={css`
      ${tw([
        'font-montserrat',
        'bg-black',
        'py-q24',
        'md:py-q36',
        'relative',
        'text-white',
        'w-fill',
        'z-1000',
      ])};
    `}
  >
    <div
      className={css`
        ${tw([
          'flex',
          'flex-col',
          'sm:flex-row',
          'items-center',
          'justify-between',
          'max-w-md',
          'mx-auto',
          'px-q24',
          'md:px-q48',
          'text-xs',
        ])};
      `}
    >
      <div
        className={css`
          ${tw(['flex', 'items-center'])};
        `}
      >
        <span>·К·Р·А·П·И·В·А·</span>
        <span
          className={css`
            ${tw([
              'bg-contain',
              'bg-no-repeat',
              'h-q16',
              'inline-block',
              'mx-q8',
              'w-q16',
            ])};
            background-image: url(${publicdomain});
          `}
          title="Общественное достояние"
        />
        <span>2018</span>
      </div>
      <a
        className={css`
          ${tw([
            'bg-green',
            'hover:bg-black',
            'md:hover:bg-white',
            'border-none',
            'font-montserrat',
            'font-medium',
            'inline-flex',
            'items-center',
            'justify-center',
            'mx-q4',
            'my-q24',
            'sm:my-0',
            'outline-none',
            'px-q24',
            'py-q12',
            'rounded-lg',
            'text-black',
            'hover:text-green',
            'md:hover:text-black',
            'text-md',
            'uppercase',
          ])};
        `}
        href="https://yasobe.ru/na/krapiva"
        rel="noopener noreferrer"
        target="_blank"
      >
        Поддержать
      </a>
      <div
        className={css`
          ${tw(['font-semibold'])};
          font-variant: small-caps;
        `}
      >
        <a
          href="mailto:krapiva@krapiva.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          MAIL
        </a>
        <span>{' · '}</span>
        <a
          href="https://www.facebook.com/krapivapiter"
          rel="noopener noreferrer"
          target="_blank"
        >
          FB
        </a>
        <span>{' · '}</span>
        <a
          href="https://vk.com/krapiva_piter"
          rel="noopener noreferrer"
          target="_blank"
        >
          VK
        </a>
      </div>
    </div>
    <div
      className={css`
        ${tw([
          'flex',
          'flex-col',
          'sm:flex-row',
          'items-center',
          'justify-between',
          'max-w-md',
          'mt-q24',
          'md:mt-q36',
          'mx-auto',
          'px-q24',
          'md:px-q48',
          'text-xs',
        ])};
      `}
    >
      <div
        className={css`
          ${tw(['mb-q24', 'sm:mb-0', 'text-center'])};
        `}
      >
        <span
          className={css`
            ${tw(['mr-q8'])};
          `}
        >
          При поддержке Фонда Взаимопомощи
        </span>
        <a
          className={css`
            ${tw(['font-semibold'])};
            font-variant: small-caps;
          `}
          href="https://chtodelat.org/category/aid-fund-ru/?lang=ru"
          rel="noopener noreferrer"
          target="_blank"
        >
          «Что Делать»
        </a>
      </div>
      <div
        className={css`
          ${tw(['flex', 'flex-no-wrap'])};
        `}
      >
        <span
          className={css`
            ${tw(['mr-q8'])};
          `}
        >
          Разработка
        </span>
        <a
          className={css`
            ${tw(['font-semibold'])};
            font-variant: small-caps;
          `}
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
