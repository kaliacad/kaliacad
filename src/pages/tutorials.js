import { Grid, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Layout from "../theme/layout";
import "./../../style/style.css";
import LeftSideTuto from "../components/tutorials/leftside/leftside";
import RightSideTuto from "../components/tutorials/rightside/rightside";
import { getArticles } from "../lib/getArticles";

function Tutorials() {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const allArticles = await getArticles();
      console.log("article", allArticles[0]);

      const allTags = [];
      allArticles.forEach((article) => {
        const articleTags = article.tags.split(",");
        articleTags.forEach((tag) => {
          const trimmedTag = tag.trim();
          if (!allTags.includes(trimmedTag)) {
            if (trimmedTag.length > 0) {
              allTags.push(trimmedTag);
            }
          }
        });
      });

      setArticles(allArticles);
      setDisplayedArticles(allArticles);
      setTags(allTags);
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (selectedTags?.length > 0) {
      const taggedArticles = articles?.filter((article) => {
        const tags = article?.tags.split(",");
        const hasAllTags =
          Array.isArray(tags) &&
          selectedTags.every((tag) => tags.includes(tag));

        return hasAllTags;
      });

      setDisplayedArticles(taggedArticles);
    } else {
      setDisplayedArticles(articles);
    }
  }, [selectedTags.length]);

  useEffect(() => {
    const storedIndices = JSON.parse(localStorage.getItem("selectedIndices"));
    if (storedIndices) {
      setSelectedIndices(storedIndices);
    }
  }, []);

  const handleIconClick = (index) => {
    setSelectedIndices((prevSelected) => {
      const updatedSelected = prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index];

      localStorage.setItem("selectedIndices", JSON.stringify(updatedSelected));

      return updatedSelected;
    });
  };
  useEffect(() => {
    setSelectedIndices(selectedIndices);
  }, [selectedIndices.length]);

  return (
    <Layout>
      <Header />
      <Grid container sx={{ overflow: "hidden" }}>
        <Grid item xs={false} sm={false} md={2} lg={1} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={10} xl={8} mt={2}>
          <div className="tutorial">
            <LeftSideTuto
              articles={articles}
              displayedArticles={displayedArticles}
              setDisplayedArticles={setDisplayedArticles}
              selectedIndices={selectedIndices}
            />
            <div className="tuto-main-div">
              <div className="answers-list">
                {displayedArticles?.length > 0 ? (
                  displayedArticles?.map((answer, index) => (
                    <div className="answer-card" key={index}>
                      <div className="title-container">
                        <Link href={`${answer.canonical_url}`} passHref>
                          <a target="_blank" rel="noopener noreferrer">
                            <h3>{answer.title}</h3>
                          </a>
                        </Link>
                        {/* <div
                          className={`icon-container `}
                          onClick={() => handleIconClick(answer.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={
                              selectedIndices.includes(answer.id)
                                ? "blue"
                                : "none"
                            }
                            stroke={
                              selectedIndices.includes(answer.id)
                                ? "blue"
                                : "currentColor"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                            aria-label="bookmark"
                          >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div> */}
                      </div>
                      <p>{answer.description}</p>
                      {/* <div className="tags tags-main">
                        {answer.tag_list.map((tag, idx) => (
                          <span key={idx} className="tag">
                            #{tag}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  ))
                ) : (
                  <p>There is no available article</p> // Add a loading state
                )}
              </div>
            </div>
            <RightSideTuto
              tagData={tags}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </div>
        </Grid>
        <Grid item xs={false} sm={false} md={2} lg={1} xl={2}></Grid>
      </Grid>
    </Layout>
  );
}

export default Tutorials;
export const Head = () => <title>Kali Academy | Tutorials</title>;
