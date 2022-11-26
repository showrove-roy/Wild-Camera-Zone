import React from "react";
import Advertised from "../Advertised/Advertised";
import HomeBanner from "../HomeBanner/HomeBanner";
import Infosection from "../Infosection/Infosection";
import ProductCategories from "../ProductCategories/ProductCategories";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Infosection></Infosection>
      <Advertised></Advertised>
      <ProductCategories></ProductCategories>
    </div>
  );
};

export default Home;
