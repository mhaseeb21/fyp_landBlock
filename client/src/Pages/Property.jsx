// PropertyDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import plot1 from '../Assets/plot1.jpeg'; // Importing carousel images
import plot2 from '../Assets/plot2.jpg';

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from URL params
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/getProperty/${id}`); // Adjust the endpoint according to your backend
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "center" }}>
        <h1>Property Details</h1>
      </header>

      {/* Main content */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Images */}
        <div style={{ display: "flex", alignItems: "center", maxWidth: "800px", margin: "0 auto" }}>
          <img src={property.image1} alt="Property" style={{ width: "50%", marginLeft: "10px" }} />
          <img src={property.image2} alt="Property" style={{ width: "50%", marginRight: "10px" }} />
        </div>
      </div>

      {/* Details */}
      <div style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
        <h2>{property.ownerName}</h2>
        <p>City: {property.city}</p>
        <p>Sub Area: {property.subArea}</p>
        <p>Plot Number: {property.plotNumber}</p>
        <p>Blockchain Verified: No</p>
        {/* Add more property details here */}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "10px", textAlign: "center" }}>
        <p>© 2024 Property Management</p>
      </footer>
    </div>
  );
};

export default PropertyDetails;
