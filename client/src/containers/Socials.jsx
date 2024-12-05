import React, { Component } from "react";

class Socials extends Component {
  componentDidMount() {
    document.title = "Brixiety | Socials";
  }
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
            <strong>
              Donate at{" "}
              <a
                href="https://www.buymeacoffee.com/brixiety"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Me a Coffee
              </a>
            </strong>
          </li>
          <li>
            email:{" "}
            <a href="mailto:brixiety.comic@gmail.com">
              brixiety.comic@gmail.com
            </a>
          </li>
          <li>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/brixiety"
              target="_blank"
              rel="noreferrer noopener"
            >
              brixiety
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/brixiety.comic/"
              target="_blank"
              rel="noreferrer noopener"
            >
              @brixiety.comic
            </a>{" "}
            {" | "}{" "}
            <a
              href="https://www.instagram.com/john.brixiety/"
              target="_blank"
              rel="noreferrer noopener"
            >
              @john.brixiety
            </a>{" "}
            {" (non-comic LEGO stuff)"}
          </li>
          <li>
            Bluesky:{" "}
            <a
              href="https://bsky.app/profile/brixiety.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              @brixiety.com
            </a>
          </li>

          <li>
            Reddit:{" "}
            <a
              href="https://reddit.com/r/brixiety/"
              target="_blank"
              rel="noreferrer noopener"
            >
              /r/brixiety
            </a>
          </li>
          <li>
            Imgur:{" "}
            <a
              href="https://imgur.com/user/brixiety"
              target="_blank"
              rel="noreferrer noopener"
            >
              brixiety
            </a>
          </li>
          <li>
            YouTube:{" "}
            <a
              href="https://www.youtube.com/channel/UCSdVQTD0VmEh0bsws6H5Rag/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Brixiety Studios
            </a>{" "}
            (coming soon!)
          </li>
          
          <li>
            Tumblr:{" "}
            <a
              href="https://brixiety.tumblr.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              brixiety
            </a>{" "}
            (defunct)
          </li>
          <li>
            Twitter:{" "}
            <a
              href="https://twitter.com/BrixietyComic"
              target="_blank"
              rel="noreferrer noopener"
            >
              @BrixietyComic
            </a>{" "}
            (defunct)
          </li>
        </ul>
      </div>
    );
  }
}

export default Socials;
