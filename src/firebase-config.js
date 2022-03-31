// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMVgX2p9_iSMPVFGKqiYQSsSt9lfX24BQ",
  authDomain: "nutryproject-7ccc0.firebaseapp.com",
  projectId: "nutryproject-7ccc0",
  storageBucket: "nutryproject-7ccc0.appspot.com",
  messagingSenderId: "771933430952",
  appId: "1:771933430952:web:9e6e651d53cb8373428e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
