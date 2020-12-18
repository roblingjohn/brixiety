import React, { Component } from "react";
import Comic from "../components/Comic";

class ComicPage extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    comicId = this.props.match.params.id

  render() {
    return (
      <div>
        <Comic />
        {this.comicId}
      </div>
    );
  }
}

export default ComicPage;
