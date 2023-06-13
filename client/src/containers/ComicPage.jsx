import React, { createContext } from "react";
import ComicDisplay from "../components/ComicDisplay";

export const ComicContext = createContext();

const ComicPage = (props) => {
  return (
    <div>
      <ComicDisplay comicNumber={props?.match?.params?.id - 1} />
    </div>
  );
};

export default ComicPage;
