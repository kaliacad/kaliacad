import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Header from "../components/header/Header";

const ArticleTemplate = ({ pageContext }) => {
  const [articleContent, setArticleContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const article = pageContext;

  useEffect(() => {
    const urlParts = article?.url.split("/");
    const username = urlParts[3];
    const slug = urlParts[4];

    const devToAPIUrl = `https://dev.to/api/articles/${username}/${slug}`;
    const fetchArticle = async () => {
      try {
        const response = await fetch(devToAPIUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const data = await response.json();
        setArticleContent(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (article?.url) {
      fetchArticle();
    }
  }, [article?.url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Grid container sx={{ overflow: "hidden" }}>
        <Grid item xs={false} sm={false} md={2} lg={1} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={10} xl={8} mt={10}>
          <div className="relative z-50">
            <h1>{articleContent?.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: articleContent?.body_html }}
            />
          </div>
        </Grid>
        <Grid item xs={false} sm={false} md={2} lg={1} xl={2}></Grid>
      </Grid>
    </>
  );
};

export default ArticleTemplate;
