import React from "react";
import Comic from "./Comic";
import NavButtons from "../components/NavButtons";

const ComicDisplay = (props) => {
  return (
    <div>
        <NavButtons />
        <Comic />
        <NavButtons />
    </div>
  );
};

export default ComicDisplay;
