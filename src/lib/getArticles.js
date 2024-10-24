const getArticles = async () => {
  let articles = [];

  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=kaliacad",
      {
        // headers: {
        //   "api-key": process.env.DEVTO_APIKEY,
        // },
      }
    );
    articles = await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return articles;
};

module.exports = { getArticles };
