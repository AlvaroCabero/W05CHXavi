import { useState } from "react";
import operacionContext from "./context";

const ContextProvider = ({ children }) => {
  const [displayData, setDisplayData] = useState(0);
  const add = () => {
    setDisplayData(displayData + 1);
  };
  const subs = () => {
    if (displayData > 0) {
      setDisplayData(displayData - 1);
    }
  };
  return (
    <operacionContext.Provider value={{ displayData, add, subs }}>
      {children}
    </operacionContext.Provider>
  );
};

export default ContextProvider;
