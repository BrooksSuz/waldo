import "./styles/App.css";
import "./firebase-config";
import Navbar from "./components/Navbar";
import TargetBox from "./components/TargetBox";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="image-container">
        <img className="waldo-image" alt='Waldo' />
      </div>
      <TargetBox />
    </div>
  );
}

export default App;
