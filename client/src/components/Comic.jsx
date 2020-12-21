import React, { Component } from "react";

class Comic extends Component {
  state = {
    comic: 
      {
        comicTitle: "For Fun",
        id: this.props.id,
      },
    

    
  };
  currentComic = this.state.comic

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.comic.id) {
      return {
        comic: {
          id: props.id,
        },
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h1>{this.currentComic.comicTitle}</h1>
        {/* <h2>Comic: {this.state.comic.id}</h2> */}
        <img
          src={require(`../assets/comics/1.png`)}
          className="comicImg"
          alt={`Brixiety #${this.currentComic.comicNumber}: "${this.currentComic.comicTitle}"`}
        />
      </div>
    );
  }
}

export default Comic;
