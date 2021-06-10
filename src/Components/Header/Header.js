/** @format */

import React from "react";
import "./Header.scss";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className='header'>
      <nav className='header__nav'>
        <div className='header__nav-menu'>
          <div className='header__nav-menu-icon'>
            <button>
              <MenuIcon style={{ marginRight: "10px" }} />
              Menu
            </button>
          </div>
          <div className='header__nav-menu-searchicon'>
            <SearchIcon style={{ marginRight: "10px" }} />
            <input type='text' placeholder='Search' />
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

export default Header;
