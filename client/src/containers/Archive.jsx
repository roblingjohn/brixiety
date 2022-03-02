import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";
import { Link } from "react-router-dom";
import moment from "moment";

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
        <table>
          <tbody>
            {this.comicArray.map((comic) => (
              <tr>
                <td>{comic.date && moment(comic.date).format("MMMM Do, YYYY")}</td>
                <td>#{comic.comicNumber}: </td>
                <td>
                  <Link to={`/comic/${comic.comicNumber}`}>
                    {comic.comicTitle}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Archive;
