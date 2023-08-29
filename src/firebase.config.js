// Import the functions you need from the SDKs you need
import{getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqC_fL5fCZqYRhK-FC6kbT4B38YeVRMsE",
  authDomain: "house-marketplace-app-77098.firebaseapp.com",
  projectId: "house-marketplace-app-77098",
  storageBucket: "house-marketplace-app-77098.appspot.com",
  messagingSenderId: "701753888963",
  appId: "1:701753888963:web:67d9ff6b3dfb9c2503d276"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

export const db = getFirestore()