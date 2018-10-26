import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

import Zoom from "react-reveal/Zoom";

const VanueNFo = () => {
  return <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">

          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div className="vn_icon" style={{ background: `url(${icon_calendar})` }} />
                  <div className="vn_title">Event Data & Time</div>
                  <div className="vn_desc">1 November 2018 @10.00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div className="vn_icon" style={{ background: `url(${icon_location})` }} />
                  <div className="vn_title">Event location</div>
                  <div className="vn_desc">
                    345 Speer Street Okland, CA 8896
                  </div>
                </div>
              </div>
            </div>
         </Zoom>


        </div>
      </div>
    </div>;
};

export default VanueNFo;