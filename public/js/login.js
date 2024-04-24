// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDL_lCa_G_xPRIpKKGKh7kGxRN5Rm8HjHw",
    authDomain: "chatme-af171.firebaseapp.com",
    databaseURL: "https://chatme-af171-default-rtdb.firebaseio.com",
    projectId: "chatme-af171",
    storageBucket: "chatme-af171.appspot.com",
    messagingSenderId: "627646908949",
    appId: "1:627646908949:web:c7cb8292ba807268a15c1c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


//submitBtn
const submit = document.getElementById("submit");
submit.addEventListener('click', async (e) => {
    e.preventDefault();
    //inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }


    try {
        // Create user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        //redirecting to main page
        window.location.href = "index.html";

    } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage);
        // Log error for debugging
        console.error(error);
    }
});

function validateEmail(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(String(email).toLowerCase());
}