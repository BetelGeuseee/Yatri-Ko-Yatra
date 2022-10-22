
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCcUIUzprjh5ts5YbDpb6TtV5S0Q43lgjE",

    authDomain: "domsdummy-f8830.firebaseapp.com",

    projectId: "domsdummy-f8830",

    storageBucket: "domsdummy-f8830.appspot.com",

    messagingSenderId: "303415984323",

    appId: "1:303415984323:web:ffb5d639ad033208c42276",

    measurementId: "G-C6P4LZQ7JS"

  };

  const fire = initializeApp(firebaseConfig);
  const db = getFirestore(fire);
  const store = getStorage(fire);
  const auth = getAuth(fire);

  
  export {auth,db,store};
  
