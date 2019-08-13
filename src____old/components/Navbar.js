import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import 'whatwg-fetch'
import { withStateHandlers } from 'recompose'

import { Appear } from './Appear'
import logo from '../img/logo.svg'
import { Menu } from './Menu'
import RunningString from './RunningString'

const Input = css`
  ${tw([
    'border-black',
    'focus:border-green',
    'font-montserrat',
    'mx-q4',
    'my-q4',
    'md:my-0',
    'outline-none',
    'p-q12',
    'rounded-lg',
    'text-semibold',
  ])};
`

const SubmitButton = styled('button')`
  ${tw([
    'bg-green',
    'hover:bg-white',
    'border-none',
    'font-montserrat',
    'font-medium',
    'inline-flex',
    'items-center',
    'justify-center',
    'mx-q4',
    'my-q4',
    'md:my-0',
    'outline-none',
    'px-q24',
    'py-q12',
    'rounded-lg',
    'text-black',
    'hover:text-black',
    'text-md',
    'uppercase',
  ])};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &,
  &:hover {
    background-color: ${({ disabled }) => disabled && '#08a676'};
  }
  transition: all 200ms ease-in-out;
`

const withToggle = withStateHandlers(
  ({ init = false }) => ({
    email: '',
    menuOn: init,
    name: '',
    submit: init,
    success: init,
    toggledOn: init,
  }),
  {
    toggle: ({ menuOn, toggledOn }) => () => ({
      menuOn: (toggledOn || menuOn) && false,
      toggledOn: !toggledOn,
    }),
    menu: ({ menuOn }) => () => ({
      menuOn: !menuOn,
      toggledOn: menuOn && false,
    }),
    handleChange: ({ email, name }) => event => {
      const target = event.target
      const value = target.value
      const key = target.name

      if (name.length > 1 && email.length > 6) {
        return {
          [key]: value,
          submit: true,
        }
      } else {
        return {
          [key]: value,
          submit: false,
        }
      }
    },
    subscribe: ({ email, name }) => e => {
      e.preventDefault()
      if (document.getElementsByName('bot-field')[0].value.length === 0) {
        console.log(`An email was submitted: ${email}, ${name} `)

        fetch(
          `${process.env.SLS ||
            'https://ndfukiacve.execute-api.us-east-1.amazonaws.com/dev/'}/subscribe?name=${name}&email=${email}`,
          {
            mode: 'no-cors',
          }
        )
          .then(response => console.log('parsed json', response))
          .catch(error => console.log('parsing failed', error))

        return {
          submit: false,
          success: true,
        }
      }
      return null
    },
    good: () => () => ({ email: '', name: '', success: false }),
  }
)

const Navbar = withToggle(
  ({
    handleChange,
    good,
    menu,
    menuOn,
    subscribe,
    submit,
    success,
    toggle,
    toggledOn,
  }) => (
    <header
      css={css`
        position: fixed;
        ${tw([
          'bg-black',
          'overflow-hidden',
          'pin-l',
          'pin-r',
          'pin-t',
          'sticky',
          'z-1001',
        ])};
      `}
    >
      <nav
        css={css`
          ${tw([
            'flex',
            'flex-row',
            'justify-center',
            'sm:justify-between',
            'w-full',
          ])};
        `}
      >
        <AniLink
          fade
          to="/"
          css={css`
            ${tw([
              'bg-center',
              'bg-contain',
              'bg-no-repeat',
              'hidden',
              'sm:block',
              'md:mr-q48',
            ])};
            background-image: url(${logo});
            width: 60px;
          `}
        />
        <AniLink
          fade
          to="/"
          css={css`
            ${tw([
              'inline-block',
              'font-extrabold',
              'font-montserrat',
              'mx-auto',
              'px-q12',
              'pt-q8',
              'sm:pt-0',
              'text-white',
              'hover:text-green',
              'text-mobile',
              'sm:text-heading5',
            ])};
            letter-spacing: 0.3em;
            line-height: 1.45;
          `}
        >
          ·К·Р·А·П·И·В·А·
        </AniLink>
        <span
          css={css`
            ${tw([
              'bg-green',
              'hover:bg-black',
              'cursor-pointer',
              'font-montserrat',
              'font-medium',
              'hidden',
              'md:inline-flex',
              'items-center',
              'justify-center',
              'ml-auto',
              'px-q24',
              'text-white',
              'text-md',
              'uppercase',
            ])};
            min-width: 6.25rem;
            transition: all 200ms ease-in-out;
          `}
          onClick={toggle}
        >
          {toggledOn ? '✕' : 'Подписка'}
        </span>
        <span
          css={css`
            ${tw([
              'bg-white',
              'hover:bg-black',
              'cursor-pointer',
              'font-montserrat',
              'font-medium',
              'inline-flex',
              'items-center',
              'justify-center',
              'px-q12',
              'sm:px-q24',
              'text-black',
              'hover:text-white',
              'text-sm',
              'sm:text-md',
              'uppercase',
            ])};
            min-width: 6.25rem;
            transition: all 200ms ease-in-out;
          `}
          onClick={menu}
        >
          {menuOn ? '✕' : 'Рубрики'}
        </span>
      </nav>
      <Appear inProp={menuOn}>
        <Menu {...{ toggle }} {...{ toggledOn }} />
      </Appear>
      <Appear inProp={toggledOn}>
        <Appear inProp={success}>
          <div
            css={css`
              ${tw([
                'flex',
                'flex-col',
                'md:flex-row',
                'items-center',
                'justify-center',
                'py-q48',
                'w-full',
              ])};
            `}
          >
            <span
              css={css`
                ${tw([
                  'font-montserrat',
                  'font-medium',
                  'items-center',
                  'justify-center',
                  'mb-q24',
                  'md:mb-0',
                  'px-q24',
                  'py-q12',
                  'text-white',
                  'text-center',
                  'text-md',
                  'uppercase',
                ])};
              `}
            >
              Вы подписаны на обновления ·К·Р·А·П·И·В·А·
            </span>
            <span
              css={css`
                ${tw([
                  'bg-green',
                  'hover:bg-white',
                  'cursor-pointer',
                  'font-montserrat',
                  'font-medium',
                  'inline-flex',
                  'items-center',
                  'justify-center',
                  'px-q24',
                  'py-q12',
                  'text-black',
                  'text-md',
                  'uppercase',
                ])};
                min-width: 6.25rem;
                transition: all 200ms ease-in-out;
              `}
              onClick={() => {
                toggle()
                setTimeout(() => good(), 400)
              }}
            >
              Хорошо
            </span>
          </div>
        </Appear>
        <Appear inProp={!success}>
          <div
            css={css`
              ${tw(['flex', 'justify-center', 'py-q48', 'w-full'])};
            `}
          >
            <form
              css={css`
                ${tw(['flex', 'flex-col', 'md:flex-row'])};
              `}
              name="SubscriptionForm"
              onSubmit={subscribe}
            >
              <span
                css={css`
                  ${tw([
                    'font-montserrat',
                    'font-medium',
                    'items-center',
                    'justify-center',
                    'mb-q12',
                    'md:mb-0',
                    'px-q12',
                    'py-q12',
                    'text-white',
                    'text-center',
                    'text-md',
                    'uppercase',
                  ])};
                `}
              >
                Подписаться
              </span>

              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <input
                className={Input}
                id="name"
                minLength={2}
                name="name"
                onChange={handleChange}
                placeholder={'Ваше имя'}
                required
                type="text"
              />
              <input
                className={Input}
                id="email"
                minLength={7}
                name="email"
                onChange={handleChange}
                placeholder={'Ваш email'}
                required
                type="email"
              />
              <SubmitButton type="submit" disabled={!submit}>
                Отправить →
              </SubmitButton>
            </form>
          </div>
        </Appear>
      </Appear>
      <div
        css={css`
          ${tw([
            'cursor-pointer',
            'font-semibold',
            'font-montserrat',
            'overflow-hidden',
            'text-black',
            'text-center',
            'text-green-dark',
            'text-xs',
            'md:text-md',
            'tracking-wide',
          ])};
          line-height: 2;
          font-variant-caps: all-small-caps;
        `}
        onClick={menu}
      >
        <RunningString string="· культура · ревью · аналитика · петербург · искусство · вовлеченность · активизм " />
      </div>
    </header>
  )
)

export default Navbar