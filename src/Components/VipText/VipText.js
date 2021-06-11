/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import "./VipText.scss";

export default class VipText extends React.Component {
  render() {
    return (
      <div className='viptext'>
        <div className='viptext__text'>
          <h2>
            {" "}
            Schedule a vip <br></br> <span> viewing</span>
          </h2>

          <a href='/shop'>
            <Button style={{ color: "#ffffff", backgroundColor: "black" }}>
              Schedule an Appointment
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
