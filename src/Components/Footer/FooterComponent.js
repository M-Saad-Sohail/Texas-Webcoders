import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import Img from "../../Images/Logo-01.png";

const FooterComponent = () => {
  return (
    <div className="bg-gray-900 text-white mt-20 px-4 sm:px-6 lg:px-8 py-10">
        <img src={Img} className="h-16 mb-4 sm:mb-0" alt="Logo" />
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center pt-2 text-gray-400 text-sm pb-8">
        <div className="flex space-x-3">
          <p className="text-gray-400 hover:text-teal-400 duration-300 cursor-pointer leading-6">Terms & Conditions</p>
          <span>-</span>
          <p className="text-gray-400 hover:text-teal-400 duration-300 cursor-pointer leading-6">Privacy Policy</p>
        </div>
        <SocialIcons Icons={Icons} />
      </div>
    </div>
  );
};

export default FooterComponent;
