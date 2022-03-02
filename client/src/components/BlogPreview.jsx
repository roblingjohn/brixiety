import moment from "moment";
import React, { Component} from "react";
import { Link } from "react-router-dom";

class BlogPreview extends Component {
  state = {};
  componentDidMount = () => {
    this.setState(this.props);
  };
  render() {
    if (this.state.title) {
      return (
        <div className="blogPost">
          <h2><Link to={`/blog/post/${this.state.id}`}>{this.state.title}</Link></h2>
          <h6>{moment(this.state.date).format("dddd, MMMM Do, YYYY")}</h6>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default BlogPreview;
