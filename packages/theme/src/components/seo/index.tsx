import React from 'react'
import { Helmet } from 'react-helmet'
import { get } from 'lodash'

import { APIS } from '@krapiva-org/utils/defaults/apis'

import jsonldGenerator from './jsonld-generator'

export const SEO = ({ data, location, meta }) => {
  const pageTitle = get(data, 'title')
  const pageImage = get(data, 'image.url')
  const {
    siteTitle,
    siteUrl: metaSiteUrl,
    siteDescription,
    siteKeywords,
    siteThemeColor,
    // fbAppId,
    twitter,
  } = meta
  const api = process.env.PRISMIC_API
  const pageTitleFull = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const pageDescriptionFull = siteDescription
  const pageKeywordsFull = siteKeywords
  const siteUrl = get(APIS, api) ? `https://${get(APIS, api)}.krapiva.org` : metaSiteUrl
  const pageImageFull = `${siteUrl}${pageImage}` || '/images/social.png'
  const slug = location.pathname
  const canonical = `${siteUrl}${slug}`

  return (
    <Helmet>
      <html lang="en" />

      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <meta content={siteTitle} name="apple-mobile-web-app-title" />
      <meta content={pageTitleFull} property="og:title" />
      <meta content={pageTitleFull} name="twitter:title" />
      <title>{pageTitleFull}</title>

      <meta content={pageKeywordsFull} name="keywords" />
      <meta content={pageDescriptionFull} name="description" />
      <meta content={pageDescriptionFull} property="og:description" />
      <meta content={pageDescriptionFull} name="twitter:description" />

      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
      <meta content={siteThemeColor} name="theme-color" />
      <meta content={siteTitle} name="application-name" />

      <meta content="website" property="og:type" />
      <meta content={siteTitle} property="og:site_name" />
      {/* <meta content={fbAppId} property="fb:app_id" /> */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={`@${twitter}`} name="twitter:site" />
      <meta content={`@${twitter}`} name="twitter:creator" />
      <meta content={pageTitleFull} name="twitter:text:title" />
      <meta content={canonical} property="og:url" />
      <meta content={canonical} name="twitter:url" />
      <link rel="canonical" href={canonical} />

      <meta content={pageImageFull} property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      <meta content={pageImageFull} name="twitter:image" />
      <meta content="1024" name="twitter:image:width" />
      <meta content="512" name="twitter:image:height" />

      <meta content={siteThemeColor} name="msapplication-TileColor" />
      <meta
        content="/icons/mstile-70x70.png"
        name="msapplication-square70x70"
      />
      <meta
        content="/icons/mstile-144x144.png"
        name="msapplication-square144x144"
      />
      <meta
        content="/icons/mstile-150x150.png"
        name="msapplication-square150x150"
      />
      <meta
        content="/icons/mstile-310x150.png"
        name="msapplication-wide310x150"
      />
      <meta
        content="/icons/mstile-310x310.png"
        name="msapplication-square310x310"
      />

      {/* <link href="/manifest.json" rel="manifest" /> */}

      <link
        href="/icons/apple-touch-icon-57x57.png"
        rel="apple-touch-icon"
        sizes="57x57"
      />
      <link
        href="/icons/apple-touch-icon-60x60.png"
        rel="apple-touch-icon"
        sizes="60x60"
      />
      <link
        href="/icons/apple-touch-icon-72x72.png"
        rel="apple-touch-icon"
        sizes="72x72"
      />
      <link
        href="/icons/apple-touch-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="/icons/apple-touch-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="/icons/apple-touch-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/icons/apple-touch-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="/icons/apple-touch-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="/icons/apple-touch-icon-167x167.png"
        rel="apple-touch-icon"
        sizes="167x167"
      />
      <link
        href="/icons/apple-touch-icon-180x180.png"
        rel="icon"
        sizes="180x180"
        type="image/png"
      />

      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />

      <script type="application/ld+json">
        {JSON.stringify(
          jsonldGenerator({
            pathname: location.pathname,
            canonical,
            siteUrl,
            pageTitle,
            siteTitle,
            pageTitleFull,
          })
        )}
      </script>
    </Helmet>
  )
}
