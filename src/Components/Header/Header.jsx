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
import "./Header.css";

const Header = ({value}) => {
  return (
    <>
      <div className="w-full">
        <Navbar
          className="mx-auto py-5 lg:px-[80px] border-2 border-[#0B0E12] "
          style={{ backgroundColor: Color.backGround, }}
        >
          <NavbarBrand href="#">
            <img
              src={Logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </NavbarBrand>
          <div className="flex md:order-2">
           <Button value={value}/>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink
              href="#"
              className="font-medium text-[18px] leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
            >
              Web XV
            </NavbarLink>
            <NavbarLink
              href="#"
              className="font-medium text-[18px] leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
            >
              All projects
            </NavbarLink>
            <NavbarLink
              href="#"
              className="font-bold text-[18px] leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
            >
              Community
            </NavbarLink>
            <NavbarLink
              href="#"
              className="font-bold text-[18px] leading-[28px] tracking-[-0.02em] !text-[#FFFFFF]"
            >
              About us
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>

    </>
  );
};
export default Header;
