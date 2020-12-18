import React, { Component } from "react";
import ComicDisplay from "../components/ComicDisplay";

class ComicPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  comicId = this.props.match.params.id;

  render() {
    return (
      <div>
        <ComicDisplay id={this.comicId} />
        {this.comicId}
      </div>
    );
  }
}

export default ComicPage;
