// PropertyList.js

import React, { useEffect, useState } from 'react';
import Web3 from 'web3'; // Import Web3 library
import LandblockABI from './contracts/LandblockABI.json'; // Import your contract ABI
import './PropertyList.css'; // Import CSS for styling

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable(); // Request account access
                const web3 = window.web3;
                const accounts = await web3.eth.getAccounts();

                // Get the deployed contract
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = LandblockABI.networks[networkId];
                const contract = new web3.eth.Contract(LandblockABI.abi, deployedNetwork && deployedNetwork.address);

                // Call the contract method to get properties by owner
                const ownerAddress = accounts[0]; // Use the first account for demonstration
                const propertyIds = await contract.methods.getPropertiesByOwner(ownerAddress).call();

                // Retrieve property details for each property ID
                const propertyPromises = propertyIds.map(async (propertyId) => {
                    return await contract.methods.properties(propertyId).call();
                });

                // Wait for all property details to be fetched
                const propertyDetails = await Promise.all(propertyPromises);
                setProperties(propertyDetails);
            } else {
                console.error('Please install MetaMask extension to interact with Ethereum');
            }
        };

        loadWeb3();
    }, []);

    return (
        <div className="property-list-container">
            <h1 className="property-list-title">My Properties</h1>
            <ul className="property-list">
                {properties.map((property, index) => (
                    <li key={index} className="property-item">
                        <strong>Property ID:</strong> {property.id}<br />
                        <strong>Address:</strong> {property.propertyAddress}<br />
                        <strong>Owner Name:</strong> {property.propertyOwnerName}<br />
                        <strong>Area:</strong> {property.area}<br />
                        <strong>Location:</strong> {property.location}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
