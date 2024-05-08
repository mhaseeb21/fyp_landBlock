import React, { useState, useEffect } from "react";
import Web3 from "web3";
import LandblockABI from "./LandblockABI.json"; // Assuming you have stored contract ABI in LandblockABI.json

const PropertyRegistration = () => {
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState({
    propertyAddress: "",
    propertyOwnerName: "",
    ownerAddress: "",
  });
  const [ownerAddress, setOwnerAddress] = useState("");
  const [storedProperty, setStoredProperty] = useState(null);

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
            LandblockABI,
            "0x331bea6aFDb3e408a2461ECED35fA5832f968d87" // Replace with your contract address
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
          propertyDetails.propertyOwnerName
        )
        .send({ from: window.ethereum.selectedAddress });
      console.log("Property registered successfully!");
    } catch (error) {
      console.error("Error registering property:", error);
    }
  };

  const handleOwnerAddressChange = (e) => {
    setOwnerAddress(e.target.value);
  };

  const handleGetProperties = async (e) => {
    e.preventDefault();
    try {
      const propertyIds = await contractInstance.methods
        .getPropertiesByOwner(ownerAddress)
        .call();
      const properties = await Promise.all(
        propertyIds.map(async (propertyId) => {
          return await contractInstance.methods.properties(propertyId).call();
        })
      );
      setStoredProperty(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <div className="container">
      <h2>Property Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="propertyAddress" className="form-label">
            Property Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="propertyAddress"
            name="propertyAddress"
            value={propertyDetails.propertyAddress}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="propertyOwnerName" className="form-label">
            Property Owner Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="propertyOwnerName"
            name="propertyOwnerName"
            value={propertyDetails.propertyOwnerName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register Property
        </button>
      </form>

      <hr />

      <h2>Get Properties by Owner</h2>
      <form onSubmit={handleGetProperties}>
        <div className="mb-3">
          <label htmlFor="ownerAddress" className="form-label">
            Owner Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="ownerAddress"
            name="ownerAddress"
            value={ownerAddress}
            onChange={handleOwnerAddressChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Properties
        </button>
      </form>

      {storedProperty && (
        <div>
          <h3>Properties owned by {ownerAddress}</h3>
          <ul>
            {storedProperty.map((property, index) => (
              <li key={index}>
                <strong>Property ID:</strong> {property.id}<br />
                <strong>Address:</strong> {property.propertyAddress}<br />
                <strong>Owner Name:</strong> {property.propertyOwnerName}<br />
                <strong>Verified:</strong> {property.verified ? 'Yes' : 'No'}<br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyRegistration;
