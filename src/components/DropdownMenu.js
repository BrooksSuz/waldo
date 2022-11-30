import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const DropdownMenu = (props) => {
  const { userGuess, top, left, setFound } = props;

  const locationsCollectionRef = collection(db, "waldo-locations");

  const getWaldos = async () => {
    const data = await getDocs(locationsCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  const getMineGuy = async () => {
    const result = await getWaldos();
    return result[0];
  };

  const getPolarBear = async () => {
    const result = await getWaldos();
    return result[1];
  };

  const getTinyCastle = async () => {
    const result = await getWaldos();
    return result[2];
  };

  const checkMineGuy = async () => {
    const mineGuy = await getMineGuy();

    if ((userGuess[0] >= mineGuy.X[0]
    && userGuess[0] <= mineGuy.X[1])
    && (userGuess[1] >= mineGuy.Y[0]
    && userGuess[1] <= mineGuy.Y[1])) {
      setFound(prevState => {
        let tempFound = Object.assign({}, prevState);
        tempFound.mineGuy = true;
        return tempFound;
      });
    }
  };

  const checkPolarBear = async () => {
    const polarBear = await getPolarBear();

    if ((userGuess[0] >= polarBear.X[0]
    && userGuess[0] <= polarBear.X[1])
    && (userGuess[1] >= polarBear.Y[0]
    && userGuess[1] <= polarBear.Y[1])) {
      setFound(prevState => {
        let tempFound = Object.assign({}, prevState);
        tempFound.polarBear = true;
        return tempFound;
      });
    }
  };

  const checkTinyCastle = async () => {
    const tinyCastle = await getTinyCastle();

    if ((userGuess[0] >= tinyCastle.X[0]
    && userGuess[0] <= tinyCastle.X[1])
    && (userGuess[1] >= tinyCastle.Y[0]
    && userGuess[1] <= tinyCastle.Y[1])) {
      setFound(prevState => {
        let tempFound = Object.assign({}, prevState);
        tempFound.tinyCastle = true;
        return tempFound;
      });
    }
  };

  return (
    <span
      style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: `${top + 5}px`,
              left: `${left + 5}px`
            }}
      className="dropdown-menu"
    >
      <button onClick={checkMineGuy}>Mine Guy</button>
      <button onClick={checkPolarBear}>Polar Bear</button>
      <button onClick={checkTinyCastle}>Tiny Castle</button>
    </span>
  );
};

export default DropdownMenu;
