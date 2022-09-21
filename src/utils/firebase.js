import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBOTgK4SuMqcJLNxL9PAC3pjozeRyaR4BM",
  authDomain: "hora-de-jugar.firebaseapp.com",
  projectId: "hora-de-jugar",
  storageBucket: "hora-de-jugar.appspot.com",
  messagingSenderId: "546714490238",
  appId: "1:546714490238:web:57d02874a441b709f5cf2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)