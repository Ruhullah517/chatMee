// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
    e.preventDefault()

    //inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cnfrmPass = document.getElementById("cnfrmPass").value;

    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password match
    if (password !== cnfrmPass) {
        alert('Passwords do not match. Please re-enter your password.');
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Update user profile with name
        await updateProfile(auth.currentUser, { displayName: name });
        const user = userCredential.user.displayName;
        console.log("Acount created for" + user);
        
        // Redirect to login page
        window.location.href = "Login.html";
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