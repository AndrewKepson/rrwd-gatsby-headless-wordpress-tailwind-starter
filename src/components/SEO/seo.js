import * as React from 'react';
import PropTypes from 'prop-types';
import { Script } from 'gatsby';

import { useSiteMetadata, useShouldRender } from '../../hooks';
import { Schema } from './Schema';

const Seo = ({
  description,
  title,
  canonical,
  noIndex,
  children,
  schema,
  ogType = 'website',
  ogImg,
  ogImgAltText = '',
  twitterImg = '',
}) => {
  const {
    description: siteDescription,
    title: siteTitle,
    author,
    siteUrl,
  } = useSiteMetadata();

  const shouldRender = useShouldRender();

  const metaDescription = description || siteDescription;
  const pageTitle = title || siteTitle;

  return (
    <>
      <title>{pageTitle}</title>
      {/* Google Tag Manager Implementation */}
      {/* {shouldRender ? (
        <Script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-ID')}
        </Script>
      ) : null} */}

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      {ogImg && <meta property="og:image" content={siteUrl + ogImg} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {twitterImg && (
        <meta name="twitter:image" content={siteUrl + twitterImg} />
      )}
      {ogImgAltText && <meta name="twitter:image:alt" content={ogImgAltText} />}
      {canonical && <link rel="canonical" href={siteUrl + canonical} />}
      {schema && <Schema children={schema} />}
      {noIndex && <meta name="robots" content="noindex" />}
      {children}
    </>
  );
};

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  noIndex: PropTypes.bool,
  children: PropTypes.node,
  schema: PropTypes.object,
  ogType: PropTypes.string,
  ogImg: PropTypes.string,
  ogImgAltText: PropTypes.string,
  twitterImg: PropTypes.string,
};

export default Seo;
