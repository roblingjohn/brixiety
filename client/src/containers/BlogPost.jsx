import axios from "axios";
import moment from "moment";
import React, { Component } from "react";

class BlogPost extends Component {
  state = {};
  componentDidMount() {
<<<<<<< HEAD
=======
    document.title = "Brixiety | Blog";
>>>>>>> b42194664798ba6cdd24b060f806a0360a0c525c
    this.setState({ id: this.props.match.params });
    axios
      .get(
        `https://public-api.wordpress.com/rest/v1.1/sites/brixiety.wordpress.com/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState(res.data);
<<<<<<< HEAD
=======
        document.title = `Brixiety | Blog | ${this.state.title}`;
>>>>>>> b42194664798ba6cdd24b060f806a0360a0c525c
      });
  }
  render() {
    return (
      <div className="blogPost">
<<<<<<< HEAD
          <h2>{this.state.title}</h2>
          <h6>{moment(this.state.date).format("dddd, MMMM Do, YYYY")}</h6>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
=======
        <h2>{this.state.title}</h2>
        <h6>{moment(this.state.date).format("dddd, MMMM Do, YYYY")}</h6>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
>>>>>>> b42194664798ba6cdd24b060f806a0360a0c525c
      </div>
    );
  }
}

export default BlogPost;
