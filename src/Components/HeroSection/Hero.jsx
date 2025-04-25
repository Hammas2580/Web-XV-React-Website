import React from "react";
import BannerImages from "../../assets/Images/bannerImages.png";
import { Button } from "flowbite-react";


const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-4"
      style={{ backgroundImage: `url(${BannerImages})`, height: "90vh" }}
    >
      <div className="lg:col-span-6 ">
        <div className="px-[80px] mt-[120px]">
          <div>
            <h1 className="text-[80px] font-bold text-[#FFFFFF] leading-[80px]">Welcome to WebXV</h1>
          </div>
          <div className="mt-8">
            <p className="text-[#E2E6E7] text-[22px] font-normal">Meet cool WEB3 projects and connect with other crypto enthusiasts!</p>
          </div>
          <div className="mt-[30px]">
            <Button>Default</Button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6">hello</div>
    </div>
  );
};

export default Hero;
