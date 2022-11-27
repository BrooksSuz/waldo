import "../firebase-config";
import { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const WaldoBoard = () => {
  const locationsCollectionRef = collection(db, "waldo-locations");

  const getWaldos = async () => {
    const data = await getDocs(locationsCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  const getPolarBear = async () => {
    const response = await getWaldos();
    return response[0];
  };

  const checkGuess = async (userGuess) => {
    const polarBear = await getPolarBear();
    if ((userGuess[0] >= polarBear.X[0]
      && userGuess[0] <= polarBear.X[1])
      && (userGuess[1] >= polarBear.Y[0]
      && userGuess[1] <= polarBear.Y[1])) {
      console.log('You found the polar bear!');
    } else {
      console.log('No find polar bear');
    }
  };

  const handleClick = (e) => {
    const userGuess = [e.pageX, e.pageY];
    checkGuess(userGuess);
  };

  useEffect(() => {
    const getWaldos = async () => {
      const data = await getDocs(locationsCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getWaldos();
  });

  return (
    <div className="image-container">
      <img onClick={handleClick} className="waldo-image" alt='Waldo' />
    </div>
  );
};

export default WaldoBoard;
