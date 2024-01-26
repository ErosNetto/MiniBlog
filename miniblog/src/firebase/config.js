import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZiAo3pln4JWNBzdnJUuOgFVOdrDoQvc",
  authDomain: "miniblog-b9b64.firebaseapp.com",
  projectId: "miniblog-b9b64",
  storageBucket: "miniblog-b9b64.appspot.com",
  messagingSenderId: "506273815733",
  appId: "1:506273815733:web:414a6de24df3b9257a32fc",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
