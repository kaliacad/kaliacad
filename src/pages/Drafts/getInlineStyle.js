import React from "react";

export const GetInlineStyleDeclaration = (style) => {
  const styleDeclaration = {};

  if (style.includes("BOLD")) {
    styleDeclaration.fontWeight = "bold";
  }

  if (style.includes("ITALIC")) {
    styleDeclaration.fontStyle = "italic";
  }

  if (style.includes("UNDERLINE")) {
    styleDeclaration.textDecoration = "underline";
  }

  if (style.includes("STRIKETHROUGH")) {
    styleDeclaration.textDecoration = "line-through";
  }

  if (style.includes("CODE")) {
    styleDeclaration.fontFamily = "monospace";
    styleDeclaration.backgroundColor = "#f0f0f0";
    styleDeclaration.padding = "2px 4px";
    styleDeclaration.borderRadius = "4px";
  }
  if (style.includes("FONTSIZE_8")) {
    styleDeclaration.fontSize = "8px";
  }

  if (style.includes("FONTSIZE_12")) {
    styleDeclaration.fontSize = "12px";
  }

  if (style.includes("FONTSIZE_16")) {
    styleDeclaration.fontSize = "16px";
  }

  // Gérer les tailles de police supérieures à 20px
  if (style.includes("FONTSIZE") && style.match(/\d+/)) {
    const fontSize = parseInt(style.match(/\d+/)[0], 10);
    styleDeclaration.fontSize = fontSize > 20 ? "20px" : `${fontSize}px`;
  }
  if (style.includes("ALIGN_LEFT")) {
    styleDeclaration.textAlign = "left";
  }

  if (style.includes("ALIGN_CENTER")) {
    styleDeclaration.textAlign = "center";
  }

  if (style.includes("ALIGN_RIGHT")) {
    styleDeclaration.textAlign = "right";
  }

  // Ajoutez d'autres styles selon vos besoins

  return styleDeclaration;
};
