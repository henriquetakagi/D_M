import { initializeApp } from "firebase/app";

//Ajuste para autenticar e acessar o banco
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  databaseURL: "https://teste.firebaseio.com",
  apiKey: "AIzaSyAEp-Xe0YFfLTk7EFApQG9RquVoG6fnpTc",
  authDomain: "teste-36174.firebaseapp.com",
  projectId: "teste-36174",
  storageBucket: "teste-36174.firebasestorage.app",
  messagingSenderId: "919017275837",
  appId: "1:919017275837:web:ab601bdd47bc3fb74c12d4",
  measurementId: "G-FNBK9DY66F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;