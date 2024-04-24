// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

document.getElementById("appointmentBtn").addEventListener("click", function () {
    // Check if a user is logged in
    const user = auth.currentUser;
    if (user) {
        // User is logged in, redirect to the appointment form page
        window.location.href = "./appointment-form.html";
    } else {
        // User is not logged in, redirect to the login page
        window.location.href = "./Login.html";
    }
});

onAuthStateChanged(auth, (user) => {
    const authButtonsContainer = document.getElementById("authButtons");
    const logoutBtn = document.getElementById("logoutBtn");

    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        authButtonsContainer.style.display = "none";
        logoutBtn.style.display = "block";
        webChat();
        console.log(uid);
        nametag.textContent = `Welcome ${user.displayName}!`

        // ...
    } else {
        // User is signed out
        // ...
        authButtonsContainer.style.display = "block";
        logoutBtn.style.display = "none";

        nametag.textContent = ``


    }
});

const logoutButton = document.getElementById("logoutBtn");
logoutButton.addEventListener("click", () => {

    // Call the signOut method to log out the current user
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log("User signed out successfully");
            // Optionally, redirect the user to a different page after logout
            window.location.href = "index.html"; // Redirect to login page
        })
        .catch((error) => {
            // An error occurred while signing out
            console.error("Sign-out error:", error);
        });
});


//voiceflow installlation -->
function webChat() {

    (function (d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function () {
            window.voiceflow.chat.load({
                verify: { projectID: '6623a812b92923d8efa773ab' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
            });
        }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
}
