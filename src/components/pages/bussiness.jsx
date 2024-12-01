import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import productIcon from "../../assets/ourChannels3.png"; // Replace with actual paths
import laptop from "../../assets/laptop.png";

const BusinessHelp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with animations repeating
  }, []);

  return (
    <div
      style={{ background: "#FFA502" }}
      className="h-[1020px] relative items-center flex flex-col"
    >
      {/* Title */}
      <h1
        data-aos="fade-up"
        className="text-7xl font-light text-center mt-8 mb-6"
      >
        How We Can Help Your Business?
      </h1>

      {/* Background Image */}
      <img
        data-aos="zoom-in"
        src={laptop}
        alt="Promote Your Product"
        className="h-auto w-full mt-6 mb-2"
      />

      {/* Icons Section */}
      <div
        data-aos="fade-up"
        className="flex justify-center absolute top-60 items-center px-6 mb-8"
      >
        {/* Promote Your Product */}
        <div className="flex justify-center flex-col items-center">
          <img
            src={productIcon}
            alt="Promote Your Product"
            className="h-auto w-full mb-2"
          />
        </div>
      </div>

      {/* Text Sections with Animation */}
      <div className="flex relative text-3xl mt-64 w-4/5 space-x-10 justify-evenly">
        {/* Promote Your Product */}
        <div
          data-aos="fade-right"
          className="absolute left-36 flex flex-col items-center"
        >
          <p className="text-center text-xxl font-light">Promote Your</p>
          <p className="text-center text-5xl">Product</p>
        </div>

        {/* Promote Your Service */}
        <div
          data-aos="fade-up"
          className="absolute right-50 flex flex-col items-center"
        >
          <p className="text-center text-xxl font-light">Promote Your</p>
          <p className="text-center text-5xl">Service</p>
        </div>

        {/* Promo and L Bands */}
        <div
          data-aos="fade-left"
          className="absolute right-44 flex flex-col items-center"
        >
          <p className="text-center text-xxl font-light">PROMO AND</p>
          <p className="text-center text-5xl">L BANDS</p>
        </div>
      </div>

      {/* Description */}
      <div
        data-aos="fade-in"
        className="absolute bottom-4 text-center px-4"
      >
        <p className="text-lg mt-8 leading-relaxed">
          Join us as we continue to redefine digital journalism, one story at a
          time.
        </p>
      </div>
    </div>
  );
};

export default BusinessHelp;
