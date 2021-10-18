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
            <a href="https://www.buymeacoffee.com/brixiety" target="_blank">
              donating
            </a>
            .
            <br />
            <a className="leaveMeAlone" onClick={this.leaveMeAlone}>
              Got it, leave me alone!
            </a>
          </div>
        )}
      </>
    );
  }
}

export default Donate;
