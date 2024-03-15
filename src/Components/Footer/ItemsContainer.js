import Item from "./Item";
import { TexasWebcoders, SERVICES, QUICKLINKS, USAHeadOffice } from "./Menus";
import FLogo from '../../Images/footer-flag-01.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={TexasWebcoders} title="Texas Webcoders" />
      <Item Links={SERVICES} title="SERVICES" />
      <Item Links={QUICKLINKS} title="QUICK LINKS" />
      <div className="space-y-4">
        <h1>USA Head Office</h1>
        <div className="flex items-center space-x-2">
          <img src={FLogo} className="h-8" />
          <p className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">
            2015 Dressage Ln, Tyler, TX 75703, USA
          </p>
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt color="#0070b8" />
            <p className="text-base">+1 903-466-0144</p>
          </div>
          <div className="flex items-center space-x-2">
            <IoMail color="#0070b8" />
            <p className="text-base">info@texaswebcoders.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;