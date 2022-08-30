
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBhfs4nso9qFIPraLZbs8ZcwEUPIxYhIXI",
    authDomain: "sunday-wake-crew.firebaseapp.com",
    projectId: "sunday-wake-crew",
    storageBucket: "sunday-wake-crew.appspot.com",
    messagingSenderId: "799817520420",
    appId: "1:799817520420:web:48f73838b5a2a24ac64fb1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app)