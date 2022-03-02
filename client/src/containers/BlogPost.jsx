import axios from "axios";
import moment from "moment";
import React, { Component } from "react";

class BlogPost extends Component {
  state = {};
  componentDidMount() {
    this.setState({ id: this.props.match.params });
    axios
      .get(
        `https://public-api.wordpress.com/rest/v1.1/sites/brixiety.wordpress.com/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState(res.data);
      });
  }
  render() {
    return (
      <div className="blogPost">
          <h2>{this.state.title}</h2>
          <h6>{moment(this.state.date).format("dddd, MMMM Do, YYYY")}</h6>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    );
  }
}

export default BlogPost;
