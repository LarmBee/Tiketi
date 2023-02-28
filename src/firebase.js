import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import "firebase/firestore"
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWL1z3dEOJiJAbHJUH0zj0rUioABPKsME",
    authDomain: "mytickets-6436a.firebaseapp.com",
    projectId: "mytickets-6436a",
    storageBucket: "mytickets-6436a.appspot.com",
    messagingSenderId: "1026495274924",
    appId: "1:1026495274924:web:dd3e5804c2d93870ca2409"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db =getFirestore()