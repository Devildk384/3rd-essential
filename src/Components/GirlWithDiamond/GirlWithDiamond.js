/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import GirlWithDiamondText from "../GirlWithDiamondText/GirlWithDiamondText";
import "./GirlWithDiamond.scss";

export default class GirlWithDiamond extends React.Component {
  render() {
    return (
      <div className='girlwithdiamond'>
        <GirlWithDiamondText />
      </div>
    );
  }
}
