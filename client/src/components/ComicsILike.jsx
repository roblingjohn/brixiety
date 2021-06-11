import React, { Component } from "react";

class ComicsILike extends Component {
  comicList = [
    { comicName: "Catana Comics", url: "https://catanacomics.com/" },
    {
      comicName: "Extra Fabulous Comics",
      url: "https://extrafabulouscomics.com/",
    },
    { comicName: "Perry Bible Fellowship", url: "https://pbfcomics.com/" },
    { comicName: "Sarah's Scribbles", url: "https://sarahcandersen.com/" },
    {
      comicName: "Saturday Morning Breakfast Cereal",
      url: "https://www.smbc-comics.com/",
    },
    {
      comicName: "Toothpaste for Dinner",
      url: "http://www.toothpastefordinner.com/",
    },
    { comicName: "webcomic name", url: "https://webcomicname.com/" },
    { comicName: "xkcd", url: "http://xkcd.com" },
  ];

  render() {
    return (
      <ul className="pageText">
        {this.comicList.map((comic) => (
          <li>
            <a href={comic.url} target="_blank" rel="noopener noreferrer">
              {comic.comicName}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default ComicsILike;
