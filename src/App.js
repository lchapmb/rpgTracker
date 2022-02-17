import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";

import HomePage from "./components/HomePage";
import CreatePlayer from "./components/CreatePlayer";

export const UserContext = createContext();

function App() {
  const [userName] = useState("GM");

  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-player" element={<CreatePlayer />} />
    </Routes>
  );

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <UserContext.Provider value={{ userName }}>
          {routes}
        </UserContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
