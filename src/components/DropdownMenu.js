import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const DropdownMenu = (props) => {
  const { userGuess, top, left } = props;

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

  const checkGuess = async () => {
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

  return (
    <span
      style={{ display: "flex",
               flexDirection: "column",
               position: "absolute",
               top: `${top + 5}px`,
               left: `${left + 5}px`
            }}
      className="dropdown-menu"
    >
      <button onClick={checkGuess}>Mine Guy</button>
      <button onClick={checkGuess}>Polar Bear</button>
      <button onClick={checkGuess}>Tiny Castle</button>
    </span>
  );
};

export default DropdownMenu;
