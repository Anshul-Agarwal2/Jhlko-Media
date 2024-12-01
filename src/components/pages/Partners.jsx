import React from "react";
// import vMartLogo from "../../assets/vmart-logo.png"; // Replace with your actual paths
// import pcpLogo from "../../assets/pcp-logo.png";
// import pwLogo from "../../assets/pw-logo.png";
import partners from "../../assets/ourChannels2.png";

const Partners = () => {
  return (
    <div
      style={{ background: "#D5AA50" }}
      className="min-h-screen p-28 relative flex flex-col items-center px-6"
    >
      {/* Title */}
      <h1 className="text-8xl font-light uppercase text-center">
        Our Partners
      </h1>

      {/* Partners Section */}
      <div className="flex items-center gap-4 justify-center space-x-8">
        {/* V-Mart */}
        <div className="absolute top-0 text-center">
          <img
            src={partners}
            alt="V-Mart Logo"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className=" absolute bottom-10 text-center">
        <p className="text-7xl px-36 text-center font-light leading-2">
          Join us as we continue to redefine digital journalism, one story at a
          time.
        </p>
      </div>
    </div>
  );
};

export default Partners;
