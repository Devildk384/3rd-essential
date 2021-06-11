/** @format */

import React, { useState, useEffect } from "react";

import "./App.scss";
import Header from "./Components/Header/Header";
import Diamond from "./Components/DiamonGirl/Diamond";
import Footer from "./Components/Footer/Footer";
import ImADiamondGirl from "./Components/ImADiamondGirl/ImADiamondGirl";
import Collection from "./Components/Collection/Collection";
import Vintage from "./Components/Vintage/Vintage";
import GirlWithDiamond from "./Components/GirlWithDiamond/GirlWithDiamond";
import VintageText from "./Components/VintageText/VintageText";
import GirlWithDiamondText from "./Components/GirlWithDiamondText/GirlWithDiamondText";
import Certificate from "./Components/Certificate/Certificate";
import Vip from "./Components/Vip/Vip";
function App() {
  return (
    <div className='app'>
      <div className='app__headerDiamond'>
        <Header />
        <Diamond />
      </div>
      <Collection />
      <Vintage />
      <GirlWithDiamond />
      <Certificate />
      <Vip />
      <ImADiamondGirl />
      <Footer />
    </div>
  );
}

export default App;
