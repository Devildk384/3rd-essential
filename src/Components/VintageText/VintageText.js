/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import "./VintageText.scss";

export default class VintageText extends React.Component {
  render() {
    return (
      <div style={{ background: "transparent" }} className='vintagetext'>
        <h1>
          {" "}
          vintage <br></br> <span> & estate</span>
        </h1>
        <a href='/shop'>
          <Button style={{ color: "#ffffff", backgroundColor: "black" }}>
            Shop now
          </Button>
        </a>
      </div>
    );
  }
}
