// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGZ55OASHOqk53_XqS3-IBtWCSg58vU6k",
  authDomain: "travel-page-e0c76.firebaseapp.com",
  projectId: "travel-page-e0c76",
  storageBucket: "travel-page-e0c76.firebasestorage.app",
  messagingSenderId: "1049664332551",
  appId: "1:1049664332551:web:c5f6e4c57a72cd8c7c1ba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;