import React from "react";
import { Link } from "react-router-dom";

const GhostTemplate = () => {
  return (
    <div className="container">
      <h1>Ghost Template</h1>
      <p className="pageText">
        Here is a blank version of{" "}
        <Link to="/comic/38">Comic #38 - Haunted House</Link>. Please be
        respectful with whatever you put in it. Don't make me regret doing this.
      </p>
      <img
        src={require("../assets/images/ghosttemplate.png")}
        className="comicImg"
      />
    </div>
  );
};

export default GhostTemplate;
