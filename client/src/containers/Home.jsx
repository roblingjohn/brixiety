import React, { Component } from "react";
import ComicDisplay from "../components/ComicDisplay";
import comicData from '../assets/comicData/comicData'

class Home extends Component {
  render() {
    return (
      <div>
        <ComicDisplay id={comicData.length} />
      </div>
    );
  }
}

export default Home;
