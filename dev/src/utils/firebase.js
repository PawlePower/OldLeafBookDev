// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1sLuQxq3y5DMwsjcH9yxSwbDGKmcpFo0",
  authDomain: "devoldleafbook.firebaseapp.com",
  projectId: "devoldleafbook",
  storageBucket: "devoldleafbook.appspot.com",
  messagingSenderId: "91463218346",
  appId: "1:91463218346:web:1a5a99eb7c96841aeb0cd3",
  measurementId: "G-2YB5N0Y5JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);