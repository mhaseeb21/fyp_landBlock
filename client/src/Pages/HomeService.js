import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import axios from "axios";
const HomeService = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };



  const [ownerName,setownerName] = useState()
  const [city,setcity] = useState()
  const [subArea,setsubArea] = useState()
  const [street_no,setstreet_no] = useState()
  const [plotNumber,setplotNumber] = useState()
  const [image1,setimage1] = useState()
  const [image2,setimage2] = useState()

  const handleSubmit = (e) =>{
    console.log("Hello")
    e.preventDefault()
    axios.post('http://localhost:5000/propertyRegister', {ownerName, city, subArea,street_no,plotNumber,image1,image2})
    .then(result=>console.log(result))
    .catch(err=> console.log(err))
  }












  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Register Your Property Here"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        


        <div className="flex-1 flex items-center justify-center">
          <div className="w-3/4">
            <form className="mt-8" onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="ownerName">Owner Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerName"
                  name="ownerName"
                  placeholder="ownerName"
                  onChange={(e) => setownerName(e.target.value)}
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
                  onChange={(e) => setcity(e.target.value)}
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
                  onChange={(e) => setsubArea(e.target.value)}
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
                  onChange={(e) => setstreet_no(e.target.value)}
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
                  onChange={(e) => setplotNumber(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="frontImage">Image 1</label><br/>
                <input
                  type="file"
                  className="form-control-file"
                  id="image1"
                  name="image1"
                  onChange={(e) => setimage1(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="backImage">Image 2</label><br/>
                <input
                  type="file"
                  className="form-control-file"
                  id="image2"
                  name="image2"
                  onChange={(e) => setimage2(e.target.value)}
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