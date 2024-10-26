// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCVZu-wgscgBqussZLbWhfAbUKD_ugrL6Q",
  authDomain: "deakinproject-4f503.firebaseapp.com",
  projectId: "deakinproject-4f503",
  storageBucket: "deakinproject-4f503.appspot.com",
  messagingSenderId: "513203884890",
  appId: "1:513203884890:web:29e6132a6c7096dce85963",
  measurementId: "G-RTKH1SGQGS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);