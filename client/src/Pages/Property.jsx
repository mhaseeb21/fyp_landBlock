// PropertyDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>Property Details</h1>
      <h2>{property.ownerName}</h2>
      <p>City: {property.city}</p>
      <p>Sub Area: {property.subArea}</p>
      <p>Plot Number: {property.plotNumber}</p>
      <img src={property.image1} alt="Property" style={{ maxWidth: "100%" }} />
      <img src={property.image2} alt="Property" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default PropertyDetails;
