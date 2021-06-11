/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import VintageText from "../VintageText/VintageText";
import "./Vintage.scss";

export default class Vintage extends React.Component {
  render() {
    return (
      <div className='vintage'>
        <VintageText />
      </div>
    );
  }
}
