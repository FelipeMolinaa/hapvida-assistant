import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLr6wfDMV5KMRD6qmLqgozQueDozXmEtI",
    authDomain: "amigon-ff3b2.firebaseapp.com",
    projectId: "amigon-ff3b2",
    storageBucket: "amigon-ff3b2.appspot.com",
    messagingSenderId: "532596612690",
    appId: "1:532596612690:web:0bd17ef11082b474e5c98b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };