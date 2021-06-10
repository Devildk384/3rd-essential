/** @format */

import React from "react";
import "./Diamond.scss";
import logoSvg from "../../Assets/logo.2b1dc451.svg";

function Diamond() {
  return (
    <div className='diamond'>
      <div className='diamond__text'>
        <img src={logoSvg} alt='' />
      </div>
    </div>
  );
}

export default Diamond;
