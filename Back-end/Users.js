
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
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
  const app = firebase.initializeApp(firebaseConfig);
  const loginDB = firebase.database().ref("registerForm");
  const analytics = getAnalytics(app);

  document.getElementById("loginForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    
    var name = getElementById("")
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }