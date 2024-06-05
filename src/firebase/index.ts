import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwpKE7agi55vJRgYUc3g7mbzKvIvhA_VQ",
  authDomain: "exclusive-shop-type.firebaseapp.com",
  projectId: "exclusive-shop-type",
  storageBucket: "exclusive-shop-type.appspot.com",
  messagingSenderId: "538923989955",
  appId: "1:538923989955:web:52c6b69e41e003fc859b76",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const imagesDB = getStorage(app);
