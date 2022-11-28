import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const WaldoBoard = () => {
  const [userGuess, setUserGuess] = useState(null);
  const [top, setTop] = useState(null);
  const [left, setleft] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [found, setFound] = useState({
    mineGuy: false,
    polarBear: false,
    tinyCastle: false
  });

  const handleClick = (e) => {
    setUserGuess([e.pageX, e.pageY]);
    setTop(e.pageY);
    setleft(e.pageX);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="waldo-board">
      <img
        style={{ maxWidth: "100%" }}
        onClick={handleClick}
        className="waldo-image"
        alt='Waldo' 
      />
      { showDropdown ? <DropdownMenu userGuess={userGuess} top={top} left={left} /> : null }
    </div>
  );
};

export default WaldoBoard;
