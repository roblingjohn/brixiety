import React, { Component } from "react";
import Comic from "./Comic";
import NavButtons from "./NavButtons";

class ComicDisplay extends Component {
  state = {
    comic: {
      id: this.props.id,
    },
  };

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

  componentDidMount() {
    this.setState({
      comic: {
        id: this.props.id,
      },
    });
  }

  comicId = parseInt(this.state.comic.id);

  render() {
    return (
      <div
        className={
          this.state.comic.id === 12 || this.state.comic.id === "12" || this.state.comic.id === 58 || this.state.comic.id === "58"
            ? "aprilFools"
            : ""
        }
      >
        <NavButtons id={this.state.comic.id} />
        <Comic id={this.state.comic.id} />
        <NavButtons id={this.state.comic.id} />
      </div>
    );
  }
}

export default ComicDisplay;
