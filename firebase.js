// firebase.js
// Save this file as firebase.js in repo root.
// (No secrets here beyond web config — it's normal for Firebase web apps)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc,
  collection, addDoc, getDocs, query, where, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// ====== আপনার firebaseConfig (আপনি আগে দিয়েছে) ======
const firebaseConfig = {
  apiKey: "AIzaSyBZMGRyntE0e9khAE5D_APTg5oIXLwgCzk",
  authDomain: "task-income-161a3.firebaseapp.com",
  projectId: "task-income-161a3",
  storageBucket: "task-income-161a3.firebasestorage.app",
  messagingSenderId: "599041213501",
  appId: "1:599041213501:web:dc54b58a75bab86e921654"
};
// =====================================================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app, auth, db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc, getDoc, setDoc, updateDoc,
  collection, addDoc, getDocs, query, where, orderBy, serverTimestamp
};