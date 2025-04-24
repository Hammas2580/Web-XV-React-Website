import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../../assets/Images/Logo.png";
import { Color } from "../../assets/Colors/Color";
import "./Header.css"

const Header = () => {
  return (
    <div className="w-full">
      <Navbar
        className="mx-auto lg:px-[80px]"
        style={{ backgroundColor: Color.backGround }}
      >
        <NavbarBrand href="#">
          <img
            src={Logo}
            className="mr-3 h-6 sm:h-9 w-[117px]"
            alt="Flowbite React Logo"
          />
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button className="w-[108px] h-[48px] rounded-[8px] font-medium text-[16px] my_btn text-[#335DD2] text-[#FFFFFF]">REGISTER</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink
            href="#"
            className="font-medium text-lg leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
          >
            Web XV
          </NavbarLink>
          <NavbarLink
            href="#"
            className="font-medium text-lg leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
          >
            All projects
          </NavbarLink>
          <NavbarLink
            href="#"
            className="font-bold text-lg leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
          >
            Community
          </NavbarLink>
          <NavbarLink
            href="#"
            className="font-bold text-lg leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
          >
            About us
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
    
  );
};
export default Header;
