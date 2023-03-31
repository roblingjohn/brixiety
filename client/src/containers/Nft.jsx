import React, { Component } from "react";
import NftDisplay from "../components/NftDisplay";
import TextInput from "../components/TextInput";
import BooleanInput from "../components/BooleanInput";
import moment from "moment";

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
  state = {
    currentSection: "gallery",
    selected: {},
  };

  componentDidMount() {
    const today = moment().utc().local().format("MM-DD");
    if (today !== "04-01") {
      window.alert(
        "This was an April Fool's joke. There are no actualy NFTs. The forms don't actually do anything, but you still probably shouldn't put anything in them anyway."
      );
    }
    document.addEventListener("contextmenu", this.disableRightClick);
  }

  handleSelect = (data) => {
    this.setState({
      currentSection: "payment",
      selected: data,
    });
  };

  handleSubmit = () => {
    this.setState({ currentSection: "loading" });
    document.removeEventListener("contextmenu", this.disableRightClick);
    setTimeout(() => {
      this.setState({ currentSection: "confirm" });
      setTimeout(() => {
        this.setState({ currentSection: "aprilFools" });
      }, 3000);
    }, 3000);
  };

  disableRightClick(event) {
    event.preventDefault();
    window.alert(
      "Warning: Saving NFTs without paying is a federal crime. Prosecutors will be punished to the full extent of the law."
    );
  }

  render() {
    return (
      <div className="container">
        {this.state.currentSection === "gallery" && (
          <div>
            <h1>Brixiety NFTs</h1>
            <div className="row m-auto">
              {this.nfts.map((nft) => (
                <NftDisplay
                  imgName={nft.imgName}
                  displayName={nft.displayName}
                  onSelect={(data) => {
                    this.handleSelect(data);
                  }}
                />
              ))}
            </div>
          </div>
        )}
        {this.state.currentSection === "payment" && (
          <div className="nft-payment">
            <div className="ml-3">
              <div className="w-25 m-auto">
                <img
                  src={require(`../assets/nft/${this.state.selected.imgName}.png`)}
                  className="nftImg"
                  alt={this.state.selected.displayName}
                />
              </div>
              <h4>
                Purchasing {this.state.selected.displayName} for $
                {this.state.selected.price}
              </h4>
              <h1>Payment Information</h1>
              <div className="row">
                <TextInput label="First Name" classProp="col-4" />
                <TextInput label="Last Name" classProp="col-4" />
              </div>
              <div className="row">
                <TextInput label="Bitcoin wallet address" classProp="col-8" />
              </div>
              <div className="row">
                <TextInput label="Bitcoin wallet password" classProp="col-8" />
              </div>
              <div className="row">
                <TextInput label="Credit Card Number" classProp="col-8" />
              </div>
              <div className="row">
                <TextInput label="Securiry Code" classProp="col-4" />
                <TextInput label="Expiration" classProp="col-4" />
              </div>
              <div className="row">
                <TextInput label="Address" classProp="col-8" />
              </div>
              <div className="row">
                <TextInput label="City" classProp="col-4" />{" "}
                <TextInput label="State" classProp="col-2" />
                <TextInput label="ZIP" classProp="col-2" />
              </div>
              <div className="row">
                <TextInput
                  label="Time next week when you won't be home"
                  classProp="col-8"
                />
              </div>
              <div className="row">
                <TextInput
                  label="Where in your house you leave your valuables"
                  classProp="col-8"
                />
              </div>
              <div className="row">
                <BooleanInput label="Do you have a dog?" classProp="col-4" />
              </div>
              <div className="row">
                <TextInput label="Mother's maiden name" classProp="col-8" />
              </div>
              <div className="row">
                <TextInput
                  label="Name of street you grew up on"
                  classProp="col-8"
                />
              </div>
              <div className="row">
                <TextInput label="First pet's name" classProp="col-8" />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  disabled={true}
                />
                <label for="agree">
                  {" "}
                  Check this box to opt out of subscription for automatic
                  payment for more Brixiety NFTs.
                </label>
              </div>
              <button
                onClick={() => {
                  this.handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {this.state.currentSection === "loading" && <h1>Loading...</h1>}
        {this.state.currentSection === "confirm" && (
          <div>
            <h1>Thank you for your purchase.</h1>
            <p>You will receive your NFT in 6-8 weeks.</p>
          </div>
        )}
        {this.state.currentSection === "aprilFools" && (
          <div>
            <div className="m-auto">
              <img
                src={require(`../assets/images/aprilfools.png`)}
                alt="April Fools!"
                className="aprilFoolsImg"
              />
            </div>
            <h1>April Fools!</h1>
            <p>
              I really hope you didn't enter any actual data in here. Don't
              worry, I wasted enough time getting this set up that I didn't have
              time to code the inputs to actually do anything. But happy April
              Fool's Day, and keep your ears open for some big news about
              Brixiety!
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Nft;
