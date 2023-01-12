import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCc_ReR5-D1nSS8nFzppYY83t7d6gMmJA",
    authDomain: "miniblog-96e9b.firebaseapp.com",
    projectId: "miniblog-96e9b",
    storageBucket: "miniblog-96e9b.appspot.com",
    messagingSenderId: "158815134081",
    appId: "1:158815134081:web:9c51d333db1f2bea958880"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };