import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTE1MISXifscDWK9rQ-NVOhQiPx3kGEbQ",
    authDomain: "crude-9fe9b.firebaseapp.com",
    projectId: "crude-9fe9b",
    storageBucket: "crude-9fe9b.firebasestorage.app",
    messagingSenderId: "415211082691",
    appId: "1:415211082691:web:c747fa2497dc75f09a6376",
    measurementId: "G-YPSM5KRFR8"
};

let app;
let analytics;
let fireDb;

try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    fireDb = getFirestore(app);
} catch (error) {
    console.error("Firebase initialization error", error);
}

export { fireDb };