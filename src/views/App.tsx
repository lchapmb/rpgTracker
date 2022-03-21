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

// import interface
import CreatureInterface from "../interface/CreatureInterface";

// declare content types
export type UserContent = {
  userName: string;
};
export type CreatureContent = {
  creaturesArr: Array<CreatureInterface>;
  setCreaturesArr: (c: Array<CreatureInterface>) => void;
};

// create contexts
export const UserContext = createContext<UserContent>({
  userName: "",
});
export const CreaturesContext = createContext<CreatureContent>({
  creaturesArr: [{ id: 0, name: "", health: 0, armour: 0 }],
  setCreaturesArr: () => {},
});

// exports use contexts
export const useUserContext = () => useContext(UserContext);
export const useCreaturesContext = () => useContext(CreaturesContext);

function App() {
  const [userName] = useState<string>("GM");
  const [creaturesArr, setCreaturesArr] = useState<Array<CreatureInterface>>(
    []
  );

  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-player" element={<CreatePlayer />} />
      <Route path="/creatures-page" element={<CreaturesPage />} />
    </Routes>
  );

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <UserContext.Provider value={{ userName }}>
          <CreaturesContext.Provider value={{ creaturesArr, setCreaturesArr }}>
            {routes}
          </CreaturesContext.Provider>
        </UserContext.Provider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
