import React, { Component } from "react";

class NftDisplay extends Component {
  componentDidMount() {
    this.setState({ price: Math.ceil(Math.random() * 30) * 500 });
  }
  state = {
    price: 0,
  };
  isPurchased = Math.random() > 0.7;
  render() {
    return (
      <div className="nftDisplay col-xl-3 col-lg-4 col-md-6">
          <img
            src={require(`../assets/nft/${this.props.imgName}.png`)}
            className="nftImg"
            alt={this.props.displayName}
          />
        <h4>{this.props.displayName}</h4>
        <h5>${this.state.price}</h5>
        <button
          className="nftButton"
          disabled={this.isPurchased}
          onClick={() => {
            this.props.onSelect({ ...this.props, price: this.state.price });
          }}
        >
          {this.isPurchased ? "Sold" : "Purchase"}
        </button>
      </div>
    );
  }
}

export default NftDisplay;
