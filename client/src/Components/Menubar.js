import React, { useState } from "react";
import {
  logo,
  dashboard,
  home,
  user,
  showcase,
  settings,
  role,
  market,
  content,
  customer,
  logout,
} from "../Assets/index";
import { useNavigate } from "react-router-dom";



const Menubar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate()

  const menuItems = [
    { name: "Profile", icon: dashboard, link: "/dashboard" },
    {
      name: "Map",
      icon: user,
      link: "/map",
    },
    {
      name: "KYC",
      icon: customer,
      link: "/customer-management",
    },
    {
      name: "Management",
      icon: showcase,
      link: "/showcase-management",
    },
    {
      name: "Registry Submission On BlockChain",
      icon: content,
      link: "/content-management",
    },
 

    {
      name: "Property Registration form",
      icon: home,
      link: "/register-property",
    },
    {
      name: "Market Place Management",
      icon: market,
      link: "/market-place",
    },
    { name: "Permission & Role", icon: role, link: "/role-management" },
    { name: "Settings", icon: settings, link: "/settings" },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove authToken from localStorage
    navigate('/')
  };

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-white fw-bold d-block">Land<span className="text-secondary">Block</span></h1>
      </div>
      <div className="flex-1 flex flex-col justify-between text-white">
        <div className="flex flex-col items-start pt-20">
          <span className="px-5 py-2 text-white">Menu</span>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`px-4 py-3 flex items-center ${
                selectedItem === item ? "text-lime-500" : "hover:text-gray"
              }`}
              onClick={() => handleItemClick(item)}>
              <img src={item.icon} alt={item.name} className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline-block">{item.name}</span>
            </a>
          ))}
        </div>
        <div
          className="flex items-center justify-center h-20 cursor-pointer text-red-500"
          onClick={() => {
            window.location.href = "/";
          }}>
          <img src={logout} alt="Logout" className="h-6 w-6 mr-2" />
          <div>
      {/* Other content */}
      <button
        className="hidden sm:inline-block text-red-500 text-2xl"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
