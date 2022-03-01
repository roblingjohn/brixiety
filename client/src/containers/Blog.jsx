import React, { Component, setState } from "react";
import axios from "axios";
import BlogPreview from "../components/BlogPreview";

class Blog extends Component {
  state = { posts: [{ title: "loading" }], isLoading: true };
  blogPosts = this.state.posts;

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
  render() {
    if (this.state.isLoading === true) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="blogPage">
          <h1>Blogxiety</h1>
          {this.state.posts.map((post) => (
            <BlogPreview
              key={post.ID}
              id={post.ID}
              title={post.title}
              content={post.content}
            />
          ))}
          {/* <h2>{this.state[0].title}</h2>
        <div dangerouslySetInnerHTML={{ __html: this.state[0].content }}/> */}
          {/* <BlogPreview data={this.state[0]} /> */}
        </div>
      );
    }
  }
}

export default Blog;
