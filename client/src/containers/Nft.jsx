import React, { Component } from "react";
import NftDisplay from "../components/NftDisplay";

class Nft extends Component {
  nfts = [
    {
      imgName: "regular",
      displayName: "Brixiety Guy",
    },
    {
      imgName: "blond",
      displayName: "Blond",
    },
    {
      imgName: "mustache",
      displayName: "Mustache",
    },
    {
      imgName: "long",
      displayName: "Long Hair",
    },
    {
      imgName: "old",
      displayName: "Old",
    },
    {
      imgName: "suit",
      displayName: "Regular Suit",
    },
    {
      imgName: "naked",
      displayName: "Birthday Suit",
    },
    {
      imgName: "trex",
      displayName: "T-Rex Suit",
    },
    {
      imgName: "pizza",
      displayName: "Pizza Suit",
    },
    {
      imgName: "brick",
      displayName: "Brick Suit",
    },
    {
      imgName: "cop",
      displayName: "Police Officer",
    },
    {
      imgName: "fire",
      displayName: "Fire Fighter",
    },
    {
      imgName: "doctor",
      displayName: "Doctor",
    },
    {
      imgName: "construction",
      displayName: "Construction Guy",
    },
    {
      imgName: "chef",
      displayName: "Chef",
    },
    {
      imgName: "barista",
      displayName: "Barista",
    },
    {
      imgName: "crook",
      displayName: "Crook",
    },
    {
      imgName: "arctic",
      displayName: "Arctic",
    },
    {
      imgName: "spaceman",
      displayName: "Spaceman",
    },
    {
      imgName: "adventurer",
      displayName: "Adventurer",
    },
    {
      imgName: "pepper",
      displayName: "Dude with the Food",
    },
    {
      imgName: "pilot",
      displayName: "Rebel Pilot",
    },
    {
      imgName: "imperial",
      displayName: "Imperial Officer",
    },
    {
      imgName: "emperor",
      displayName: "Intrusive Thoughts",
    },
    {
      imgName: "hogwarts",
      displayName: "Wizard Student",
    },
    {
      imgName: "thor",
      displayName: "God of Thunder",
    },
    {
      imgName: "dustin",
      displayName: "Stranger Hat",
    },
    {
      imgName: "homer",
      displayName: "D'oh!",
    },
    {
      imgName: "tommy",
      displayName: "Oh hi!",
    },
  ];

  render() {
    return (
      <div>
        <h1>Brixiety NFTs</h1>
        <div className="row m-auto">
          {this.nfts.map((nft) => (
            <NftDisplay imgName={nft.imgName} displayName={nft.displayName} />
          ))}
        </div>
      </div>
    );
  }
}

export default Nft;
