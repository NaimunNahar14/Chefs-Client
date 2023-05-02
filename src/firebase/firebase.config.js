// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2zySWAEJrwzrj-9zKDvQa-yXfXrMCG08",
  authDomain: "recipe-hunter-4a325.firebaseapp.com",
  projectId: "recipe-hunter-4a325",
  storageBucket: "recipe-hunter-4a325.appspot.com",
  messagingSenderId: "1049171041545",
  appId: "1:1049171041545:web:87fd750032c85e61edc7d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;