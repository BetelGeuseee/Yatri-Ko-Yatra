import firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyCcUIUzprjh5ts5YbDpb6TtV5S0Q43lgjE",

    authDomain: "domsdummy-f8830.firebaseapp.com",

    projectId: "domsdummy-f8830",

    storageBucket: "domsdummy-f8830.appspot.com",

    messagingSenderId: "303415984323",

    appId: "1:303415984323:web:ffb5d639ad033208c42276",

    measurementId: "G-C6P4LZQ7JS"

  };

  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {fire,db};
  
