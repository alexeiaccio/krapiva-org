/* global tw */
import React from 'react'
import { css } from 'react-emotion'
import { StaticQuery, Link, graphql } from 'gatsby'

import { ButtonOutlinedBlock, ButtonOutlinedDisabled } from './Buttons'
import { uuid } from '../utils'

export const Menu = ({ toggle, toggledOn }) => (
  <StaticQuery
    query={graphql`
      query {
        pages: allSitePage {
          edges {
            node {
              path
            }
          }
        }
        index: prismicIndex {
          data {
            categories {
              categoryid
              categorytitle {
                text
              }
            }
          }
        }
      }
    `}
    render={({ pages, index }) => (
      <div
        className={css`
          ${tw([
            'flex',
            'flex-row',
            'flex-wrap',
            'items-center',
            'justify-center',
            'py-q36',
            'px-q24',
            'sm:px-q48',
          ])};
        `}
      >
        <Link
          className={css`
            ${tw([
              'flex-auto',
              'md:flex-1',
              'mb-q8',
              'px-q4',
              'w-full',
              'md:w-auto',
            ])};
          `}
          to={`/new`}
        >
          <ButtonOutlinedBlock
            className={css`
              ${tw(['hover:bg-green'])};
            `}
          >
            Новое
          </ButtonOutlinedBlock>
        </Link>
        {index.data.categories.map(category => {
          const pageExist = pages.edges.some(
            ({ node }) => node.path.replace(/\//g, '') === category.categoryid
          )
          return pageExist ? (
            <Link
              className={css`
                ${tw(['flex-1', 'mb-q8', 'px-q4'])};
              `}
              key={uuid()}
              to={`${category.categoryid}`}
            >
              <ButtonOutlinedBlock
                className={css`
                  ${tw(['hover:bg-green'])};
                `}
                key={uuid()}
              >
                {category.categorytitle.text}
              </ButtonOutlinedBlock>
            </Link>
          ) : (
            <span
              className={css`
                ${tw(['flex-1', 'mb-q8', 'px-q4'])};
              `}
              key={uuid()}
            >
              <ButtonOutlinedDisabled key={uuid()}>
                {category.categorytitle.text}
              </ButtonOutlinedDisabled>
            </span>
          )
        })}
        <Link
          className={css`
            ${tw([
              'flex-auto',
              'md:flex-1',
              'mb-q8',
              'px-q4',
              'w-full',
              'md:w-auto',
            ])};
          `}
          to={`/o-nas`}
        >
          <ButtonOutlinedBlock
            className={css`
              ${tw(['hover:bg-green'])};
            `}
          >
            О Редакции
          </ButtonOutlinedBlock>
        </Link>
        <span
          className={css`
            ${tw(['flex-auto', 'md:hidden', 'px-q4', 'w-full'])};
          `}
          key={uuid()}
        >
          <ButtonOutlinedBlock
            className={css`
              ${tw(['bg-green', 'hover:bg-white', 'hover:text-black'])};
            `}
            onClick={toggle}
          >
            {toggledOn ? '֍' : 'Подписка'}
          </ButtonOutlinedBlock>
        </span>
      </div>
    )}
  />
)