import React from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/core'
import { compose, lifecycle, pure } from 'recompose'
import { debounce } from 'lodash'
import 'whatwg-fetch'

import { Footer } from './Footer'
import { SEO } from './SEO'
import Navbar from './Navbar'
import '../fonts/cormorant/stylesheet.css'
import '../fonts/montserrat/stylesheet.css'

const globalStyles = css`
  body {
    ${tw(['m-0', 'font-cormorant', 'font-medium'])};
  }
  a, a:hover {
    ${tw(['no-underline', 'text-green-dark'])}
  }
  a.link {
    ${tw(['break-words'])}
  }
`

const enhance = compose(
  pure,
  lifecycle({
    fetch(props) {
      fetch(
        `${process.env.SLS ||
          'https://ndfukiacve.execute-api.us-east-1.amazonaws.com/dev/'}counter?path=${props.location.pathname.replace(
          /\/$/,
          ''
        )}/&view=1&burned=0`
      )
        .then(res => console.log('parsing failed', res))
        .catch(error => console.log('parsing failed', error))
    },
    componentDidMount() {
      this.debounsedFetch = debounce(this.fetch, 10000)
      process.env.NODE_ENV === 'production' && this.debounsedFetch(this.props)
    },
    componentDidUpdate(prevProps) {
      this.debounsedFetch.cancel()
      process.env.NODE_ENV === 'production' &&
      prevProps !== this.props &&
      this.debounsedFetch(this.props)
    },
    componentWillUnmount() {
      this.debounsedFetch.cancel()
    }
  })
)

const Layout = enhance(({ children, image, location, title }) => (
  <div id="nprogress-container">
    <Global styles={globalStyles} />
    <SEO
      slug={location.pathname}
      title={title}
      description={
        'К.Р.А.П.И.В.А. — это онлайн-издание о современном искусстве в Санкт-Петербурге. Наша основная задача — восполнить ощутимые пробелы в критическом и теоретическом осмыслении современной местной культурной ситуации, а также локальных историй искусств. '
      }
      keywords={
        'Культура, Ревью, Аналитика, Петербург, Искусство, Вовлечённость, Активизм'
      }
      image={image}
    />
    <div
      css={css`
        ${tw([
          'bg-white',
          'border-4',
          'md:border-8',
          'border-black',
          'border-solid',
          'fixed',
          'pin',
        ])};
      `}
    />
    <div
      css={css`
        ${tw([
          'border-2',
          'md:border-4',
          'border-black',
          'border-solid',
          'fixed',
          'pin-b',
          'pin-l',
          'pin-r',
          'z-1000',
        ])};
      `}
    />
    <Navbar />
    <div
      css={css`
        ${tw([
          'flex',
          'flex-col',
          'items-center',
          'max-w-md',
          'mx-auto',
          'px-q12',
          'sm:px-q24',
          'md:px-q48',
          'py-q72',
          'relative',
          'text-black',
        ])};
      `}
    >
      <div
        css={css`
          ${tw(['w-full'])};
          max-width: calc(100vw - 2rem);
        `}
      >
        {children}
      </div>
    </div>
    <Footer />
  </div>
))

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout