import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNSNXHlywK2XoGejWbDNbpdjLjJsyKsFk",
  authDomain: "miniblog-56652.firebaseapp.com",
  projectId: "miniblog-56652",
  storageBucket: "miniblog-56652.appspot.com",
  messagingSenderId: "1033265042241",
  appId: "1:1033265042241:web:25223bc166e7d676fe87c0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };