/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import "./FilterSideDrawerToggleButton.scss";

const FilterSide_DrawerToggleButton = ({ isOpen, click }) => {
  return (
    <button className='togglebutton'>
      <div
        onClick={click}
        className={isOpen ? "change toggle-button" : "toggle-button"}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      <div className='togglebutton__text'>Menu</div>
    </button>
  );
};

export default FilterSide_DrawerToggleButton;
