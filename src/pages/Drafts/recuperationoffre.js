import React from "react";

export const RenderTextWithLinks = ({ text, entityRangesLink, dataObject }) => {
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

  return <>{result}</>;
};
