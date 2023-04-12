
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvfY0HX0lhiAS9kY_2Erz8bhHNo2gg0mY",
  authDomain: "eco-project-f664a.firebaseapp.com",
  projectId: "eco-project-f664a",
  storageBucket: "eco-project-f664a.appspot.com",
  messagingSenderId: "964078510716",
  appId: "1:964078510716:web:7ff1a4ea2e2edc39bd5ff9",
  measurementId: "G-H2LY4ZPZGK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
