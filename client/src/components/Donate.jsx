import React, { Component } from "react";

class Donate extends Component {
  state = {
    display: true,
  };
  render() {
    return (
      <div className="donate">
        <p>
          If you enjoy this comic, please consider{" "}
          <a href="https://www.buymeacoffee.com/brixiety" target="_blank">donating</a>.
        </p>
      </div>
    );
  }
}

export default Donate;
