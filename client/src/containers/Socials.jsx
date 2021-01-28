import React, { Component } from "react";

class Socials extends Component {
  render() {
    return (
      <div className="container">
        <h1>Social Media</h1>
        <p>
          These are all the official social media pages for Brixiety. Anyone
          else claiming to be us is fake.
        </p>
        <ul className="pageText">
          <li>
            Facebook: <a href="https://www.facebook.com/Brixiety-102154248568131">brixiety</a>
          </li>
          <li>
            Instagram:{" "}
            <a href="https://www.instagram.com/brixiety.comic/">
              @brixiety.comic
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/BrixietyComic">BrixietyComic</a>
          </li>
          <li>
            Reddit:{" "}
            <a href="https://old.reddit.com/user/Brixiety-Comic/overview">
              Brixiety-Comic
            </a>
          </li>
          <li>
            Tumblr: <a href="https://brixiety.tumblr.com/">brixiety</a>
          </li>
          <li>
            email:{" "}
            <a href="mailto:brixiety.comic@gmail.com">
              brixiety.comic@gmail.com
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Socials;
