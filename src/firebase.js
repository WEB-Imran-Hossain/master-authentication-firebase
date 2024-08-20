// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; //using for email and password

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf4irP_KpbafR0mGbe_mnVlzsxfS4Y-Xc",
  authDomain: "guestbook-db4db.firebaseapp.com",
  projectId: "guestbook-db4db",
  storageBucket: "guestbook-db4db.appspot.com",
  messagingSenderId: "243942582557",
  appId: "1:243942582557:web:59f2257d48acee75a059f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //using for email and password

//using for registration
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // console.log(user);
    return user;
  } catch (err) {
    // console.log(error);
    throw error;
  }
};

//using for login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    throw error;
  }
};

export { registerWithEmailAndPassword, loginWithEmailAndPassword, auth };
