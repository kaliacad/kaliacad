const path = require("path");

const { getArticles } = require("./src/lib/getArticles");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const articlePost = await getArticles();

  // console.log("gatsby", articlePost);

  const articleTemplate = path.resolve("src/templates/article.js");

  articlePost.forEach((article) => {
    createPage({
      path: `/article/${article.id}`,
      component: articleTemplate,
      context: {
        id: article.id,
        title: article.title,
        url: article.canonical_url,
      },
    });
  });
};
