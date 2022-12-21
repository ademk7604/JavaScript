const txtNumberEl = document.querySelector("#txtNumb");
const btnGuessEl = document.querySelector("#btnGuess");
const btnStartEl = document.querySelector("#btnStart");
const gameTextEl = document.querySelector(".gameText");
const lifeEl = document.querySelector(".life");
let life = 5;

let randomNumber = 0;
const minRandomNumber = 1;
const maxRAndomNumber = 100;

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tahminEt = () => {
    let num = Number(txtNumberEl.value);
    num = num || 0;
    if (num === randomNumber) {
        gameTextEl.innerText = `${randomNumber} tebrikler`;
        reset();
    }
    else if (num > randomNumber) {
        gameTextEl.innerText = `${num} sayısı büyük, küçük sayı giriniz`;
        life--;
        lifeEl.innerText = heartLife(life);
    }
    else {
        gameTextEl.innerText = `${num} sayısı küçük, büyük sayı giriniz`;
        life--;
        lifeEl.innerText = heartLife(life);
    }
    txtNumberEl.value = "";
    txtNumberEl.focus();
}

btnGuessEl.addEventListener("click", tahminEt);
txtNumberEl.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) tahminEt();
});


 