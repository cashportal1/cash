import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBD9sTH54_TeH0WHxRns_PWIoqORQ8Yg3Q",
    authDomain: "studio-6937798341-4c7bc.firebaseapp.com",
    projectId: "studio-6937798341-4c7bc",
    storageBucket: "studio-6937798341-4c7bc.firebasestorage.app",
    messagingSenderId: "561640793113",
    appId: "1:561640793113:web:84192e25e192dec5b83688"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;

// Digər script.js funksiyalarını da bura əlavə et (toggleForm, showToast və s.)
