import React, { useState } from "react";
import "./../../../../style/tutorials.css";
import LeftMenuOption from "./menuOption";

export default function LeftSideTuto() {
  const [selectedOption, setSelectedOption] = useState("Answers home");

  // Menu options data as an array of objects
  const menuOptions = [
    { id: 1, text: "Answers home", icon: <i className="fas fa-home"></i> },
    { id: 2, text: "Saved answers", icon: <i className="fas fa-save"></i> },
    { id: 3, text: "Trendings answers", icon: <i className="fas fa-fire"></i> },
  ];

  return (
    <div className="tuto-side-div tuto-side-div-left">
      {menuOptions.map((option) => (
        <LeftMenuOption
          key={option.id}
          icon={option.icon}
          text={option.text}
          isSelected={selectedOption === option.text}
          onClick={() => setSelectedOption(option.text)}
        />
      ))}
    </div>
  );
}
