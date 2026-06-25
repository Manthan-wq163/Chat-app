// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Jno8u2cgb3vTmVzjcm-vixLjsS4sUpk",
  authDomain: "chat-app-bdb60.firebaseapp.com",
  projectId: "chat-app-bdb60",
  storageBucket: "chat-app-bdb60.firebasestorage.app",
  messagingSenderId: "707927020629",
  appId: "1:707927020629:web:a91263e0175c427de3f0dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);