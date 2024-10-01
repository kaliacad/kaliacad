import React, { useState } from "react";
import "./../../../../style/tutorials.css";
import LeftMenuOption from "./menuOption";

export default function LeftSideTuto({
  articles,
  displayedArticles,
  setDisplayedArticles,
  selectedIndices,
}) {
  const [selectedOption, setSelectedOption] = useState("Tutorials home");

  function onSelectedOption(text) {
    setSelectedOption(text);
    if (text == "Saved tutorials") {
      const savedArticles = displayedArticles?.filter((article) =>
        selectedIndices?.includes(article.id)
      );
      setDisplayedArticles(savedArticles);
    } else if (text == "Tutorials home") {
      setDisplayedArticles(articles);
    }
  }

  // Menu options data as an array of objects
  const menuOptions = [
    { id: 1, text: "Tutorials home", icon: <i className="fas fa-home"></i> },
    { id: 2, text: "Saved tutorials", icon: <i className="fas fa-save"></i> },
  ];

  return (
    <div className="tuto-side-div tuto-side-div-left">
      {menuOptions.map((option) => (
        <LeftMenuOption
          key={option.id}
          icon={option.icon}
          text={option.text}
          isSelected={selectedOption === option.text}
          onClick={() => onSelectedOption(option.text)}
        />
      ))}
    </div>
  );
}
