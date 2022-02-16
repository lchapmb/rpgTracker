import React, { createContext, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

export const UserContext = createContext();

function App() {
  const [userName] = useState("GM");

  return (
    <div className="App">
      <UserContext.Provider value={{ userName }}>
        <HomePage />
      </UserContext.Provider>
    </div>
  );
}

export default App;
