import React, { createContext, useState, useContext } from 'react';

const EpubContext = createContext();

export const useEpub = () => useContext(EpubContext);

export const EpubProvider = ({ children }) => {
  const [epubPath, setEpubPath] = useState('');

  return (
    <EpubContext.Provider value={{ epubPath, setEpubPath }}>
      {children}
    </EpubContext.Provider>
  );
};
