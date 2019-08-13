import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import { AboutBody } from '../components/AboutBody'
import { Author } from '../components/Author'
import { Heading1, Heading2 } from '../components/Typography'
import { uuid } from '../utils'

const AboutPage = ({ data, location }) => {
  const about = data.about.data
  const { edges: authors } = data.authors

  return (
    <>
      <h1 className={Heading1}>{about.title.text}</h1>
      <AboutBody {...{ about }} />
      <h2
        css={css`
          ${Heading2};
          ${tw(['mt-q72'])};
        `}
      >
        Редсовет
      </h2>
      <div
        css={css`
          ${tw(['flex', 'flex-row', 'flex-wrap', '-mx-4', 'mt-q64', 'w-full'])};
        `}
      >
        {authors
          .filter(x => x.node.data.type === 'redsovet')
          .map(({ node }) => {
            const author = node.data
            return <Author key={uuid()} {...{ author }} {...{ location }} />
          })}
      </div>
      <h2
        css={css`
          ${Heading2};
          ${tw(['mt-q48'])};
        `}
      >
        Авторы
      </h2>
      <div
        css={css`
          ${tw(['flex', 'flex-row', 'flex-wrap', '-mx-4', 'mt-q64', 'w-full'])};
        `}
      >
        {authors
          .filter(x => x.node.data.type === 'author')
          .map(({ node }) => {
            const author = node.data
            return <Author key={uuid()} {...{ author }} {...{ location }} />
          })}
      </div>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    authors: allPrismicAuthors(sort: { fields: [data___name] }) {
      edges {
        node {
          data {
            type
            name
            statement {
              html
            }
            avatar {
              url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 80) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    about: prismicAbout {
      ...AboutBody
      data {
        title {
          text
        }
      }
    }
  }
`