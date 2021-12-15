import React, { Component, setState } from "react";
import axios from "axios";
import parse from "html-react-parser";

class Blog extends Component {
  state = [{}];
  convertUnicode(input) {
    return input.replace(/\\u[0-9a-fA-F]{4}/g, function (a, b) {
      var charcode = parseInt(b, 16);
      return String.fromCharCode(charcode);
    });
  }

  looseJsonParse(obj) {
    return Function('"use strict";return (' + obj + ")")();
  }

  componentDidMount = () => {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/brixiety.wordpress.com/posts/"
      )
      .then((res) => {
        console.log(res.data.posts);
        this.setState(res.data.posts);
        // this.convertUnicode(this.state[0].content)
        // console.log(this.looseJsonParse(this.state[0].content));
      });
  };
  render() {
    return (
      <div className="container">
        <h1>This is the blog page</h1>
        <h2>{this.state[0].title}</h2>
        <div dangerouslySetInnerHTML={{ __html: this.state[0].content }}/>
      </div>
    );
  }
}

export default Blog;
