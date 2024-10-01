import React from "react";
import { GetInlineStyleDeclaration } from "./getInlineStyle";

export const RenderTextWithLinks = ({
  text,
  entityRangesLink,
  dataObject,
  inlineStyleRanges,
}) => {
  if (!entityRangesLink || entityRangesLink.length === 0) {
    return <span>{text}</span>;
  }

  let result = [];
  let lastIndex = 0;

  entityRangesLink.forEach((range) => {
    const { offset, length, key } = range;
    const linkText = text.slice(offset, offset + length);
    const linkUrl = dataObject.entityMap[key].data.url;

    // Ajouter le texte avant le lien
    result.push(<span key={lastIndex}>{text.slice(lastIndex, offset)}</span>);

    // Ajouter le lien
    result.push(
      <a key={key} href={linkUrl} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    );

    lastIndex = offset + length;
  });

  // Ajouter le texte après le dernier lien
  result.push(<span key={lastIndex}>{text.slice(lastIndex)}</span>);
  // Appliquer les styles en ligne
  const styleClassNames = inlineStyleRanges.map((styleRange) => {
    return `style-${styleRange.style}-${styleRange.offset}-${styleRange.length}`;
  });

  return (
    <span>
      {result.map((element, index) => (
        <span
          key={index}
          className={styleClassNames.join(" ")}
          style={{ display: "inline" }}
        >
          {element}
        </span>
      ))}
      <>
        {styleClassNames.map(
          (className, index) =>
            `.${className} { ${GetInlineStyleDeclaration(
              inlineStyleRanges[index].style
            )} }`
        )}
      </>
    </span>
  );
};
