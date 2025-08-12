import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA45-4wO6qHiIp_Oa0TR6mhONdWLdWuDdo",
  authDomain: "investox-6a08b.firebaseapp.com",
  projectId: "investox-6a08b",
  storageBucket: "investox-6a08b.appspot.com", // ✅ Corrected here
  messagingSenderId: "294492148286",
  appId: "1:294492148286:web:24bef1061ca1113904376f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
