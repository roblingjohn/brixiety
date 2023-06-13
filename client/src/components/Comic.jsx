import React, { useContext, useState } from "react";
import { ComicContext } from "../components/ComicDisplay";

const Comic = () => {
  const { comicTitle, titleText, comicNumber } = useContext(ComicContext);
  const [isExpanded, toggleExpand] = useState(false);
  return (
    <div>
      <h1>{comicTitle}</h1>
      <img
        src={require(`../assets/comics/${comicNumber}.png`)}
        className={isExpanded ? "comicImgExpanded" : "comicImg"}
        alt={`Brixiety #${comicNumber}: "${comicTitle}"`}
        title={`${titleText}`}
        onClick={() => toggleExpand(!isExpanded)}
      />
    </div>
  );
};

export default Comic;
