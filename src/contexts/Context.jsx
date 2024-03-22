// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [queeList, setQueeList] = useState([]);

  return (
    <GlobalContext.Provider value={{ queeList, setQueeList }}>
      {children}
    </GlobalContext.Provider>
  );
};
