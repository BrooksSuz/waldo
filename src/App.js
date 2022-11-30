import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import WaldoBoard from "./components/WaldoBoard";

const App = () => {
  const [found, setFound] = useState({
    mineGuy: false,
    polarBear: false,
    tinyCastle: false
  });

  return (
    <div className="app">
      <Navbar found={found} />
      <WaldoBoard setFound={setFound} />
    </div>
  );
};

export default App;
