import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Seo } from '../../';

export const BlogPostContent = ({ post }) => {
  return (
    <>
      <Seo
        title={post.seo.title}
        description={post.seo.metaDescription}
        canonical={post.uri}
      />
      <article>
        <h1>{post.title}</h1>
        <GatsbyImage
          image={getImage(post.featuredImg.src)}
          alt={post.featuredImg.altText || ''}
        />
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
};
