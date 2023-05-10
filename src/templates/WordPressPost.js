import React from 'react';
import { graphql } from 'gatsby';

import { PrimaryLayout, BlogPostContent } from '../components';

import { processWordPressPost } from '../utils/functions';

const BlogPost = ({ data: { wpPost } }) => {
  return (
    <PrimaryLayout>
      <BlogPostContent post={processWordPressPost(wpPost)} />
    </PrimaryLayout>
  );
};

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      uri
      title
      content
      excerpt
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          altText
        }
      }
      modified(formatString: "YYYY-MM-DD")
      date(formatString: "YYYY-MM-DD")
      seo {
        canonical
        metaKeywords
        title
      }
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
          id
        }
      }
      author {
        node {
          name
        }
      }
      comments {
        nodes {
          author {
            node {
              name
            }
          }
          replies {
            nodes {
              author {
                node {
                  name
                }
              }
              content
            }
          }
          content
        }
      }
    }
  }
`;

export default BlogPost;
