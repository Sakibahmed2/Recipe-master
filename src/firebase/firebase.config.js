// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpNTh5f715kUxMBfIK5gYHdCAHli3-X2A",
    authDomain: "assignment-10-recipe-master.firebaseapp.com",
    projectId: "assignment-10-recipe-master",
    storageBucket: "assignment-10-recipe-master.appspot.com",
    messagingSenderId: "169474214184",
    appId: "1:169474214184:web:eee5a31cc637ebd0e5281d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;