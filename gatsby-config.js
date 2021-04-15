module.exports = {
  siteMetadata: {
    title: "okta",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "OKTA",
        fieldName: "okta",
        // Url to query from
        url: "https://graphqlzero.almansi.me/api",
      },
    },
  ],
};
