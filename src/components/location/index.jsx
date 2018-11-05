import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.103793691335!2d-73.9918033841515!3d40.73774157932917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a222887949%3A0x7fa97785ae431822!2sABC+Kitchen!5e0!3m2!1sru!2sru!4v1541424024711"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        />
        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    );
  }
}

export default Location;
