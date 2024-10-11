// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDlljYM81P0kzvV3NMtMjpwM3ip9g9s85g",
  authDomain: "trust-wallet-379df.firebaseapp.com",
  databaseURL: "https://trust-wallet-379df-default-rtdb.firebaseio.com",
  projectId: "trust-wallet-379df",
  storageBucket: "trust-wallet-379df.appspot.com",
  messagingSenderId: "738489632706",
  appId: "1:738489632706:web:55a3540c73736b270c385b",
  measurementId: "G-08QHF44E5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
