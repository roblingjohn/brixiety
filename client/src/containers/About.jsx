import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>Brixiety</h1>
        <h4>Because LEGO is (maybe slightly) Cheaper Than Therapy</h4>
        <p className="pageText">
          Hi, I'm John. I'm in my early thirties and I live in Atlanta with my
          wife and three wonderful cats. I collected LEGO as a kid, but then in
          middle school I stopped because I thought I was too old for it. I
          always looked back on LEGO with yearning, lamenting the fact that I
          was "too old" for it. Then, in my mid-twenties, I decided to buy one
          LEGO set, just for nostalgia's sake. That snowballed, and now I have
          spent a ridiculous amount of money on plastic building toys.
        </p>
        <p className="pageText">
          I'm also a fan of comics. I had some ideas for comics to make about my
          struggles with anxiety, but I can't draw to save my life. Then I
          realized I could marry the two interests and thus, Brixiety was born.
          And now you're looking at my terrible comics on this horribly coded
          site. Why are you still here?
        </p>
      </div>
    );
  }
}

export default About;
