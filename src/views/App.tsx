import React, { createContext, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";
import "../css/App.css";

import HomePage from "../components/HomePage";
import CreatePlayer from "../components/CreatePlayer";

type MyContextInterface = {
  userName: string;
  health: number;
};

export const UserContext = createContext<MyContextInterface>({
  userName: "",
  health: 0,
});

export const useGlobalContext = () => useContext(UserContext);

function App() {
  const [userName, setUsername] = useState<string>("GM");

  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-player" element={<CreatePlayer />} />
    </Routes>
  );

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <UserContext.Provider value={{ userName, health: 0 }}>
          {routes}
        </UserContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
