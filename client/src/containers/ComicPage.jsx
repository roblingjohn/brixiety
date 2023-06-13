import React, { createContext } from "react";
import comicData from "../assets/comicData/comicData";
import ComicDisplay from "../components/ComicDisplay";

export const ComicContext = createContext();

const ComicPage = (props) => {
  return (
    <div>
      <ComicContext.Provider
        value={comicData[parseInt(props.match.params.id) - 1]}
      >
        <ComicDisplay id={props.match.params.id} />
      </ComicContext.Provider>
    </div>
  );
};

export default ComicPage;
