import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBAH8vqZKf1P9kczPy2gdEAWlU-Syil6G4&libraries=geometry`;
    googleMapsScript.async = true;
    googleMapsScript.onload = () => {
      setIsLoaded(true);
    };
    document.body.appendChild(googleMapsScript);
  }, []);

  useEffect(() => {
    if (isLoaded && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, [isLoaded]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getPropertyRegister");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseInfoWindow = () => {
    setSelectedProperty(null);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {isLoaded && userLocation && (
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={userLocation}
          zoom={14}
          onLoad={handleMapLoad}
        >
          {properties.map((property) => (
            <Marker
              key={property._id}
              position={{ lat: property.location.coordinates[1], lng: property.location.coordinates[0] }}
              onClick={() => handleMarkerClick(property)}
            />
          ))}
          {selectedProperty && (
            <InfoWindow
              position={{ lat: selectedProperty.location.coordinates[1], lng: selectedProperty.location.coordinates[0] }}
              onCloseClick={handleCloseInfoWindow}
            >
              <div style={{ maxWidth: "200px", padding: "10px" }}>
                <h3>{selectedProperty.ownerName}</h3>
                <p>City: {selectedProperty.city}</p>
                <p>Sub Area: {selectedProperty.subArea}</p>
                <p>Plot Number: {selectedProperty.plotNumber}</p>
                <Link to={`/property/${selectedProperty._id}`}>
                  <button style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", border: "none", cursor: "pointer", borderRadius: "5px", marginTop: "10px" }}>
                    View Details
                  </button>
                </Link>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
      {!isLoaded && <div>Loading...</div>}
    </div>
  );
};

export default Map;
