import React, { useState } from "react";
import BookingModal from "../../../Components/BookingModal/BookingModal";
import Advertised from "../Advertised/Advertised";
import HomeBanner from "../HomeBanner/HomeBanner";
import Infosection from "../Infosection/Infosection";
import JustForYou from "../JustForYou/JustForYou";
import ProductCategories from "../ProductCategories/ProductCategories";

const Home = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Infosection></Infosection>
      <Advertised setSelectProduct={setSelectProduct}></Advertised>
      <ProductCategories></ProductCategories>
      <JustForYou setSelectProduct={setSelectProduct}></JustForYou>
      {selectProduct && (
        <BookingModal
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}></BookingModal>
      )}
    </div>
  );
};

export default Home;
