// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGhX2CG_bDV4S0iveIfdfXb4G_kGh717Q",
  authDomain: "painting-pros-3868a.firebaseapp.com",
  projectId: "painting-pros-3868a",
  storageBucket: "painting-pros-3868a.appspot.com",
  messagingSenderId: "433510509936",
  appId: "1:433510509936:web:7ad82c59e975617bc1f3b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth