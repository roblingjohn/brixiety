import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";
import { Link } from "react-router-dom";

class Archive extends Component {
  comicArray = comicData.reverse();

  // componentDidMount() {
  //   console.log(comicData.reverse())
  //   console.log(this.comicArray)
  // }

  render() {
    return (
      <div className="container">
        <h1>Archive</h1>
        <ul className="pageText">
          {comicData.reverse().map((comic) => (
            <Link to={`/comic/${comic.comicNumber}`}>
              <li>
                {comic.comicNumber}: {comic.comicTitle}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Archive;
