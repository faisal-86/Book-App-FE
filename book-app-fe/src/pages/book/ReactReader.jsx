import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import { useEpub } from './EpubContext';

const MyEpubReader = () => {
  const { epubPath } = useEpub();
  const title = 'EPUB Reader';

  const storageKey = `epubLocation-${title}`;

  const [location, setLocation] = useState(() => {
    const savedLocation = localStorage.getItem(storageKey);
    return savedLocation ? savedLocation : undefined;
  });

  const onLocationChanged = (newLocation) => {
    setLocation(newLocation);
    localStorage.setItem(storageKey, newLocation);
  };

  // Debugging: Log the EPUB URL
  useEffect(() => {
    const constructedUrl = `${window.location.origin}/epubs${epubPath}`; // Construct the EPUB URL
    console.log("EPUB URL:", constructedUrl);
  }, [epubPath]);

  useEffect(() => {
    localStorage.setItem(storageKey, location);
  }, [location, storageKey]);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {epubPath ? (
        <ReactReader
          url={`https://raw.githubusercontent.com/faisal-86/Novagram-BE/main/public/uploads/epubs/example.epub`} // Update the URL to use the correct path
          // url={`${window.location.origin}/epubs/example.epub`}
          title={title}
          location={location}
          locationChanged={onLocationChanged}
        />
      ) : (
        <div>Loading EPUB...</div>
      )}
    </div>
  );
}

export default MyEpubReader;
