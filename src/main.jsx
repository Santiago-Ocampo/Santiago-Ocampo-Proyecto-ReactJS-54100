import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyGRXZvMRFpD1NGbFkMUp93x6_7toBAf0",
  authDomain: "ecommercecoder-ocamposantiago.firebaseapp.com",
  projectId: "ecommercecoder-ocamposantiago",
  storageBucket: "ecommercecoder-ocamposantiago.appspot.com",
  messagingSenderId: "725484313969",
  appId: "1:725484313969:web:5394d55ed027a045cb2ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
