/** @format */

import React from "react";
import FilterSideDrawerToggleButton from "../../FilterSide/FilterSideSideDrawer/FilterSideDrawerToggleButton";

function HeaderButton({ isOpen, drawerClickHandler }) {
  return (
    <FilterSideDrawerToggleButton isOpen={isOpen} click={drawerClickHandler} />
  );
}

export default HeaderButton;
