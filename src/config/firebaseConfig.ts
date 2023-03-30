import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-sBqm2dfUfDYlYPvV82zla4XL2ZZRwwo",
    authDomain: "ceocash-c1392.firebaseapp.com",
    projectId: "ceocash-c1392",
    storageBucket: "ceocash-c1392.appspot.com",
    messagingSenderId: "189087352070",
    appId: "1:189087352070:web:082682ec3ff4569226ca87",
    measurementId: "G-6XFD6CTFH7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);