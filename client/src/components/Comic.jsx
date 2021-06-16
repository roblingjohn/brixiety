import React, { Component } from "react";
import comicData from "../assets/comicData/comicData";

class Comic extends Component {
  state = {
    comic: {
      comicTitle: comicData[parseInt(this.props.id) - 1].comicTitle,
      id: this.props.id,
      titleText: comicData[parseInt(this.props.id) - 1].titleText,
    },
    expanded: false,
  };
  comicId = parseInt(this.state.comic.id);

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.comic.id) {
      return {
        comic: {
          id: props.id,
          comicTitle: comicData[parseInt(props.id) - 1].comicTitle,
          titleText: comicData[parseInt(props.id) - 1].titleText,
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
        titleText: comicData[parseInt(this.props.id) - 1].titleText,
      },
    });
  }

  handleExpand = () => {
    if (this.state.expanded === false) {
      this.setState({ expanded: true });
    } else if (this.state.expanded) {
      this.setState({ expanded: false });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.comic.comicTitle}</h1>
        {/* <h2>Comic: {this.state.comic.id}</h2> */}
        <img
          src={require(`../assets/comics/${this.state.comic.id}.png`)}
          className={this.state.expanded ? "comicImgExpanded" : "comicImg"}
          alt={`Brixiety #${this.state.comic.id}: "${this.state.comic.comicTitle}"`}
          title={`${this.state.comic.titleText}`}
          onClick={this.handleExpand}
        />
      </div>
    );
  }
}

export default Comic;
