/** @format */

import logo from "./logo.svg";
import "./App.scss";
import Header from "./Components/Header/Header";
import Diamond from "./Components/DiamonGirl/Diamond";
import Footer from "./Components/Footer/Footer";
import ImADiamondGirl from "./Components/ImADiamondGirl/ImADiamondGirl";

function App() {
  return (
    <div className='app'>
      <div className='app__headerDiamond'>
        <Header />
        <Diamond />
      </div>
      <ImADiamondGirl />
      <Footer />
    </div>
  );
}

export default App;
