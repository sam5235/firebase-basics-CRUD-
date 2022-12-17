import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAeZfMdRNe17xKM5hfb1kEvGyvwr9-ozfc",
    authDomain: "fir-tutorial-6ff1a.firebaseapp.com",
    projectId: "fir-tutorial-6ff1a",
    storageBucket: "fir-tutorial-6ff1a.appspot.com",
    messagingSenderId: "205565141400",
    appId: "1:205565141400:web:bb1ebd506f81cbfee20bed",
    measurementId: "G-B6QDGRTD69"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(); 