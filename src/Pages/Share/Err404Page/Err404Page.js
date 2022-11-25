import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Err404Page = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='flex justify-center w-2/3 mx-auto items-center my-32 md:my-20'>
        <Player
          autoplay
          loop
          src='https://lottie.host/c1bac47d-d02d-4fec-b47f-6f13189e64cf/wn33WciJXn.json'></Player>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Err404Page;
