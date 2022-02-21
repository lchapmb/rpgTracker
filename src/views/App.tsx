import React, { createContext, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import "../css/App.css";

import HomePage from "../components/HomePage";
import CreatePlayer from "../components/CreatePlayer";
import CreatureList from "../components/CreatureList";

export const UserContext = createContext({
  userName: "",
});

export const useGlobalContext = () => useContext(UserContext);

function App() {
  const [userName] = useState<string>("GM");

  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-player" element={<CreatePlayer />} />
      <Route path="/creature-list" element={<CreatureList />} />
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
