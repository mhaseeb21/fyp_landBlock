import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if google.maps is available
    if (window.google && window.google.maps) {
      setIsLoaded(true);
    } else {
      // If not available, load the Google Maps API script
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAjf0LKhpoO-RtRvcaaw4UY5RimcXmWwuE&libraries=geometry`;
      googleMapsScript.async = true;
      googleMapsScript.onload = () => {
        setIsLoaded(true);
      };
      document.body.appendChild(googleMapsScript);
    }
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

  const handleMapLoad = (mapInstance) => {
    setMap(mapInstance);
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
          <Marker position={userLocation} />
        </GoogleMap>
      )}
      {!isLoaded && <div>Loading...</div>}
    </div>
  );
};

export default Map;
