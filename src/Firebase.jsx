import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbH9JV-n66hiPn-KPf49k4MSW2n-3yiVM",
  authDomain: "fastmed-2025.firebaseapp.com",
  projectId: "fastmed-2025",
  storageBucket: "fastmed-2025.firebasestorage.app",
  messagingSenderId: "1056957224967",
  appId: "1:1056957224967:web:0fd7d472c1c251fd3232a2",
  measurementId: "G-XBTXEM5BR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
