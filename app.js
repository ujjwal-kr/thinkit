// App.js

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

var random_raw = Math.random() * 100;
var random = Math.ceil(random_raw);


var random_raw2 = Math.random() * 100;
var random2 = Math.ceil(random_raw2);
console.log(random2);

var result = random/2 + random2;





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




















