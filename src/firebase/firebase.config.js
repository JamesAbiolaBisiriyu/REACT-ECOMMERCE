// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHvXnlSqnej9qV8ASkbW23mAl_HlS2-k",
  authDomain: "ecommerce-react-js-fbabb.firebaseapp.com",
  projectId: "ecommerce-react-js-fbabb",
  storageBucket: "ecommerce-react-js-fbabb.appspot.com",
  messagingSenderId: "309125736259",
  appId: "1:309125736259:web:da26f8a235e00036faf1f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };