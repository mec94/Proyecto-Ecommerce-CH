// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRDqjePKhOYVz_exHb8IvMDj0giuuN_D5",
  authDomain: "ecommerce-0337.firebaseapp.com",
  projectId: "ecommerce-0337",
  storageBucket: "ecommerce-0325.appspot.com",
  messagingSenderId: "520135656665",
  appId: "1:520135656669:web:dc39a6a71edb59a902c734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Referencia a la base de datos
export const db = getFirestore(app);


