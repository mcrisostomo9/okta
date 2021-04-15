const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postPageTemplate = path.resolve("./src/templates/post.js");

  const postsResults = await graphql(`
    query {
      okta {
        posts(options: { paginate: { limit: 50 } }) {
          data {
            id
          }
        }
      }
    }
  `);

  postsResults.data.okta.posts.data.forEach(({ id }) => {
    const path = `/posts/${id}`;
    createPage({
      path,
      component: postPageTemplate,
      context: {
        id: id,
      },
    });
  });
};
