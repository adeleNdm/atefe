import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import data from "../data.json";
import ScrollToTop from "react-scroll-up";

class UpIcon extends Component {
  state = {};
  render() {
    return (
      <div>
        <ScrollToTop showUnder={700}>
          <span
            style={{
              position: "fixed",
              bottom: 50,
              right: 30,
              cursor: "pointer",
              transitionDuration: "0.2s",
              transitionTimingFunction: "linear",
              transitionDelay: "0s",
            }}
          >
            <div style={{ width: "30px" }}>
              <img src={data.icons.up} onClick={() => console.log("im")} />
            </div>
            UP
          </span>
        </ScrollToTop>
      </div>
    );
  }
}
export default UpIcon;
