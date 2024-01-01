import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCzD_rfreMiVjJcQNG2fU_bztb9NJGLHl0",
    authDomain: "tickets-220bb.firebaseapp.com",
    projectId: "tickets-220bb",
    storageBucket: "tickets-220bb.appspot.com",
    messagingSenderId: "854418940645",
    appId: "1:854418940645:web:5000aec7b3aba58a8f2a0c",
    measurementId: "G-0VERBRXGRG"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };