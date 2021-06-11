/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import "./CertificateText.scss";

export default class CertificateText extends React.Component {
  render() {
    return (
      <div className='certificatetext'>
        <div className='certificatetext__text'>
          <h2>
            {" "}
            Diamond Girls <br></br> <span> Certifications</span>
          </h2>
          <p>
            The Diamond Girls is built on the promise that each diamond must not
            only meet your expectations but are also responsibly sourced. We
            will carefully inspect each diamond going beyond the technical
            qualities of the 4c’s to handpick your perfect stone and always keep
            your budget in mind. Whether our customers are diamond experts
            themselves or want no part of the science behind the purchase, we
            always go through the same 10 checkpoints for our clients.
          </p>
          <a href='/shop'>
            <Button style={{ color: "#ffffff", backgroundColor: "black" }}>
              Diamond Certifiaction
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
