import React, { Component } from "react";

class Comic extends Component {
  state = {
    comics: [
      {
        comicTitle: "For Fun",
        comicNumber: 1,
      },
    ],

    
  };
  currentComic = this.state.comics[0]

  render() {
    return (
      <div>
        <h1>{this.currentComic.comicTitle}</h1>
        <img
          src={require(`../assets/comics/${this.currentComic.comicNumber}.png`)}
          className="comicImg"
          alt={`Brixiety #${this.currentComic.comicNumber}: "${this.currentComic.comicTitle}"`}
        />
      </div>
    );
  }
}

export default Comic;
