import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoldSupport, PlatiumSupport } from "../data/Data";
import Header from "../components/header/Header";
import Layout from "../theme/layout";
import "./../../style/style.css";
import LeftSideTuto from "../components/tutorials/leftside/leftside";
import RightSideTuto from "../components/tutorials/rightside/rightside";

function Tutorials() {
  const [articles, setArticles] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);

  // Fetch articles from Dev.to API
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=kaliacad")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const handleIconClick = (index) => {
    setSelectedIndices((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <Layout>
      <Header />
      <Grid
        container
        sx={{
          overflow: "hidden",
        }}
      >
        <Grid item xs={false} sm={false} md={2} lg={1} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={10} xl={8} mt={2}>
          <div className="tutorial">
            <LeftSideTuto />
            <div className="tuto-main-div">
              <div className="search-filter-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search answers..."
                />
              </div>
              <div className="answers-list">
                {articles.map((answer, index) => (
                  <div className="answer-card" key={index}>
                    <div className="title-container">
                      <h3>{answer.title}</h3>

                      <div
                        className={`icon-container `}
                        onClick={() => handleIconClick(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill={
                            selectedIndices.includes(index) ? "blue" : "none"
                          }
                          stroke={
                            selectedIndices.includes(index)
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
                      </div>
                    </div>
                    <p>{answer.description}</p>
                    <div className="tags tags-main">
                      {answer.tag_list.map((tag, idx) => (
                        <span key={idx} className="tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <RightSideTuto />
          </div>
        </Grid>
        <Grid item xs={false} sm={false} md={2} lg={1} xl={2}></Grid>
      </Grid>
    </Layout>
  );
}

export default Tutorials;
export const Head = () => <title>Kali Academy | tutorials</title>;
