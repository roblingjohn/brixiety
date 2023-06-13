import React, { createContext } from "react";
import Comic from "./Comic";
import NavButtons from "../components/NavButtons";
import comicData from "../assets/comicData/comicData";

export const ComicContext = createContext();

const ComicDisplay = (props) => {
  const currentComic = comicData[props.comicNumber];
  return (
    <div>
      <ComicContext.Provider value={currentComic}>
        <NavButtons />
        <Comic />
        <NavButtons />
      </ComicContext.Provider>
    </div>
  );
};

export default ComicDisplay;
