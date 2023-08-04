import React from "react";
import Upsl from "../checkout/card/Upsl";

export default function Frame() {
  return (
    <div className="App">
      <h3>Iframes in React</h3>
      <iframe>
        <h1>UPSL frame</h1>
        <Upsl />
      </iframe>
    </div>
  );
}
