/** @format */

import React from "react";
import "./DiamondGirlLogo.scss";
import logoSvg from "../../Assets/logo.2b1dc451.svg";

function DiamondGirlLogo({ show }) {
  console.log(show);
  return (
    <div className={show ? "diamondgirllogo open" : "diamondgirllogo"}>
      <img style={{ height: "300px", width: "300px" }} src={logoSvg} alt='' />
    </div>
  );
}

export default DiamondGirlLogo;
