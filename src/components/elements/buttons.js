import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const OutlinedTemplate = css`
  ${tw([
    'bg-white',
    'inline-flex',
    'border',
    'border-black',
    'border-solid',
    'font-montserrat',
    'items-center',
    'justify-center',
    'outline-none',
    'text-black',
    'select-none',
    'uppercase',
    'hover:bg-black',
    'hover:text-white',
  ])};
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
`

export const ButtonOutlined = css`
  ${OutlinedTemplate};
  ${tw(['px-q24', 'py-q12', 'text-sm'])};
`

export const ButtonOutlinedBlock = styled('button')`
  ${OutlinedTemplate};
  ${tw(['px-q24', 'py-q8', 'text-xs', 'whitespace-no-wrap'])};
  ${({ active }) =>
    active ? tw(['bg-black', 'text-white']) : tw(['cursor-pointer'])};
`

export const ButtonOutlinedDisabled = styled('button')`
  ${tw([
    'bg-black',
    'inline-flex',
    'border',
    'border-green',
    'border-solid',
    'font-montserrat',
    'items-center',
    'justify-center',
    'text-green',
    'uppercase',
  ])};
  ${tw(['px-q24', 'py-q8', 'text-xs', 'w-full', 'whitespace-no-wrap'])};
`
