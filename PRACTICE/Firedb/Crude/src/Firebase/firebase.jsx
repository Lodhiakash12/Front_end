// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTE1MISXifscDWK9rQ-NVOhQiPx3kGEbQ",
    authDomain: "crude-9fe9b.firebaseapp.com",
    projectId: "crude-9fe9b",
    storageBucket: "crude-9fe9b.firebasestorage.app",
    messagingSenderId: "415211082691",
    appId: "1:415211082691:web:c747fa2497dc75f09a6376",
    measurementId: "G-YPSM5KRFR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireDb = getFirestore(app)