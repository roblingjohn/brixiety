import React, { Component } from "react";
import Comic from "./Comic";
import NavButtons from "./NavButtons";

class ComicDisplay extends Component {
  comicId = parseInt(this.props.id);

  render() {
    return (
      <div>
        <NavButtons comicId={this.comicId} />
        <Comic comicId={this.comicId} />
        <NavButtons comicId={this.comicId} />
      </div>
    );
  }
}

export default ComicDisplay;
