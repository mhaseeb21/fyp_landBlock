import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import axios from 'axios';

const CustomerManagement = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message[]
  const [userId, setUserId] = useState("");

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const [postal_address, setPostal_address] = useState("");
  const [city, setCity] = useState("");
  const [verificationDocument, setVerificationDocument] = useState("");
  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");

  const handleSubmit = (e) => {
    const userId = localStorage.getItem("authToken");
    setUserId(userId)
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }
    e.preventDefault();
    axios.post('http://localhost:5000/kyc', {
      userId,
      postal_address,
      city,
      verificationDocument,
      frontImage,
      backImage
    })
    .then(result => {
      console.log(result);
      setSuccessMessage("Form submitted successfully.");
      // Clear form fields after successful submission
      setPostal_address("");
      setCity("");
      setVerificationDocument("");
      setFrontImage("");
      setBackImage("");
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="flex">
      <div className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${showMenu ? "" : "hidden"} lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"User KYC"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />

        <div className="flex-1 flex items-center justify-center">
          <div className="w-3/4">
            <form className="mt-8" onSubmit={handleSubmit}>
              {/* Display success message */}
              {successMessage && <div className="text-green-600">{successMessage}</div>}
              <div className="form-group">
                <label htmlFor="address">Enter Your postal address</label>
                <input
                  type="text"
                  className="form-control"
                  id="postal_address"
                  name="postal_address"
                  placeholder="postal_address"
                  value={postal_address}
                  onChange={(e) => setPostal_address(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="verificationDocument">Verification Document</label>
                <select
                  className="form-control"
                  id="verificationDocument"
                  name="verificationDocument"
                  value={verificationDocument}
                  onChange={(e) => setVerificationDocument(e.target.value)}>
                  <option value="">Select Document</option>
                  <option value="National ID">National ID</option>
                  <option value="Driving license">Driving License</option>
                  <option value="Passport">Passport</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label htmlFor="frontImage">Front Image</label><br/>
                <input
                  type="file"
                  className="form-control-file"
                  id="frontImage"
                  name="frontImage"
                  value={frontImage}
                  onChange={(e) => setFrontImage(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="backImage">Back Image</label><br/>
                <input
                  type="file"
                  className="form-control-file"
                  id="backImage"
                  name="backImage"
                  value={backImage}
                  onChange={(e) => setBackImage(e.target.value)}
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

export default CustomerManagement;
