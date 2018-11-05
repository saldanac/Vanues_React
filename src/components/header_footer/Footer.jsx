import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Footer extends Component {
  render() {
    return (
      <footer className="bck_red">
        <Fade delay={500}>
          <div className="font_righteous footer_logo_vanue">
            <div className="footer_copyright">
              The vanue 2019. All rights reserved.
            </div>
          </div>
        </Fade>
      </footer>
    );
  }
}

export default Footer;
