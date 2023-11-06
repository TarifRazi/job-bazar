// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCgjAhUvszgdjMfmT3ADGFwcYw6o0knjNY",
  authDomain: "job-bazar-eaf00.firebaseapp.com",
  projectId: "job-bazar-eaf00",
  storageBucket: "job-bazar-eaf00.appspot.com",
  messagingSenderId: "1059885625322",
  appId: "1:1059885625322:web:0ab2106e4279c7acdb0c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app