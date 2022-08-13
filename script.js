const catsnd = document.querySelector('#cat');
const chickensnd = document.querySelector('#chicken');
const dogsnd = document.querySelector('#dog');
const ducksnd = document.querySelector('#duck');
const ferretsnd = document.querySelector('#ferret');
const goatsnd = document.querySelector('#goat');
const horsesnd = document.querySelector('#horse');
const mousesnd = document.querySelector('#mouse');
const pigsnd = document.querySelector('#pig');
const rabbitsnd = document.querySelector('#rabbit');
const robinsnd = document.querySelector('#robin')
const sheepsnd = document.querySelector('#sheep');

var allSound = document.querySelectorAll('audio');

function stopAllSound() {
    allSound.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
    })
}

function cat() {
    stopAllSound();
    catsnd.play();
}
function chicken() {
    stopAllSound();
    chickensnd.play();
}

function dog() {
    stopAllSound();
    dogsnd.play();
}

function duck() {
    stopAllSound();
    ducksnd.play();
}
function ferret() {
    stopAllSound();
    ferretsnd.play();
}
function goat() {
    stopAllSound();
    goatsnd.play();
}
function horse() {
    stopAllSound();
    horsesnd.play();
}
function mouse() {
    stopAllSound();
    mousesnd.play();
}
function pig() {
    stopAllSound();
    pigsnd.play();
}
function rabbit() {
    stopAllSound();
    rabbitsnd.play();
}
function robin() {
    stopAllSound();
    robinsnd.play();
}
function sheep() {
    stopAllSound();
    sheepsnd.play();
}



