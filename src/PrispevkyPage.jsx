import React from "react";
import Navigation from "./Navbar";
import Edit from "./Edit";

export default class PrispevkyPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>Hello from PrispevkyPage</div>
        <Edit />
      </div>
    );
  }
}
