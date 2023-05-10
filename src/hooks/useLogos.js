import { useStaticQuery, graphql } from 'gatsby';

// export const useLogo = () => {
//   const data = useStaticQuery(graphql`
//     {
//       primaryLogo: file(name: { eq: "" }) {
//         childImageSharp {
//           gatsbyImageData(
//             quality: 90
//             placeholder: BLURRED
//             formats: [AUTO, WEBP]
//           )
//         }
//         publicURL
//       }
//       minimalLogo: file(name: { eq: "" }) {
//         childImageSharp {
//           gatsbyImageData(
//             quality: 90
//             placeholder: BLURRED
//             formats: [AUTO, WEBP]
//           )
//         }
//         publicURL
//       }
//     }
//   `);

//   return data;
// };
