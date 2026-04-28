import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1__Vqm-SCoK8vrCXfsnDBi9gftnorddI",
  authDomain: "postcard-exchange-manager.firebaseapp.com",
  projectId: "postcard-exchange-manager",
  storageBucket: "postcard-exchange-manager.firebasestorage.app",
  messagingSenderId: "851927889855",
  appId: "1:851927889855:web:342989c45713214a98130a",
  measurementId: "G-HTVZEMS0TN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
