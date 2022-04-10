// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqd4uL8MlJXu_hYuL3tERqMCAUoCPrdN8",
  authDomain: "e-watches.firebaseapp.com",
  projectId: "e-watches",
  storageBucket: "e-watches.appspot.com",
  messagingSenderId: "135844361003",
  appId: "1:135844361003:web:aa862019d3728d60808b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)