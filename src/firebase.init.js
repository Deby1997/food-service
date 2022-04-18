// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_apikey,
    // authDomain: process.env.REACT_authDomain,
    // projectId: process.env.REACT_projectId,
    // storageBucket: process.env.REACT_storageBucket,
    // messagingSenderId: process.env.REACT_messagingSenderId,
    // appId: process.env.REACT_appId,
    apiKey: "AIzaSyB4-FhKVKw0M5ZDHCktFN50zPaCfdheTIU",
    authDomain: "car-service-8c40a.firebaseapp.com",
    projectId: "car-service-8c40a",
    storageBucket: "car-service-8c40a.appspot.com",
    messagingSenderId: "264735288659",
    appId: "1:264735288659:web:a4ac7047ed1ee6448285a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;