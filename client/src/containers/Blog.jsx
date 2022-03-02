import React, { Component} from "react";
import axios from "axios";
import BlogPreview from "../components/BlogPreview";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = { posts: [{ title: "loading" }], isLoading: true };
  blogPosts = this.state.posts;

  componentDidMount = () => {
    document.title = "Brixiety | Blog";
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
  render() {
    if (this.state.isLoading === true) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="blogPage">
          <h1>Blogxiety</h1>
          <h4><Link to={`/blog/archive`}>Archive</Link></h4>
          {this.state.posts.map((post) => (
            <BlogPreview
              key={post.ID}
              id={post.ID}
              title={post.title}
              content={post.content}
              date={post.date}
            />
          ))}
        </div>
      );
    }
  }
}

export default Blog;
