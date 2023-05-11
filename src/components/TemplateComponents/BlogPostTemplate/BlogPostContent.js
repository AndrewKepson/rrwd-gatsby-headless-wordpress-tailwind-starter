import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const BlogPostContent = ({ post }) => {
  return (
      <article>
        <h1>{post.title}</h1>
        <GatsbyImage
          image={getImage(post.featuredImg.src)}
          alt={post.featuredImg.altText || ''}
        />
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
  );
};
