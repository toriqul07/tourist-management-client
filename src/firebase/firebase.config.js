// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBh9QfivCxDWPZTIZy3G9hVZTAQB2QhiY",
  authDomain: "tourist-management-5e69a.firebaseapp.com",
  projectId: "tourist-management-5e69a",
  storageBucket: "tourist-management-5e69a.appspot.com",
  messagingSenderId: "248339943650",
  appId: "1:248339943650:web:8a0df24bcba1579de6cebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;