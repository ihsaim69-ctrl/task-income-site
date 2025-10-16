// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZMGRyntE0e9khAE5D_APTg5oIXLwgCzk",
  authDomain: "task-income-161a3.firebaseapp.com",
  projectId: "task-income-161a3",
  storageBucket: "task-income-161a3.firebasestorage.app",
  messagingSenderId: "599041213501",
  appId: "1:599041213501:web:dc54b58a75bab86e921654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };