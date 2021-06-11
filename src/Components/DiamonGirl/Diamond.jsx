/** @format */

import React, { useState, useEffect } from "react";
import "./Diamond.scss";
import logoSvg from "../../Assets/logo.2b1dc451.svg";

import ScrollMagic from "scrollmagic";

export default class Diamond extends React.Component {
  state = {
    top: "",
    left: "",
    width: "",
    zIndex: "",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 10) {
      this.setState({
        top: "0",
        left: "40%",
        width: "300px",
        zIndex: "999",
      });
    } else {
      this.setState({ top: "", left: "", width: "", zIndex: "" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div id='my-sticky-element' className='diamond'>
        <div className='diamond__text change'>
          <img
            style={{
              top: this.state.top,
              left: this.state.left,
              width: this.state.width,
              zIndex: this.state.zIndex,
            }}
            src={logoSvg}
            alt=''
          />
        </div>
      </div>
    );
  }
}
