import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPB1-teQGYtWUXp82b0LLWd0sSUDhjtTg",
  authDomain: "automotora-pardo.firebaseapp.com",
  projectId: "automotora-pardo",
  storageBucket: "automotora-pardo.firebasestorage.app",
  messagingSenderId: "218076603264",
  appId: "1:218076603264:web:9dd013449c1bc81543d765"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Conectar con Firestore

export { db };
