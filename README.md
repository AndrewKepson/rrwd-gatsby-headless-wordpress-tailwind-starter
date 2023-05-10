# Red Rocks Web Development Gatsby-Tailwind Starter

This Gatsby starter is designed to seamlessly integrate with headless WordPress and utilize Tailwind CSS for styling. It is a perfect starter kit for building a modern, high-performance website using Gatsby, WordPress, and Tailwind CSS.

## Features

- **Gatsby** for blazing fast website
- **Headless WordPress** as the backend
- **Tailwind CSS** for utility-first CSS
- **GraphQL** to fetch data from WordPress
- Responsive and mobile-friendly design
- SEO-friendly
- Pre-configured with popular Gatsby plugins

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js and npm
- Gatsby CLI (`npm install -g gatsby-cli`)
- A local (or remote) WordPress instance

## Quick Start

1. **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    gatsby new my-wordpress-project https://github.com/yourusername/gatsby-starter-headless-wordpress-tailwind
    ```

2. **Set up your WordPress source.**

    Enter your WordPress site's baseUrl in a `.env` file:

    WP_GRAPHQL_ENDPOINT=your_wpgraphql_endpoint

    This will be referenced in your `gatsby-config.js` file:

    ```js
    plugins: [
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          url: process.env.WP_GRAPHQL_ENDPOINT,
        },
      },
    ]
    ```

3. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-wordpress-project/
    gatsby develop
    ```

4. **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`.

    _Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data._

## Configuration
### WordPress

You will need to set up a WordPress site and install the WPGraphQL plugin to expose the WordPress API to Gatsby. You can follow the instructions [here](https://www.wpgraphql.com/docs/quick-start/).

### Tailwind CSS

This starter uses Tailwind CSS for styling. If you want to customize it, you can modify the `tailwind.config.js` file. For more information, refer to the [Tailwind documentation](https://tailwindcss.com/docs).


## License

This project is open source and available under the [MIT License](LICENSE).

