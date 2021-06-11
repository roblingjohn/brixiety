import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";
import { Link } from "react-router-dom";

class Archive extends Component {
  componentDidMount() {
    document.title = "Brixiety | Archive";
  }
  comicArray = [...comicData].reverse();

  // componentDidMount() {
  //   this.comicArray = comicData.reverse
  //   // console.log(comicData.reverse())
  //   // console.log(this.comicArray)
  // }

  render() {
    return (
      <div className="container">
        <h1>Archive</h1>
        <ul className="pageText">
          {this.comicArray.map((comic) => (
            <li>
              {comic.comicNumber}:{" "}
              <Link to={`/comic/${comic.comicNumber}`}>{comic.comicTitle}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Archive;
