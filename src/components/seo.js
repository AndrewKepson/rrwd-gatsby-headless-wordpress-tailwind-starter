import * as React from 'react';
import PropTypes from 'prop-types';
import { Script } from 'gatsby';

import { useSiteMetadata } from '../hooks';

const Seo = ({ description, title, canonical, noIndex, children }) => {
  const {
    description: siteDescription,
    title: defaultTitle,
    author,
    siteUrl,
  } = useSiteMetadata();

  const metaDescription = description || siteDescription;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      {/* Google Tag Manager Implementation */}
      {/* {typeof window !== 'undefined' &&
        process.env.NODE_ENV === 'production' && (
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
            })(window, document, 'script', 'dataLayer', 'GTM-TB5KW37')}
          </Script>
        )} */}

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {canonical && <link rel="canonical" href={siteUrl + canonical} />}
      {noIndex && <meta name="robots" content="noindex" />}
      {children}
    </>
  );
};

Seo.defaultProps = {
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
