// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // if using authentication
import { getFirestore } from "firebase/firestore"; // if using Firestore
import { getStorage } from "firebase/storage"; // if using storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmVRRPTLcMV5kVIxcVSqtzsj_ipPkTCuA",
  authDomain: "practice1-f3ccb.firebaseapp.com",
  projectId: "practice1-f3ccb",
  storageBucket: "practice1-f3ccb.firebasestorage.app",
  messagingSenderId: "965026537366",
  appId: "1:965026537366:web:10f4decfa22f3b2ca047b7",
  measurementId: "G-PV6Q9NBYEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export const storage = getStorage(app);