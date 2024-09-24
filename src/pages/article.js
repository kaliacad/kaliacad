import React from "react";

const Article = ({ pageContext }) => {
  const { id, title, ulr } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      <p>{ulr}</p>
      <div>jkljlj</div>
    </div>
  );
};

export default Article;
