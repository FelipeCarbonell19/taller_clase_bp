import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQLDPRB31PZW0Bh-sK7kZOHv0V22NaSY4",
    authDomain: "tallerbasebuenasp.firebaseapp.com",
    projectId: "tallerbasebuenasp",
    storageBucket: "tallerbasebuenasp.appspot.com",
    messagingSenderId: "368408468171",
    appId: "1:368408468171:web:9f032d03135201e8ad994e"
  };

firebase.initializeApp(firebaseConfig);
export{firebase}

