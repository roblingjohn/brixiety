import moment from "moment";
import React, { Component, setState } from "react";

class BlogPreview extends Component {
  state = {};
  componentDidMount = () => {
    this.setState(this.props);
  };
  render() {
    if (this.state.title) {
      return (
        <div className="blogPost">
          <h2>{this.state.title}</h2>
          <h6>{moment(this.state.date).format("MMMM DD, YYYY")}</h6>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default BlogPreview;
