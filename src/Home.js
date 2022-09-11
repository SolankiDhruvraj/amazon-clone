import React from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
import Product from "./Product";
import "./Home.css";
import "./Product";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          {/* <FaArrowLeft className="leftArrow" /> */}
          {/* <FaArrowRight className="rightArrow" /> */}
          <div className="bannerimgbox">
            <img src={require("./watch.webp")} alt="" className="bannerimg" />
          </div>
          <div className="home_row">
            <Product
              url="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg"
              title="Apple iPhone 12 (64GB) - Purple"
              rating={4}
              price="59,990"
            />
            <Product
              url="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81I3w4J6yjL._AC_UY327_FMwebp_QL65_.jpg"
              title="Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
              rating={4}
              price="6,999"
            />
          </div>
          <div className="home_row">
            <Product
              url="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/810KHyQ4WcL._AC_UY327_FMwebp_QL65_.jpg"
              title="Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)| Octa-core Helio G35 | 5000 mAh Battery"
              rating={3}
              price="8,499"
            />
            <Product
              url="https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UY327_FMwebp_QL65_.jpg"
              title="OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)
              "
              rating={4}
              price="18,999"
            />
            <Product
              url="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71KCwNV6MuL._AC_UY327_FMwebp_QL65_.jpg"
              title="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
              rating={4} price="11,990"
            />
          </div>
          <div className="home_row">
            <Product
              url="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81QqVNKWtML._AC_UY327_FMwebp_QL65_.jpg"
              title="realme narzo 50i (Mint Green, 4GB RAM+64GB Storage) - 6.5 inch Large Display | 5000mAh Battery"
              rating={3} price="8,499"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
