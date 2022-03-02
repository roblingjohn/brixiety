import axios from "axios";
import moment from "moment";
import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class BlogArchive extends Component {
  componentDidMount = () => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/brixiety.wordpress.com/posts/"
      )
      .then((res) => {
        this.setState(res.data);
        this.blogPosts = res.data.posts;
        this.setState({ isLoading: false });
      });
  };
  blogPosts = [];
  render() {
    return (
      <div className="container">
        <h1>Blog Archive</h1>
        <table>
          <tbody>
            {this.blogPosts.map((post) => (
              <tr key={post.id}>
                <td>{moment(post.date).format("MMMM DD, YYYY")}</td>
                <td><Link to={`/blog/post/${post.ID}`}>{post.title}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BlogArchive;
