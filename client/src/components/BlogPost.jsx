import React, { Component, setState } from "react";

class BlogPost extends Component {
  state = {};
  componentDidMount = () => {
    this.setState(this.props);
  };
  render() {
    if (this.state.title) {
      return (
        <div className="blogPost">
          <h2>{this.state.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default BlogPost;
