import React from "react";
import "./logo.svg";
import Navigation from "./Navbar";
import Datab from "./Pages/datab";
import Edit from "./Edit";
import Foot from "./Footer";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="nadpis">
          <h3 style={{ fontfamily: "Candal" }}>
            Všetko, čo ste chceli vedieť o vašej budúcej dovolenke.{" "}
          </h3>
          <br />
          <h3>Bez prikrášlení.</h3>
        </div>
        <Datab />
        <div />
        <Foot />
      </React.Fragment>
    );
  }
}

export default Page;
