// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCbhhlS2g0Eaj7YG9TZ5RUpzuBBcuST4JU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "assignment-9-697b3.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "assignment-9-697b3",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "assignment-9-697b3.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1084323779913",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1084323779913:web:4ceea8eb59824658517698"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { app, auth, provider };


