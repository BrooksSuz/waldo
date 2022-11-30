import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC25JZw3CSZ1Jg9eRNItmBBP81nl3Uo6iE",
  authDomain: "waldo-c295e.firebaseapp.com",
  databaseURL: "https://waldo-c295e-default-rtdb.firebaseio.com",
  projectId: "waldo-c295e",
  storageBucket: "waldo-c295e.appspot.com",
  messagingSenderId: "894680899601",
  appId: "1:894680899601:web:af6537422875e7b05ed1b0"
};

const app = initializeApp(firebaseConfig);

const writeUserData = (user, score) => {
  const db = getDatabase(app);
  const reference = ref(db, 'high-scores/' + user);

  set(reference, {
    score: score
  });
};

export default writeUserData;
