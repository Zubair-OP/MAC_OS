import { createContext } from "react";
import { useState } from "react";

export const WindowContextData = createContext();



const WindowContext = ({ children }) => {

  const [window, setWindow] = useState({
    github: false,
    spotify: false,
    note: false,
    cli: false,
  })
  return (
    <WindowContextData.Provider value={{ window, setWindow }}>
      {children}
    </WindowContextData.Provider>
  )
}

export default WindowContext;