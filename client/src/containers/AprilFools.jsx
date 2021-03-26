import React from "react";
import { Link } from "react-router-dom";

const AprilFools = () => {
  return (
    <div className="container">
      <h1>APRIL FOOLS!</h1>
      <p className="pageText">
        Ha! I sure fooled you! 'Twas I who made that poorly-done comic. Man, you
        certainly fell for my ruse...
      </p>
      <p className="pageText">
        You're right. It wasn't actually that great. It was terrible like
        everything else I make. I'm sorry I wasted your time. If you want to see
        actual LEGO-based comics that aren't intentionally poorly done, click{" "}
        <Link to="/comic/12">here</Link>.
      </p>
    </div>
  );
};

export default AprilFools;
