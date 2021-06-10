/** @format */

import React, { useState, useEffect } from "react";
import "./ImADiamondGirl.scss";
import Carousel from "react-elastic-carousel";
import InstagramIcon from "@material-ui/icons/Instagram";
import axios from "axios";

function ImADiamondGirl() {
  const iii =
    "https://instagram.fbho5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c240.0.960.960a/s640x640/175878525_923041271805689_6687813648427099507_n.jpg?tp=1&_nc_ht=instagram.fbho5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=WeidIFj7rcMAX9yKXLS&edm=ABZsPhsBAAAA&ccb=7-4&oh=ed27a04016ce1694d154fc3cd6edb0f2&oe=60C954B4&_nc_sid=4efc9f";
  const [diamondGirl, setDiamondGirl] = useState("");
  const base_url = "https://apis.3rdessential.in/posts/get/imadiamondgirl";
  useEffect(() => {
    const fetchDiamondGirl = async () => await getAllApproveBlogList();
    fetchDiamondGirl();
  }, []);

  const getAllApproveBlogList = async () => {
    axios.get(`${base_url}`).then((response) => {
      console.log(response);
      if (response.data) {
        setDiamondGirl(response.data.data);
      } else {
        setDiamondGirl("");
      }
    });
  };

  const images =
    diamondGirl &&
    diamondGirl.map((image, idx) => (
      <div style={{ height: "200px", width: "200px" }} key={idx} className='ca'>
        <img
          style={{ height: "200px", width: "200px" }}
          src={image.display_url}
          alt='ssss'
        ></img>
      </div>
    ));

  return (
    <div className='imadiamondgirl'>
      <div className='imadiamondgirl__heading'>Diamond Girls Are PowerFul</div>
      <div className='imadiamondgirl__subheading'>
        <div className='imadiamondgirl__subheading-text'>
          <InstagramIcon style={{ marginRight: "10px" }} />
          DIAMOND GIRLS ON INSTAGRAM #IMaDiamondGirl
        </div>
      </div>
      <div className='imadiamondgirl__carousel'>{images}</div>
    </div>
  );
}

export default ImADiamondGirl;
