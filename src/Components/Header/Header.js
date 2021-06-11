/** @format */

import React from "react";
import "./Header.scss";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import FilterSide from "../FilterSide/FilterSide";
export default class Header extends React.Component {
  state = {
    color: "",
    borderBottom: "",
    zIndex: "",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 10) {
      this.setState({
        color: "white",
        borderBottom: "1px solid #e6e6e6",
        zIndex: "10",
      });
    } else {
      this.setState({ color: "", borderBottom: "", zIndex: "" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div
        className='header'
        style={{
          background: this.state.color,
          borderBottom: this.state.borderBottom,
          zIndex: this.state.zIndex,
        }}
      >
        <nav className='header__nav'>
          <div className='header__nav-menu'>
            <div className='header__nav-menu-icon'>
              <FilterSide />
            </div>
            <div className='header__nav-menu-searchicon'>
              <SearchIcon style={{ marginRight: "10px" }} />
              <input
                style={{ background: this.state.color }}
                type='text'
                placeholder='Search'
              />
            </div>
          </div>

          <div className='header__nav-profile'>
            <PersonIcon style={{ marginRight: "20px" }} />
            <LocalMallIcon style={{ marginRight: "20px" }} />

            <a href='/'>
              <p>
                <span>vip</span>Appointment
              </p>
            </a>
            <a href='/'>
              <p>Contact Us</p>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
