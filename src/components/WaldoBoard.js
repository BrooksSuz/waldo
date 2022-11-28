import "../firebase-config";
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import DropdownMenu from "./DropdownMenu";

const WaldoBoard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [top, setTop] = useState(null);
  const [left, setleft] = useState(null);

  const locationsCollectionRef = collection(db, "waldo-locations");

  const getWaldos = async () => {
    const data = await getDocs(locationsCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  const getMineGuy = async () => {
    const response = await getWaldos();
    return response[0];
  };

  const getPolarBear = async () => {
    const response = await getWaldos();
    return response[1];
  };

  const getTinyCastle = async () => {
    const response = await getWaldos();
    return response[2];
  };

  const checkGuess = async (userGuess) => {
    const mineGuy = await getMineGuy();
    const polarBear = await getPolarBear();
    const tinyCastle = await getTinyCastle();

    if ((userGuess[0] >= mineGuy.X[0]
      && userGuess[0] <= mineGuy.X[1])
      && (userGuess[1] >= mineGuy.Y[0]
      && userGuess[1] <= mineGuy.Y[1])) {
      console.log('You found the Mine Guy!');
    } else if ((userGuess[0] >= polarBear.X[0]
      && userGuess[0] <= polarBear.X[1])
      && (userGuess[1] >= polarBear.Y[0]
      && userGuess[1] <= polarBear.Y[1])) {
      console.log('You found the Polar Bear!');
    } else if ((userGuess[0] >= tinyCastle.X[0]
      && userGuess[0] <= tinyCastle.X[1])
      && (userGuess[1] >= tinyCastle.Y[0]
      && userGuess[1] <= tinyCastle.Y[1])) {
      console.log('You found the Tiny Castle!');
    } else {
      console.log('You no find anything :(');
    }
  };

  const handleClick = (e) => {
    const userGuess = [e.pageX, e.pageY];
    setTop(e.pageY);
    setleft(e.pageX);
    setShowDropdown(!showDropdown);
    checkGuess(userGuess);
    console.log(`${top} ${left}`)
  };

  return (
    <div className="waldo-board">
      <img
        style={{ maxWidth: "100%" }}
        onClick={handleClick}
        className="waldo-image"
        alt='Waldo' 
      />
      { showDropdown ? <DropdownMenu top={top} left={left} /> : null }
    </div>
  );
};

export default WaldoBoard;
