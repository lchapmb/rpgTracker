// import react packages
import { createContext, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";

// imports for MUI
import { StyledEngineProvider } from "@mui/material/styles";
import "../css/App.css";

// import components
import HomePage from "../components/HomePage";
import CreatePlayer from "../components/CreatePlayer";
import CreaturesPage from "../components/CreaturesPage";
import CombatPage from "../components/CombatPage";

// import interface
import CreatureInterface from "../interface/CreatureInterface";
import CombatantInterface from "../interface/CombatantInterface";

// declare content types
export type UserContent = {
  userName: string;
};
export type CreatureContent = {
  creaturesArr: Array<CreatureInterface>;
  setCreaturesArr: (c: Array<CreatureInterface>) => void;
};

export type InitiativeContent = {
  initiativeArr: Array<CombatantInterface>;
  setInitiativeArr: (i: Array<CombatantInterface>) => void;
};

// create contexts
export const UserContext = createContext<UserContent>({
  userName: "",
});
export const CreaturesContext = createContext<CreatureContent>({
  creaturesArr: [{ id: 0, name: "", health: 0, armour: 0 }],
  setCreaturesArr: () => {},
});
export const InitiativeContext = createContext<InitiativeContent>({
  initiativeArr: [{ initiative: 0, id: 0, name: "", health: 0, armour: 0 }],
  setInitiativeArr: () => {},
});

// exports use contexts
export const useUserContext = () => useContext(UserContext);
export const useCreaturesContext = () => useContext(CreaturesContext);
export const useInitiativeContext = () => useContext(InitiativeContext);

function App() {
  const [userName] = useState<string>("GM");
  const [creaturesArr, setCreaturesArr] = useState<Array<CreatureInterface>>(
    []
  );
  const [initiativeArr, setInitiativeArr] = useState<Array<CombatantInterface>>(
    []
  );

  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-player" element={<CreatePlayer />} />
      <Route path="/creatures-page" element={<CreaturesPage />} />
      <Route path="/combat-page" element={<CombatPage />} />
    </Routes>
  );

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <UserContext.Provider value={{ userName }}>
          <CreaturesContext.Provider value={{ creaturesArr, setCreaturesArr }}>
            <InitiativeContext.Provider
              value={{ initiativeArr, setInitiativeArr }}
            >
              {routes}
            </InitiativeContext.Provider>
          </CreaturesContext.Provider>
        </UserContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
