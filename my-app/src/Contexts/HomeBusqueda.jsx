import { useState, createContext } from "react";
export const BusquedaHomeContext = createContext();

const BusquedaHomeContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  return (
    <BusquedaHomeContext.Provider value={{ movies, setMovies }}>
      {children}
    </BusquedaHomeContext.Provider>
  );
};

export default BusquedaHomeContextProvider;
