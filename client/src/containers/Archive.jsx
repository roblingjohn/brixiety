import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";
import { Link } from "react-router-dom";
import moment from "moment";

class Archive extends Component {
  componentDidMount() {
    document.title = "Brixiety | Comic Archive";
  }
  comicArray = [...comicData].reverse();

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
                     "M/D/YY"
                    )}
                </td><td>|</td>
                <td style={{ textAlign: "right" }}>#{comic.comicNumber}: </td>
                <td>|</td>
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
