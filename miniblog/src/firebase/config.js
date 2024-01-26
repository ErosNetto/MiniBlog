import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCU70iNyt7BxnScPN1pd6IfJ4tg-OxNV0",
  authDomain: "miniblog-ccf09.firebaseapp.com",
  projectId: "miniblog-ccf09",
  storageBucket: "miniblog-ccf09.appspot.com",
  messagingSenderId: "426010794420",
  appId: "1:426010794420:web:89f95009599d0bb556bae1",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
