import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';

const MyEpubReader = ({ epubUrl, title }) => {
  const storageKey = `epubLocation-${title}`;
  
  // Initialize location from localStorage, or undefined if not available
  const [location, setLocation] = useState(() => {
    const savedLocation = localStorage.getItem(storageKey);
    return savedLocation ? savedLocation : undefined;
  });

  const onLocationChanged = (newLocation) => {
    setLocation(newLocation);
    localStorage.setItem(storageKey, newLocation);
  };

  useEffect(() => {
    // Update location in localStorage
    localStorage.setItem(storageKey, location);
  }, [location, storageKey]);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ReactReader
        url={epubUrl}
        title={title}
        location={location}
        locationChanged={onLocationChanged}
      />
    </div>
  );
}

export default MyEpubReader;
