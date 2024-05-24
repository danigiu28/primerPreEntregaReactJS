import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxU8TxEjgU54Fkg_Yb3d-X38BRzk8uZAc",
    authDomain: "pikabu-moda-infantil.firebaseapp.com",
    projectId: "pikabu-moda-infantil",
    storageBucket: "pikabu-moda-infantil.appspot.com",
    messagingSenderId: "265559307464",
    appId: "1:265559307464:web:461fc7d36887f7ee8921fd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
