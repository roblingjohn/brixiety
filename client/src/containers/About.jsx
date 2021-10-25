import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComicsILike from "../components/ComicsILike";

class About extends Component {
  componentDidMount() {
    document.title = "Brixiety | About";
  }
  render() {
    return (
      <div className="container">
        <h1>Brixiety</h1>
        <h4>
          <i>Because LEGO is (maybe slightly) Cheaper Than Therapy</i>
        </h4>
        <h2>FAQ</h2>
        <h3 className="faqQ">What am I looking at here?</h3>
        <p>
          This is the website for Brixiety, my LEGO-based web comic. It's
          basically little slice-of-life vignettes, mostly related to my
          experiences with anxiety.
        </p>
        <h3 className="faqQ">Who are you?</h3>
        <p>
          My name is John. I'm in my early thirties and I live in Atlanta with
          my lovely wife and three wonderful cats.
        </p>
        <h3 className="faqQ">Why do you make comics using LEGO?</h3>
        <p>
          Well I wanted to make a relatable webcomic, but I can't draw to save
          my life. I realized I had thousands of dollars worth of LEGO sitting
          around doing nothing except providing me with dopamine, so I figured I
          could make comics by taking pictures of them.
        </p>
        <h3 className="faqQ">How do you pronounce "Brixiety"?</h3>
        <p>Brik-SY-eh-tee. It's a portmanteau of "brick" and "anxiety".</p>
        <h3 className="faqQ">Are those all real LEGO?</h3>
        <p>
          Yep! I'm a purist when it comes to LEGO, so everything I photograph is
          genuine LEGO parts from my collection that I have bought, either
          through standard retail or the secondary market. If you haven't
          collected LEGO in the past few years, you may be surpised by how
          intricate and detailed their parts and sets have become.
        </p>
        <h3 className="faqQ">Is that Emmet from The LEGO Movie?</h3>
        <p>
          The heads I use for the main Brixiety Guy are from Emmet minifigures.
          I use them because they offer a wide variety of expressions, and
          because their graphic design is based on the classic LEGO smiley head
          which is very iconic to the brand.
        </p>
        <h3 className="faqQ">
          Why is Brixiety Guy always smiling when he's clearly in distress?
        </h3>
        <p>Aren't we all, at a certain level?</p>
        <h3 className="faqQ">Do you make money off this?</h3>
        <p>
          This is just a side job right now, but if you'd like to donate, you
          can do so <a href="https://www.buymeacoffee.com/brixiety">here</a>. I
          don't have a Patreon or any perks set up for donors yet, but if the
          comic gets popular enough I may do so.
        </p>
        <h3 className="faqQ">Who built this terrible website?</h3>
        <p>
          I did! I built it from scratch using React.js.{" "}
          <span className="hidden">
            And if you're reading this, it means you're poking around in my
            HTML. If you or anyone you know of is looking to hire an entry-level
            web developer in the Atlanta area, you can email me at{" "}
            <a href="mailto:brixiety.comic@gmail.com">
              brixiety.comic@gmail.com
            </a>{" "}
            and I can send you my resume and whatnot.
          </span>
        </p>
        <h3 className="faqQ">
          Are you <Link to="/comic/30">doing okay</Link>? Some of these comics
          have me worried.
        </h3>
        <p>
          Yeah, I'm doing fine all things considered. While many of these comics
          are based on real life experiences, they are also exaggerated for
          comedic effect.
        </p>

        {/* <p className="pageText">
          Hi, I'm John. I'm in my early thirties and I live in Atlanta with my
          lovely wife and three wonderful cats. I collected LEGO as a kid, but then in
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
        </p> */}
        <h2>Other Comics I Like</h2>
        <p className="pageText">
          Here are some other comics I like. I have no affiliation with most of
          them, and I would be surprised if some of them had ever heard of me.
          Keep in mind even though I try to keep my comics PG, many of these are
          very much not so.
        </p>
        <ComicsILike />
      </div>
    );
  }
}

export default About;
