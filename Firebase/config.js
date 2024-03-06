// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDSmzfJalcE-fvgsveys3XFwXgZygrdgI",
  authDomain: "blog-d6d16.firebaseapp.com",
  projectId: "blog-d6d16",
  storageBucket: "blog-d6d16.appspot.com",
  messagingSenderId: "560851824603",
  appId: "1:560851824603:web:4902a8fbba5fc63726c1fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)