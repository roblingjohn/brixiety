import moment from "moment";
import React, { useContext, useState } from "react";
import { ComicContext } from "../components/ComicDisplay";

const Comic = () => {
  const { comicTitle, titleText, comicNumber, date } = useContext(ComicContext);
  const [isExpanded, toggleExpand] = useState(false);
  return (
    <div>
      <h1 class="mb-0">
        <b>{comicTitle}</b>
      </h1>
      <div class="mb-1">
        #{comicNumber} | {moment(date).format("MMMM D, YYYY")}
      </div>
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
