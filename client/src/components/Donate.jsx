import React, { Component } from "react";

class Donate extends Component {
  state = {
    display: true,
  };

  leaveMeAlone = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <>
        {this.state.display && (
          <div className="donate">
            If you enjoy this comic, please consider{" "}
            <a
              href="https://www.buymeacoffee.com/brixiety"
              target="_blank"
              rel="noopener noreferrer"
            >
              donating
            </a>
            .
            <br />
            <span className="leaveMeAlone" onClick={this.leaveMeAlone}>
              Got it, leave me alone!
            </span>
          </div>
        )}
      </>
    );
  }
}

export default Donate;
