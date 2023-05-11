import React from 'react';
import { graphql } from 'gatsby';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

import { PrimaryLayout, Seo } from '../components';

const WordPressCategoryTemplate = ({ data: { wpCategory: category } }) => {
  const { siteUrl } = useSiteMetadata();

  return (
    <PrimaryLayout>
      <Seo
        title={category.seo.title}
        description={category.seo.metaDesc}
        canonical={`${siteUrl}${category.uri}`}
      />
      {/* <BlogPageContent
        posts={category.posts.nodes}
        category={category.name}
        updateCategory={category.updateCategory}
      /> */}
    </PrimaryLayout>
  );
};

export const Head = ({ data: { wpCategory: { seo: { title, metaDesc, canonical } } } }) => <Seo title={title} description={metaDesc} canonical={canonical} />

export const query = graphql`
  query ($id: String!) {
    wpCategory(id: { eq: $id }) {
      uri
      name
      seo {
        canonical
        metaDesc
        title
      }
      posts {
        nodes {
          uri
          author {
            node {
              name
            }
          }
          title
          featuredImage {
            node {
              altText
              localFile {
                absolutePath
                childImageSharp {
                  gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 200)
                }
              }
            }
          }
          date(formatString: "MMMM Do, YYYY")
          categories {
            nodes {
              name
            }
          }
          status
          uri
          excerpt
        }
      }
    }
  }
`;

export default WordPressCategoryTemplate;
