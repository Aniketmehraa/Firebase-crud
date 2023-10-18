import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {
  apiKey: "AIzaSyBZntCWKRVfzaEdB3RqPAFITn_nmbUdIeg",
  authDomain: "react-crud-12478.firebaseapp.com",
  projectId: "react-crud-12478",
  storageBucket: "react-crud-12478.appspot.com",
  messagingSenderId: "230829956499",
  appId: "1:230829956499:web:b387112add3afe7045dc66",
  measurementId: "G-DLLWZC1BSH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
