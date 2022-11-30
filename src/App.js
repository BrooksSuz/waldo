import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import WaldoBoard from "./components/WaldoBoard";
import HighscoreTable from "./components/HighscoreTable";

const App = () => {
  const [found, setFound] = useState({
    mineGuy: false,
    polarBear: false,
    tinyCastle: false
  });
  const [showHighscoreTable, setShowHighscoreTable] = useState(false);

  return (
    <div className="app">
      <Navbar found={found} setShowHighscoreTable={setShowHighscoreTable} />
      <WaldoBoard setFound={setFound} />
      { showHighscoreTable ? <HighscoreTable /> : null }
    </div>
  );
};

export default App;
