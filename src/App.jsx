import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header.jsx";
import Featured from "./components/featured";
import VanueNFo from "./components/vanueNFo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing/";
import Location from "./components/location/index.jsx";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Element name="featured">
          <Featured />
        </Element>

        <Header />

        <Element name="vanueNfo">
          <VanueNFo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
