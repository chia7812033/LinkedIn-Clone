import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJTKo3XhzzPOBTTmm6yyMm5zvJmNlUI5Q",
  authDomain: "linkedin-clone-719fd.firebaseapp.com",
  projectId: "linkedin-clone-719fd",
  storageBucket: "linkedin-clone-719fd.appspot.com",
  messagingSenderId: "742205733148",
  appId: "1:742205733148:web:9db7ea2ea57605838022d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db, auth};
