import React, { useState, useEffect } from "react";
import Web3 from "web3";
import ABI from "../Components/ABI.json"; // Assuming you have stored contract ABI in ABI.json

const PropertyRegistration = () => 
{
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState({
    propertyAddress: "",
    propertyOwnerName: "",
    ownerAddress: "",
  });

  useEffect(() => {
    // Initialize Web3 and set contract instance
    const initWeb3 = async () => {
      try {
        // Connect to MetaMask
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3);

          // Get contract instance
          const contract = new web3.eth.Contract(
            ABI,
            "0xA23C72C419b9BC38cEFbF683a0e6F9D2B52b148F"
          );
          setContractInstance(contract);
        } else {
          console.error("MetaMask extension not detected");
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    };

    initWeb3();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contractInstance.methods
        .registerProperty(
          propertyDetails.propertyAddress,
          propertyDetails.propertyOwnerName,
          propertyDetails.ownerAddress
        )
        .send({ from: window.ethereum.selectedAddress });
      console.log("Property registered successfully!");
    } catch (error) {
      console.error("Error registering property:", error);
    }
  };

  return (
    <div class="container">
  <h2>Property Registration</h2>
  <form onSubmit={handleSubmit}>
    <div class="mb-3">
      <label for="propertyAddress" class="form-label">Property Address:</label>
      <input
        type="text"
        class="form-control"
        id="propertyAddress"
        name="propertyAddress"
        value={propertyDetails.propertyAddress}
        onChange={handleChange}
      />
    </div>
    <div class="mb-3">
      <label for="propertyOwnerName" class="form-label">Property Owner Name:</label>
      <input
        type="text"
        class="form-control"
        id="propertyOwnerName"
        name="propertyOwnerName"
        value={propertyDetails.propertyOwnerName}
        onChange={handleChange}
      />
    </div>
    <div class="mb-3">
      <label for="ownerAddress" class="form-label">Owner Address:</label>
      <input
        type="text"
        class="form-control"
        id="ownerAddress"
        name="ownerAddress"
        value={propertyDetails.ownerAddress}
        onChange={handleChange}
      />
    </div>
    <button style={{color:"black"}} type="submit" class="btn btn-primary">Register Property</button>
  </form>
</div>

  );
};

export default PropertyRegistration;















