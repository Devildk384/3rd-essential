/** @format */

import React from "react";
import CertificateText from "../CertificateText/CertificateText";
import "./Certificate.scss";

export default class Certificate extends React.Component {
  render() {
    return (
      <div className='certificate'>
        <CertificateText />
      </div>
    );
  }
}
