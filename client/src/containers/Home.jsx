import React, { Component } from "react";
import ComicDisplay from "../components/ComicDisplay";

class Home extends Component {
  render() {
    return (
      <div>
        <ComicDisplay id={1} />
      </div>
    );
  }
}

export default Home;
