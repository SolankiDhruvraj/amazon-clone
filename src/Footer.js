import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-main">
      <div className="top">
        <label htmlFor="imgLogo">Back to top</label>{" "}
      </div>
      <hr className="hr-tag" />
      <div className="content">
        <div className="firstList footer-content-margin">
          <strong> Get to Know Us</strong>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li> Amazon Cares</li>
            <li>Gift a Smile</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="secondList footer-content-margin">
          <strong>Connect with Us</strong>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="thirdList footer-content-margin">
          <strong>Make Money with Us</strong>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li> Become an Affiliate</li>
            <li> Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li> Amazon Pay on Merchants</li>
          </ul>
        </div>

        <div className="fourthList footer-content-margin">
          <strong> Let Us Help You</strong>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footer-last">
        <div>
          Conditions of Use & Sale&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Interest-Based Ads
        </div>
        <div> © 1996-2022,Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
}

export default Footer;
