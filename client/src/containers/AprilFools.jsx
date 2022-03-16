import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AprilFools = () => {
  useEffect(() => {
    document.title = "Brixiety | April Fools!";
  }, []);
  return (
    <div className="container">
      <h1>APRIL FOOLS!</h1>
      <img
        className="aprilFoolsImg"
        alt="April Fools!"
        src={require("../assets/images/aprilfools.png")}
      />
      <p className="pageText">
        Ha! I sure fooled you! You were expecting a poorly made LEGO webcomic,
        but instead you got Brixiety! Man, you certainly fell for my ruse!
      </p>
      <p className="pageText">
        Okay, you're right. It wasn't actually that great. It was terrible like
        everything else I make. I'm sorry I wasted your time. If you want to see
        actual LEGO-based comics that aren't intentionally poorly done, click{" "}
        <Link to="/comic/12">here</Link>.
      </p>
    </div>
  );
};

export default AprilFools;
