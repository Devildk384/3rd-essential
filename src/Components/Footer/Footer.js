/** @format */

import React from "react";
import "./Footer.scss";
import titleLogo from "../../Assets/logo.2b1dc451.svg";
import fbLogo from "../../Assets/facebook.2645f640.svg";
import pinLogo from "../../Assets/pinterest.5e3b1b73.svg";
import twLogo from "../../Assets/twitter.836e8b74.svg";
import lkdlogo from "../../Assets/linkedin.179a7147.svg";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__main'>
        <div className='footer__main-social'>
          <div className='footer__main-social-title'>
            <img src={titleLogo} alt='' />
          </div>
          <div className='footer__main-social-logo'>
            <ul>
              <li>
                <a href='fb.com'>
                  <img src={fbLogo} alt='' />
                </a>
              </li>
              <li>
                <a href='fb.com'>
                  <img src={pinLogo} alt='' />
                </a>
              </li>{" "}
              <li>
                <a href='fb.com'>
                  <img src={twLogo} alt='' />
                </a>
              </li>{" "}
              <li>
                <a href='fb.com'>
                  <img src={lkdlogo} alt='' />
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__main-social-address'>
            <p>213 S 11th St. Boise, ID 83702</p>
            <a href='tel:(208) 853-661'>(208) 853-661</a>
          </div>
        </div>
        <div className='footer__main-quickblog'>
          <div className='footer__main-quickblog-title'>Quick Links</div>
          <div className='footer__main-quickblog-blogcart'>
            <div className='footer__main-quickblog-blogcart-blog'>
              <a href='/blog'>Blog</a>
              <a href='//wishbookaccount'>Wish Book Account</a>
            </div>
            <div className='footer__main-quickblog-blogcart-blog'>
              <a href='/blog'>Cart</a>
            </div>
          </div>
        </div>
        <div className='footer__main-hours'>
          <div className='footer__main-hours-title'>hours</div>
          <div className='footer__main-hours-time'>
            <div className='footer__main-hours-time-day'>
              <p>Monday-Friday</p>
              <p>
                <span>10:00AM to 5:00PM appointment only</span>
              </p>
            </div>
            <div className='footer__main-hours-time-day'>
              <p>Saturday</p>
              <p>
                <span>open</span>
              </p>
            </div>{" "}
            <div className='footer__main-hours-time-day'>
              <p>Sunday</p>
              <p>
                <span>open</span>
              </p>
            </div>
          </div>
          <div className='footer__main-hours-desc'>
            We are not accepting walk-ins at this time. We can accommodate later
            evening and weekend times by appointment.
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        Copyright © 2021 The Diamond Girls. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
