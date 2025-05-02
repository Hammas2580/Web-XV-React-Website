import React from "react";
import BannerImages from "../../assets/Images/bannerImages.png";
import { Button, TextInput } from "flowbite-react";
import Register from "../RegisterBtn/Register";

const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImages})`, minHeight: "90vh" }}
    >
      {/* Left Side Text */}
      <div className="lg:col-span-6 flex items-center justify-center px-5 lg:px-[80px] pt-[80px] lg:pt-[120px]">
        <div>
          <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold text-white leading-tight">
            Welcome to WebXV
          </h1>

          <p className="text-[#E2E6E7] text-[18px] sm:text-[20px] lg:text-[22px] font-normal mt-6">
            Meet cool WEB3 projects and connect with other crypto enthusiasts!
          </p>

          <div className="mt-6">
            {/* <Button className="w-full sm:w-[200px] h-[56px] bg-[#335DD2] rounded-[8px] text-white text-[18px]">
              REGISTER NOW
            </Button> */}
            <Register/>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="lg:col-span-6 flex justify-center items-center px-5">
        <form className="flex flex-col gap-4 w-full max-w-[480px] border-2 bg-[#0E151B] h-auto py-8 px-6 rounded-[24px] mt-8 lg:mt-[96px]">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] text-[#E2E6E7] font-medium text-center">
            Welcome back
          </h2>

          <TextInput id="email1" type="email" placeholder="Username or Email" required />
          <TextInput id="password1" type="password" placeholder="Password" required />

          <Button className="bg-[#335DD2] h-[56px] text-white text-[16px] font-medium cursor-pointer" type="submit">
            LOGIN
          </Button>

          <p className="text-[#E2E6E7] text-sm text-center">Forgotten your password?</p>
          <p className="text-[#E2E6E7] text-sm text-center">
            Don’t have an account? <span className="text-[#335DD2] cursor-pointer">Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Hero;
