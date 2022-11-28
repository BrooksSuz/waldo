import "./styles/App.css";
import Navbar from "./components/Navbar";
import WaldoBoard from "./components/WaldoBoard";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <WaldoBoard />
    </div>
  );
}

export default App;
