import "./styles/App.css";
import "./firebase.config";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="image-container">
        <img className="waldo-image" alt='Waldo' />
      </div>
    </div>
  );
}

export default App;
