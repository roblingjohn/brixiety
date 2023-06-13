import React, { useContext } from "react";
import comicData from "../assets/comicData/comicData";
import { ComicContext } from "../containers/ComicPage";
import { Link } from "react-router-dom";

const NavButtons = () => {
  const { comicNumber } = useContext(ComicContext);

  return (
    <div className="navRow row">
      <div className="d-flex justify-content-end navCol col-6 pr-0">
        {comicNumber > 1 && (
          <div>
            <Link to="/comic/1" id={1}>
              <button className="navButton">Oldest</button>
            </Link>
            <Link to={`/comic/${comicNumber - 1}`} id={comicNumber - 1}>
              <button className="navButton">Older</button>
            </Link>{" "}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-start navCol col-6 pl-0">
        {comicNumber < comicData.length && (
          <div>
            <Link
              to={`/comic/${parseInt(comicNumber) + 1}`}
              id={parseInt(comicNumber) + 1}
            >
              <button className="navButton">Newer</button>
            </Link>
            <Link to={`/comic/${comicData.length}`}>
              <button className="navButton">Newest</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavButtons;
