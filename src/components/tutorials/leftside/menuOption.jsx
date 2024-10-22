import React from "react";
import "./../../../../style/tutorials.css";

const LeftMenuOption = ({ icon, text, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "left-menu-option-clicked" : "left-menu-option"
      }`}
    >
      {icon && <span>{icon}</span>}
      <p>{text}</p>
    </div>
  );
};

export default LeftMenuOption;
