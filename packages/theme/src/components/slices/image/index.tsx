import * as React from 'react'

import { Img } from '../../img/index'
import { SpanHTML } from '../../html/index'
import { Image } from '../../../typings/image'

import {figureStyles, captionStyles} from './styles'

interface BodyImageProps {
  image: Image
  caption?: string
}

export function BodyImage({ image, caption }: BodyImageProps) {
  if (!image.url) { return null }

  return (
    <figure css={figureStyles}>
      <Img src={image.url} />
      {caption && (
        <figcaption css={captionStyles}>
          <SpanHTML>
            {caption}
          </SpanHTML>
        </figcaption>
      )}
    </figure>
  )
}