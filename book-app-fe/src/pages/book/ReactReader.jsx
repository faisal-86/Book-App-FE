import React, { useState, useEffect } from 'react';
import { ReactReader } from 'react-reader';
import { useEpub } from './EpubContext';
import ePub from 'epubjs';

const MyEpubReader = () => {
  const { epubPath } = useEpub();
  const [title, setTitle] = useState('EPUB Reader'); // Default title

  const epubFilename = epubPath.split('/').pop();
  const storageKey = `epubLocation-${epubFilename}`; // Unique storage key for each book
  const [location, setLocation] = useState(localStorage.getItem(storageKey) || undefined);

  const onLocationChanged = (newLocation) => {
    setLocation(newLocation);
    localStorage.setItem(storageKey, newLocation);
  };

  const backendUrl = 'http://localhost:1337';
  const constructedUrl = `${backendUrl}/uploads/epubs/${epubFilename}`;

  useEffect(() => {
    console.log("EPUB URL:", constructedUrl);
    const storedLocation = localStorage.getItem(storageKey);
    if (storedLocation) {
      setLocation(storedLocation);
    }

    // Extracting the title from the EPUB file
    const book = ePub(constructedUrl);
    book.loaded.metadata.then((metadata) => {
      setTitle(metadata.title); // Set the book title
    });
  }, [epubPath, storageKey, constructedUrl]);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {epubPath ? (
        <ReactReader
          url={constructedUrl}
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




// url={`https://raw.githubusercontent.com/faisal-86/Novagram-BE/main/public/uploads/epubs/example.epub`} // Update the URL to use the correct path
// url={`${window.location.origin}/epubs/example.epub`}
          