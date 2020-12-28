import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";

class Comic extends Component {
  state = {
    comic: {
      comicTitle: comicData[parseInt(this.props.id) - 1].comicTitle,
      id: this.props.id,
    },
  };
  comicId = parseInt(this.state.comic.id);

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.comic.id) {
      return {
        comic: {
          id: props.id,
          comicTitle: comicData[parseInt(props.id) - 1].comicTitle,
        },
      };
    }
    return null;
  }

  componentDidMount() {
    this.setState({
      comic: {
        id: this.props.id,
        comicTitle: comicData[parseInt(this.state.comic.id) - 1].comicTitle,
      },
    });
    console.log(comicData[parseInt(this.state.comic.id) - 1]);
  }

  render() {
    return (
      <div>
        <h1>{this.state.comic.comicTitle}</h1>
        {/* <h2>Comic: {this.state.comic.id}</h2> */}
        <img
          src={require(`../assets/comics/${this.state.comic.id}.png`)}
          className="comicImg"
          alt={`Brixiety #${this.state.comic.id}: "${this.state.comic.comicTitle}"`}
        />
      </div>
    );
  }
}

export default Comic;
