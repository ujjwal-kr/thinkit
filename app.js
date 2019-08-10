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


const db = firebase.firestore();
const settings = { timestampsInSnapshots: true};
db.settings(settings);

// App.js
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
    return str;
}

console.log('Loaded'); // connected to app engine
//dom loader
const nxt1 = document.getElementById('btn-1');
const nxt2 = document.getElementById('btn-2');
const nxt3 = document.getElementById('btn-3');
const nxt4 = document.getElementById('btn-4');
const nxt5 = document.getElementById('btn-5');
const nxt6 = document.getElementById('btn-6');
const rd = document.getElementById('reload');


const msg = document.getElementById('msg');
 // setDefaultStyles
nxt2.style = 'display: none;';
nxt3.style = 'display: none;';
nxt4.style = 'display: none;';
nxt5.style = 'display: none;';
nxt6.style = 'display: none;';
rd.style = 'display: none;';

//ADd listeners
nxt1.addEventListener('click', run2);
nxt2.addEventListener('click', run3);
nxt3.addEventListener('click', run4);
nxt4.addEventListener('click', run5);
nxt5.addEventListener('click', run6);
nxt6.addEventListener('click', run7);
rd.addEventListener('click', reload);

//Calculations here...

var random_raw = Math.random() * 10;
var random = Math.ceil(random_raw);


var random_raw2 = Math.random() * 10;
var random2 = Math.ceil(random_raw2);

var result = random/2 + random2;
console.log(result);

function send() {
  db.collection('numbers').add({
  number: result
 })
}
//send()

const box = document.getElementById('box');
box.textContent = inWords(result);
if (!inWords(result)) {
    box.textContent = result;
}

//run the functions
function run2(){
    msg.textContent = 'Double The Sum...';
    nxt1.style = 'display: none;';
    nxt2.style = 'display: inline;';
}
function run3(){
    msg.textContent = 'Add '+random+' to it.';
    nxt2.style = 'display: none;';
    nxt3.style = 'display: inline;';
}
function run4(){
    msg.textContent = 'Divide The Number By 2.';
    nxt3.style = 'display: none;';
    nxt4.style = 'display: inline;';
}
function run5(){
    msg.textContent = 'Subtract the number you have thought erlier from the number you got now..';
    nxt4.style = 'display: none;';
    nxt5.style = 'display: inline;'
}
function run6(){
    msg.textContent = 'Add '+random2+' to it.';
    nxt5.style = 'display: none;';
    nxt6.style = 'display: inline;';
}
function run7(){
    msg.textContent = 'The number is '+result+'!';
    nxt6.style = 'display: none;';
    rd.style = 'display: inline;';
}
function reload(){
    document.location.reload();
}




















