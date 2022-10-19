import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyVPPZJwfUVFN9_bRQ3B5UdYrzLuQjwAQ",
  authDomain: "linkedin-clone-d1d3d.firebaseapp.com",
  projectId: "linkedin-clone-d1d3d",
  storageBucket: "linkedin-clone-d1d3d.appspot.com",
  messagingSenderId: "983325433875",
  appId: "1:983325433875:web:98495566232a9d073edfe6",
  measurementId: "G-F84WVB7SC6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

// Detect oauth state
// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log("logged in");
//   }
//   console.log("No User");
// });
