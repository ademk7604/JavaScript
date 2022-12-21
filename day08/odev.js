const txtScore1El = document.querySelector("#txtScore1");
const txtScore2El = document.querySelector("#txtScore2");
const txtScore3El = document.querySelector("#txtScore3");
const btnAverageEl = document.querySelector("#btnAverage");
btnAverageEl.addEventListener("click", () => {
    let midTerm1 = Number(txtScore1El.value);
    let midTerm2 = Number(txtScore2El.value);
    let final = Number(txtScore3El.value);
    let average = calculateAverage(midTerm1, midTerm2, final);
    if (average < 0) {
        alert("Yanlis not girdiniz");
    } else {
        alert(`Not ortalamanız = ${average} harf karşılığı = ${convertScoreToLetter(average)}`);
    }
});
const calculateAverage = (num1, num2, num3) => {
    if (((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100))) {
        return -1;
    }
    return (num1 * 0.3 + num2 * 0.3 + num3 * 0.4);
}

const convertScoreToLetter = (num) => {
    switch (true) {
        case num >= 90:
            return "A";
        case num >= 80:
            return "B";
        case num >= 70:
            return "C";
        case num >= 50:
            return "D";
        case num < 50:
            return "F";
    }
}
