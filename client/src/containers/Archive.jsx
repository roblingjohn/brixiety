import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";
import { Link } from "react-router-dom";
import moment from "moment";

class Archive extends Component {
  componentDidMount() {
    document.title = "Brixiety | Comic Archive";
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
                <td style={{ textAlign: "right" }}>
                  {comic.date &&
                    moment(comic.date).format(
                      (window.screen.width > 450 ? "MMMM" : "MMM") + " D, YYYY"
                    )}
                </td>
                <td style={{ textAlign: "right" }}>#{comic.comicNumber}: </td>
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
