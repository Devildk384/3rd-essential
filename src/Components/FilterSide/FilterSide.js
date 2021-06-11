/** @format */

import React from "react";
import { useState } from "react";
import DiamondGirlLogo from "../DiamondGirlLogo/DiamondGirlLogo";
import Diamond from "../DiamonGirl/Diamond";
import HeaderButton from "../Header/HeaderButton/HeaderButton";
import FilterSideBackdrop from "./FilterSideBackdrop/FilterSideBackdrop";
import FilterSideSideDrawer from "./FilterSideSideDrawer/FilterSideSideDrawer";

const FilterSide = () => {
  const [sideDrawer, sideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    sideDrawerOpen((sideDrawer) => !sideDrawer);
  };
  const backdropClickHandler = () => sideDrawerOpen(false);

  return (
    <>
      <HeaderButton
        isOpen={sideDrawer}
        drawerClickHandler={drawerToggleClickHandler}
      />

      <FilterSideSideDrawer show={sideDrawer} />
      {sideDrawer && <FilterSideBackdrop click={backdropClickHandler} />}
    </>
  );
};

export default FilterSide;
