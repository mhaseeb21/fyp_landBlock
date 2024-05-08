import React, { useEffect, useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import axios from 'axios';

const MarketPlace = () => {
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
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Property Transfer"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        




 <div className="flex-1 flex items-center justify-center">
          <div className="w-3/4">
            <form className="mt-8" >
            <div className="form-group">
                <label htmlFor="ownerName">New Owner Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerName"
                  name="ownerName"
                  placeholder=""
        
                />
              </div>
              <div className="form-group">
                <label htmlFor="">New Owner User Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Property ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="subArea"
                  name="subArea"
                  placeholder=""
                />
              </div>
              <button type="submit" className="btn btn-primary text-dark mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>



      </div>
    </div>
  );
};

export default MarketPlace;
