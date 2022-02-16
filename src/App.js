import React, { createContext, useState } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";
import HomePage from "./components/HomePage";

export const UserContext = createContext();

function App() {
  const [userName] = useState("GM");

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <UserContext.Provider value={{ userName }}>
          <HomePage />
        </UserContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
