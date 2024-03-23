import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDc0mNg3d2droTYrmeUufCW73qYmOLyZAI",
  authDomain: "bank2-d486c.firebaseapp.com",
  projectId: "bank2-d486c",
  storageBucket: "bank2-d486c.appspot.com",
  messagingSenderId: "100970427481",
  appId: "1:100970427481:web:df02a3c7eca233aacbad48",
  measurementId: "G-LFDH2T221V"
};
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // Initialize Firestore and export it


