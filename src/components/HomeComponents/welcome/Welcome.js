import React from "react";
import Button from "../../ReuseableComponents/button/Button";
import "./welcome.scss";

function Welcome() {
  return (
    <main className="welcome-content">
      <div className="welcome-header">
        <div className="left">
          <h1>WELCOME TO META TIGERS</h1>
        </div>
        <div className="right">
          <p>
            Welcome to Meta Tiger Society, where an exclusive collection of
            5,555 hand-drawn NFT tigers prowl the Ethereum blockchain...{" "}
          </p>
          <p>
            Celebrate the natural majesty of the tiger, support the protection
            of this critically endangered animal, and benefit from a range of
            incredible utilities by joining the Meta Tiger movement today!.
          </p>
          <Button title="JOIN DISCORD" />
        </div>
      </div>
      {/* <div className="welcome-img">
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
        <div className="img"></div>
      </div> */}
    </main>
  );
}

export default Welcome;
