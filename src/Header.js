import React from "react";
import "./Header.css";
import "./subNavBar.css"
function Header() {
  return (
    <>
      <div className="navBar">
        <img
          src={require("./AmazonLogo1.png")}
          alt="Img not available"
          className="logoimg" id="imgLogo"
        />
        <div className="search">
          <input type="text" className="searchinput" placeholder="Search for products, Brand & More"/>
          <div className="searchiconbg">
            <img
              src={require("./searchicon3.png")}
              alt=""
              className="searchicon"
            />
          </div>
        </div>
        <div className="options">
          <div className="signin">
            <p> Hello, sign in </p>
            <p>
              <b>Account & Lists</b>
            </p>
          </div>
          <div className="ordersandretuns">
            <p>Returns</p>
            <p>
              <b>& Orders</b>
            </p>
          </div>
          <div className="cart">
            <img src={require("./shopcart1.png")} alt="" className="cart" />
            <span className="cartName">
              <b>Cart</b>
            </span>
          </div>
        </div>
      </div>
      <div className="subNavBar">
      <ul>
        <li>All</li>
        <li>Sell</li>
        <li>Best Sellers</li>
        <li>Mobiles</li>
        <li>Books</li>
        <li>Customer Service</li>
        <li>Today's Deal</li>
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Prime</li>
        <li>New Releases</li>
        <li>Home & Kichen</li>
        <li>Amazon Pay</li>
        <li>Computers</li>
        <li>Coupons</li>
      </ul>
      </div>
      {/* <Slider/> */}
     {/* <Home/> */}
    </>
  );
}

export default Header;
