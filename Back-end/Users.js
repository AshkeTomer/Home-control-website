// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "furebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgVCo12LLjMfLMZXhQm-rHRGNwBrNDGlg",
  authDomain: "hc-db-2b6ae.firebaseapp.com",
  databaseURL: "https://hc-db-2b6ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hc-db-2b6ae",
  storageBucket: "hc-db-2b6ae.appspot.com",
  messagingSenderId: "722320579544",
  appId: "1:722320579544:web:e31080c19d0921af89f0ad",
  measurementId: "G-44MDKS9ZWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Input - register
const regFirstName = document.getElementById("firstName-register").value;
const regLastName = document.getElementById("lastName-register").value;
const regEmail = document.getElementById("email-register").value;
const regPassword = document.getElementById("password-register").value;
const regSubmit = document.getElementById("submit-register").value;

// Register
regSubmit.addEventListener("click", function(event) {
 event.preventDefault();

 const regEmail = document.getElementById("email-register").value;
 const regPassword = document.getElementById("password-register").value;

 createUserWithEmailAndPassword(auth, regEmail, regPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Creating your account...");
    window.location.href = "home.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
})});

// Input - Login
const loginEmail = document.getElementById("email-login").value;
const loginPassword = document.getElementById("password-login").value;

// Login
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Logging in...")
    window.location.href = "home.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });