import React, { useState, useEffect } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import axios from "axios";

const HomeService = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(null); // State to manage the message

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const [ownerName, setOwnerName] = useState("");
  const [userId, setUserId] = useState("");
  const [city, setCity] = useState("");
  const [subArea, setSubArea] = useState("");
  const [street_no, setStreet_no] = useState("");
  const [plotNumber, setPlotNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const position = await getCurrentLocation();
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      axios
        .post("http://localhost:5000/propertyRegister", {
          ownerName,
          userId,
          city,
          subArea,
          street_no,
          plotNumber,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          image1,
          image2,
        })
        .then((result) => {
          console.log(result);
          setMessage("Your form is submitted for admin approval.");
          // Clear form fields after submission
          setOwnerName("");
          setUserId("");
          setCity("");
          setSubArea("");
          setStreet_no("");
          setPlotNumber("");
          setLatitude("");
          setLongitude("");
          setImage1("");
          setImage2("");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("authToken");
        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/user/${userId}`
        );
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
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Register Your Property Here"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />

        <div className="flex-1 flex items-center justify-center">
          <div className="w-3/4">
            <form className="mt-8" onSubmit={handleSubmit}>
              {message && <p className="text-green-600">{message}</p>}
              <div className="form-group">
                <label htmlFor="userId">User Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  name="userId"
                  placeholder="userId"
                  value={users.map((user) => user._id)}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ownerName">Owner Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerName"
                  name="ownerName"
                  placeholder="ownerName"
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Sub Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="subArea"
                  name="subArea"
                  placeholder="subArea"
                  onChange={(e) => setSubArea(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Street No</label>
                <input
                  type="text"
                  className="form-control"
                  id="street_no"
                  name="street_no"
                  placeholder="street_no"
                  onChange={(e) => setStreet_no(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Plot Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="plotNumber"
                  name="plotNumber"
                  placeholder="plotNumber"
                  onChange={(e) => setPlotNumber(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="latitude">Latitude</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  name="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="longitude">Longitude</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  name="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="frontImage">Image 1</label>
                <br />
                <input
                  type="file"
                  className="form-control-file"
                  id="image1"
                  name="image1"
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="backImage">Image 2</label>
                <br />
                <input
                  type="file"
                  className="form-control-file"
                  id="image2"
                  name="image2"
                  onChange={(e) => setImage2(e.target.files[0])}
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

export default HomeService;
