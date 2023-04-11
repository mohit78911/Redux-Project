// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-d03MPhSDKV4BdBGJaHB-LfL-djxjs9I",
  authDomain: "redux-app-97087.firebaseapp.com",
  projectId: "redux-app-97087",
  storageBucket: "redux-app-97087.appspot.com",
  messagingSenderId: "105979008397",
  appId: "1:105979008397:web:e78a8e0f345f260d5459c4",
  measurementId: "G-Y9053LC6WN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
