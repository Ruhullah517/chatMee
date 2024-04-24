
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
firebase.initializeApp(firebaseConfig)

let appointments = firebase.database().ref("appointments");

// Function to handle form submission
document.getElementById("appointment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // get data from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;


    const validation = validateForm();
    if (validation) {
        saveAppointments(name, email, phone, date, time);
        alert("Appointment Booked!");
        window.location.href = "index.html";
    }
}

);
//set data structure in database
const saveAppointments = (name, email, phone, date, time) => {
    let setAppointments = appointments.push();
    setAppointments.set({
        Name: name,
        Email: email,
        Phone: phone,
        Date: date,
        Time: time
    });
}
//form validation
function validateForm() {
    let isValid = true;

    // Validate name field
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    if (name.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Validate email field
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate phone field
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (phone.trim() === "") {
        phoneError.textContent = "Phone is required";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Function to validate date format
    function isValidDate(date) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(date);
    }

    // Function to check if date is in the past
    function isPastDate(date) {
        const selectedDate = new Date(date);
        const currentDate = new Date();
        return selectedDate < currentDate;
    }

    // Validate date field
    const date = document.getElementById("date").value;
    const dateError = document.getElementById("dateError");
    if (date.trim() === "") {
        dateError.textContent = "Date is required";
        isValid = false;
    } else if (!isValidDate(date)) {
        dateError.textContent = "Invalid date format";
        isValid = false;
    } else if (isPastDate(date)) {
        dateError.textContent = "Date cannot be in the past";
        isValid = false;
    } else {
        dateError.textContent = "";
    }

    // Validate time field
    const time = document.getElementById("time").value;
    const timeError = document.getElementById("timeError");
    if (time.trim() === "") {
        timeError.textContent = "time is required";
        isValid = false;
    } else {
        timeError.textContent = "";
    }


    return isValid;
}