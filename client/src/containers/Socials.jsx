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
            Facebook:{" "}
            <a href="https://www.facebook.com/brixiety" target="_blank" rel="noreferrer noopener">
              brixiety
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a href="https://www.instagram.com/brixiety.comic/" target="_blank" rel="noreferrer noopener">
              @brixiety.comic
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a href="https://twitter.com/BrixietyComic" target="_blank" rel="noreferrer noopener">
              BrixietyComic
            </a>
          </li>
          <li>
            Reddit:{" "}
            <a href="https://reddit.com/user/Brixiety-Comic/" target="_blank" rel="noreferrer noopener">
              Brixiety-Comic
            </a>
          </li>
          <li>
            Tumblr:{" "}
            <a href="https://brixiety.tumblr.com/" target="_blank" rel="noreferrer noopener">
              brixiety
            </a>
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
