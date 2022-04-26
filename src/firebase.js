import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOSgv46lglCLcYslPaNCg7Dpe1kn-_jjI",
    authDomain: "tallerenclase-b52bf.firebaseapp.com",
    projectId: "tallerenclase-b52bf",
    storageBucket: "tallerenclase-b52bf.appspot.com",
    messagingSenderId: "643538202022",
    appId: "1:643538202022:web:495a0c7933324f7e73f367"
  };

firebase.initializeApp(firebaseConfig);
export{firebase}

