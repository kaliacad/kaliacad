import React, { useState } from "react";
import "./../../../../style/tutorials.css";

export default function RightSideTuto() {
  const tagData = [
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "TypeScript",
    "Node.js",
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="tuto-side-div right-sidebar">
      <div className="tags-section">
        <h3>Filter with Tags</h3>
        <div className="tags-container">
          {tagData.map((tag, index) => (
            <span
              onClick={() => handleTagClick(tag)}
              key={index}
              className={`tag ${selectedTags.includes(tag) ? "selected" : ""}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
