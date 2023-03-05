import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtYl9zsN7DtKS2jiKCdQgBpDXR9If8nwE",
  authDomain: "noteballs-6b662.firebaseapp.com",
  projectId: "noteballs-6b662",
  storageBucket: "noteballs-6b662.appspot.com",
  messagingSenderId: "62863962580",
  appId: "1:62863962580:web:d84ce7230fde08c5a72641",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
