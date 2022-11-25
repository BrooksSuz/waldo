import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC25JZw3CSZ1Jg9eRNItmBBP81nl3Uo6iE",
  authDomain: "waldo-c295e.firebaseapp.com",
  projectId: "waldo-c295e",
  storageBucket: "waldo-c295e.appspot.com",
  messagingSenderId: "894680899601",
  appId: "1:894680899601:web:af6537422875e7b05ed1b0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage();
const waldoRef = ref(storage, 'images/waldo.jpeg');

export const loadWaldo = getDownloadURL(waldoRef)
  .then((url) => {
    const waldoImage = document.querySelector('.waldo-image');
    waldoImage.setAttribute('src', url);
  });
