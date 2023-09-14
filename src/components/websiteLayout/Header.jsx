import React from "react";
import WebsiteLogo from "../../assets/icons/WebsiteLogo.svg";

const Header = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <img src={WebsiteLogo} alt="logo" />
    </div>
  );
};

export default Header;
