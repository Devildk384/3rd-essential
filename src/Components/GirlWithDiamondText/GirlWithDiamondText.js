/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import "./GirlWithDiamondText.scss";

export default class GirlWithDiamondText extends React.Component {
  render() {
    return (
      <div className='girlwithdiamondtext'>
        <div className='girlwithdiamondtext__text'>
          <h2>
            {" "}
            meet the <br></br> <span> Diamond girls</span>
          </h2>
          <p>
            It was 2009, We were in the middle of economic downfall and we had
            just put our boss in prison for embezzlement. We had no job. We both
            had families and had to make a decision, do we go to work for
            someone else or do we try to do it ourselves. We had both been in
            the industry together for 9 years and it is all we knew. So we each
            put $100.00 into an account and we started our company.
          </p>
          <a href='/shop'>
            <Button style={{ color: "#ffffff", backgroundColor: "black" }}>
              Shop now
            </Button>
          </a>
        </div>
      </div>
    );
  }
}
