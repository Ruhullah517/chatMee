const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');

const diagnosisData = [
    { symptom: 'headache', diagnosis: 'You may have a migraine. Take some rest and consider consulting a doctor.' },
    { symptom: 'fever', diagnosis: 'It seems like you have a fever. Take some paracetamol and rest.' },
    { symptom: 'cough', diagnosis: 'You might have a common cold. Drink warm fluids and get plenty of rest.' }
];

submitBtn.addEventListener('click', handleUserInput);

function handleUserInput() {
    const symptom = userInput.value.trim();
    if (symptom === '') return;

    displayMessage('user', symptom);

    const diagnosis = getDiagnosis(symptom);
    displayMessage('bot', diagnosis);

    userInput.value = '';
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender + '-message');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getDiagnosis(symptom) {
    const matchedDiagnosis = diagnosisData.find(item => item.symptom === symptom.toLowerCase());
    return matchedDiagnosis ? matchedDiagnosis.diagnosis : 'Sorry, I cannot diagnose this symptom.';
}

// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});