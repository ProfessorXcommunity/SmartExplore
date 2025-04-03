import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/boxicons/css/boxicons.min.css";
import "./App.css";
import Main from "./components/connections/Main";

// Function to dynamically load Google Maps API
const loadGoogleMapsScript = (callback) => {
  if (!window.google) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places,geometry,drawing`;
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    callback();
  }
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMapsScript(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <div className="App">
        {isLoaded ? <Main /> : <p>Loading Google Maps...</p>}
      </div>
    </>
  );
}

export default App;
