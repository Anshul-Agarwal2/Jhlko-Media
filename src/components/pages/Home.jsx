import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import logo from "../../assets/Jhalko Media.png";
import people from "../../assets/people.png";
import haryana from "../../assets/haryana.png";
import rajasthan from "../../assets/rajasthan.png";
import churu from "../../assets/churu.png";
import jaipur from "../../assets/jaipur.png";
import jhunjhunu from "../../assets/jhunjhunu.png";
import hanumangarh from "../../assets/hanumangarh.png";
import sikar from "../../assets/sikar.png";
import marwar from "../../assets/marwar.png";
import mewar from "../../assets/mewar.png";
import jhodpur from "../../assets/jodhpur.png";

import map from "../../assets/ourChannels.png";
import Partners from "./Partners";
import BusinessHelp from "./bussiness";
import MapComponent from "./Geolocation";
import Slider from "./Slider";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with custom settings
  }, []);

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="flex">
        {/* Left Section: Follower Count */}
        <div
          className="bg-yellow-400 flex flex-col justify-center items-center text-center py-12 px-6 md:w-1/2"
          data-aos="fade-right"
        >
          <div className="flex absolute -top-16 left-2/3">
            <img src={logo} alt="Jhalko Media Logo" className="w-80" />
          </div>
          <div>
            <img src={people} alt="people logo" className="w-full h-auto" />
          </div>
          <div className="w-full flex justify-center flex-col">
            <h1 className="text-7xl leading-2 font-thin">OVER 10M Followers</h1>
            <p className="text-7xl mb-10 font-normal">Across All Platforms</p>
          </div>
          <div className="flex space-x-8 text-5xl">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>

        {/* Right Section: About Us */}
        <div
          className="bg-black text-white flex flex-col justify-start px-8 py-12 md:w-1/2"
          data-aos="fade-left"
        >
          <h2 className="text-2xl bg-yellow-400 text-black font-semibold rounded-lg px-6 py-3 shadow-md w-full text-center">
            About Us
          </h2>
          <p className="mt-6 text-6xl font-light text-gray-300 w-full">
            At Jhalko Media, we are proud to be a leading digital media platform
            with a growing community of over 10 million followers. Operating
            across Rajasthan, Haryana, and Delhi, our mission is to make news
            and stories accessible to everyone by presenting them in a language
            they understand and connect with.
          </p>
        </div>
      </div>

      {/* Our Channels Section */}
      <div className=" h-full bg-[#F5BE49] text-black flex flex-col items-center pt-14">
        <h1
          className="text-6xl font-bold uppercase text-center mb-6"
          data-aos="zoom-in"
        >
          Our Channels
        </h1>

        {/* Map Section */}

        <div className="w-full px-16">
          <div
            className="flex flex-row w-full justify-between"
            data-aos="zoom-in"
          >
            {/* Channel Logos */}
            <div className="" data-aos="fade-right">
              <img src={churu} alt="Delhi Logo" className="h-72 mx-auto" />
              <div className="flex absolute top-48 justify-center text-5xl">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>

            <div className="" data-aos="fade-left">
              <img
                src={rajasthan}
                alt="Rajasthan Logo"
                className="h-96 mx-auto"
              />
              <div className="flex absolute top-60 justify-center text-5xl">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>

            <div className="" data-aos="zoom-in">
              <img src={haryana} alt="Haryana Logo" className="h-96 mx-auto" />
              <div className="flex absolute top-60 justify-center text-5xl">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-row relative">
            {/* Text Container */}
            <div className="absolute bottom-10 left-9 max-w-[25%]">
              <h2 className="text-5xl md:text-7xl font-thin leading-tight">
                <span className="font-normal">Biggest</span> Network in
                Rajasthan
              </h2>
            </div>

            {/* Image Container */}
            <div className="w-full flex justify-center relative ">
              {/* First Image */}
              <img
                src={map}
                alt="Rajasthan Map"
                className="w-full max-w-[1000%] h-auto object-contain"
                data-aos="fade-up"
              />
              {/* Second Image */}
              <img
                src={jaipur}
                alt="Churu Map"
                className="w-[250px] h-[250px] absolute top-[400px] right-[500px] z-10"
                data-aos="fade-up"
              />
              <img
                src={hanumangarh}
                alt="Churu Map"
                className="w-[200px] absolute top-[150px] right-[650px] z-10"
                data-aos="fade-up"
              />
              <img
                src={jhunjhunu}
                alt="Churu Map"
                className="w-[200px] absolute top-[250px] right-[700px] z-10"
                data-aos="fade-up"
              />
              <img
                src={churu}
                alt="Churu Map"
                className="w-[200px] absolute top-[250px] right-[900px] z-10"
                data-aos="fade-up"
              />
              <img
                src={sikar}
                alt="Churu Map"
                className="w-[150px] absolute top-[380px] right-[650px] z-10"
                data-aos="fade-up"
              />
              <img
                src={jhodpur}
                alt="Churu Map"
                className="w-[100px]  absolute top-[490px] right-[800px] z-10"
                data-aos="fade-up"
              />
                <img
                src={marwar}
                alt="Churu Map"
                className="w-[150px] absolute top-[590px] right-[900px] z-10"
                data-aos="fade-up"
              />
                <img
                src={mewar}
                alt="Churu Map"
                className="w-[100px] absolute top-[590px] right-[700px] z-10"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-10 text-center" data-aos="fade-up">
          <p className="text-6xl text-justify font-normal mt-4">
            In Rajasthan, we have established the largest digital media network
            with 10 dedicated channels, offering comprehensive coverage of local
            and regional news. Our commitment to delivering authentic,
            grassroots reporting allows us to engage deeply with our audiences
            and address the issues that matter most to them.
          </p>
        </div>
      </div>

      {/* Partners and Business Help Sections */}
      {/* <Slider /> */}
      <Partners />
      <BusinessHelp />
      {/* <MapComponent /> */}
    </div>
  );
};

export default Home;
