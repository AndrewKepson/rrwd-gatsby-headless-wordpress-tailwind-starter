// * Function used to truncate text on components where text length varies, ie. blog post cards
export const truncateText = (text, maxLength, appendEllipsis = true) => {
  if (text.length <= maxLength) {
    return text;
  }

  const trimmedExcerpt = text.slice(0, maxLength);
  const lastSpaceIndex = trimmedExcerpt.lastIndexOf(' ');

  return appendEllipsis !== false
    ? `${trimmedExcerpt.slice(0, lastSpaceIndex)}...`
    : `${trimmedExcerpt.slice(0, lastSpaceIndex)}`;
};

// * This function just makes it a bit easier to work with WP posts in template files by creating a clean object with the necessary data
export const processWordPressPost = (postData) => {
  return {
    title: postData.title,
    author: postData.author.node.name,
    date: postData.date,
    featuredImg: {
      src: postData.featuredImage.node.localFile.childImageSharp
        .gatsbyImageData,
      altText: postData.featuredImage.altText,
    },
    excerpt: postData.excerpt,
    content: postData.content,
    category: postData.categories.nodes[0].name,
    categories: postData.categories,
    tags: postData.tags.nodes.map((tag) => tag.name),
    seo: {
      title: postData.seo.title,
      canonical: postData.seo.canonical,
      metaDescription: postData.seo.metaDesc,
    },
    ogImg: postData.featuredImage.node.localFile.childImageSharp.ogImg,
    twitterImg:
      postData.featuredImage.node.localFile.childImageSharp.twitterImg,
    uri: postData.uri,
  };
};

// * Function to set dynamic color classes for category elements, can be easily modified for tags etc.
// export const chooseCategoryColor = (category) => {
//   let color;

//   switch (category) {
//     case 'Category One':
//       color = 'bg-primary-200 text-primary-600';
//       break;
//     case 'Category Two':
//       color = 'bg-secondary-200 text-secondary-600';
//       break;
//     case 'Category Three':
//       color = 'bg-red-200 text-red-600';
//       break;
//     default:
//       color = 'bg-primary-200 text-primary-600';
//   }

//   return color;
// };

// * If using this function: npm i react-html-parser
// export const getHeadingsFromMarkdown = (markdown) => {
//   const htmlElements = ReactHtmlParser(markdown).filter((el) => el !== null);
//   let h2s = htmlElements.filter((el) => el.type === 'h2');
//   let h3s = htmlElements.filter((el) => el.type === 'h3');

//   const headings = [...h2s, ...h3s]
//     .sort((a, b) => a.key - b.key)
//     .map((heading) => {
//       const classes =
//         heading.type === 'h2'
//           ? 'text-md my-1 cursor-pointer font-garamond font-semibold text-secondary-700 md:text-lg'
//           : 'text-md my-1 cursor-pointer font-garamond font-semibold text-secondary-600 md:text-md m-2';

//       return {
//         heading: heading.props.children[0],
//         key: heading.key,
//         classes,
//         slug: heading.props.id,
//       };
//     });

//   return headings;
// };
