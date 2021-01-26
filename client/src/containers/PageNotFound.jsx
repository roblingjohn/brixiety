import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <h1>Oops! That page doesn't exist.</h1>
      <p className="pageText">
        You may have done something wrong, but it's more likely I screwed
        something up because I'm bad at everything, including web development.
        But if you go back to the <Link to="/">Home Page</Link>, you may be able
        to find your way to whatever you were looking for despite my horribly
        designed website.
      </p>
    </div>
  );
};

export default PageNotFound;
