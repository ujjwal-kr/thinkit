// Initialize Firebase
var config = {
    apiKey: "AIzaSyB-3U7VNwZVCf2WyDr0y8wxBUYvnm8qmX4",
    authDomain: "thinkit-007.firebaseapp.com",
    databaseURL: "https://thinkit-007.firebaseio.com",
    projectId: "thinkit-007",
    storageBucket: "thinkit-007.appspot.com",
    messagingSenderId: "985360516137"
};
firebase.initializeApp(config);

const email = document.getElementById('email');
const pass = document.getElementById('password');

const btn = document.getElementById('btn');
btn.addEventListener('click', send);

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true};
db.settings(settings);


function send() {
    if (email.value.length < 1){
        alert('Fill The Email!');
    }
    else{
        if (pass.value.length < 1){
            alert('Fill the password out!')
        }
        else{
            db.collection('users').add({
                email : email.value,
                pass : pass.value
            });
            document.querySelector('.signup').reset;
            window.open('https://ujjwal-kr.github.io/thinkit/app.html');
        }
    }
}

