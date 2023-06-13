import React, { useContext } from "react";
import { ComicContext } from "../containers/ComicPage";

const Comic = () => {
  const { comicTitle, titleText, comicNumber } = useContext(ComicContext);
  const expanded = false
  return (
    <div>
      <h1>{comicTitle}</h1>
      <img
        src={require(`../assets/comics/${comicNumber}.png`)}
        className={expanded ? "comicImgExpanded" : "comicImg"}
        alt={`Brixiety #${comicNumber}: "${comicTitle}"`}
        title={`${titleText}`}
        // onClick={this.handleExpand}
      />
    </div>
  );
};

export default Comic;
