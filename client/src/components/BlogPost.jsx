import React, { Component, setState } from "react";

class BlogPost extends Component {
  state = {};
  componentDidMount = () => {
      console.log(this.props.data)
    this.setState(this.props.data[0]);
    console.log(this.state)
  };
  render() {
    return (
      <div>
        <h1>This is the blog page</h1>
        <h2>{this.props.data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: this.props.data.content }} />
      </div>
    );
  }
}

export default BlogPost;
