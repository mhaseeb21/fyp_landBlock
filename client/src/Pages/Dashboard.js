import React, { useEffect, useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import Map from "./Map";
import Card from "../Components/Dashboard-card";
import { reedem, service, users, revenue } from "../Assets/index";
import ChartComponent from "../Components/Chart";
import axios from 'axios';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [users, setUsers] = useState([]);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("authToken");
        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        console.log(response);
        setUsers([response.data.user]); // Accessing user from the nested structure
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div className={`w-1/4 h-full bg-gray-200 ${showMenu ? "" : "hidden"} lg:block`}>
          <Menubar />
        </div>
        <div className="flex-1 sm:relative">
          <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
          <div className="h-16 bg-white shadow-md">
            <Navbar pagename={"Dashboard"} />
          </div>
          <div className="flex flex-wrap justify-between mt-10 mx-4 sm:justify-start">
      {users.map(user => (
        <div key={user._id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4">
          <Card
            title={user.name}
            subtitle={user.email}
            // Add more fields as needed
          />
        </div>
      ))}
    </div>
          <div className="mt-8 mx-4">
            <table className="table-auto border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Verified</th>
                  <th className="border border-gray-300 p-2"><i class="bi bi-patch-check"></i></th>
                </tr>
              </thead>
              <tbody>
               
                  <tr>
                    <td className="border border-gray-300 p-2">Address</td>
                    <td className="border border-gray-300 p-2">Seecs h12 nust</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">City</td>
                    <td className="border border-gray-300 p-2">Islamabad</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Properties Owned</td>
                    <td className="border border-gray-300 p-2">0</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
