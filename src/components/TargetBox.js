import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const TargetBox = () => {
  const [coordinates, setCoordinates] = useState(null);
  const locationsCollectionRef = collection(db, "waldo-locations");

  useEffect(() => {
    const getCoordinates = async () => {
      const data = await getDocs(locationsCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data()})));
      // setCoordinates(data.docs.map((doc) => ))
    };

    getCoordinates();
  });

  return (
    <></>
  );
};

export default TargetBox;
