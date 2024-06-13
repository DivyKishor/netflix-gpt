// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-S-ZuuUy00MJik6P59aM1KtOJBSgWuFU",
  authDomain: "netflixgpt-d01d7.firebaseapp.com",
  projectId: "netflixgpt-d01d7",
  storageBucket: "netflixgpt-d01d7.appspot.com",
  messagingSenderId: "458224012505",
  appId: "1:458224012505:web:1c99ac18f37dfd590cc2c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };