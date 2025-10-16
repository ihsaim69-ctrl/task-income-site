// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZMGRyntE0e9khAE5D_APTg5oIXLwgCzk",
  authDomain: "task-income-161a3.firebaseapp.com",
  projectId: "task-income-161a3",
  storageBucket: "task-income-161a3.firebasestorage.app",
  messagingSenderId: "599041213501",
  appId: "1:599041213501:web:dc54b58a75bab86e921654"
};

export const app = initializeApp(firebaseConfig);