let answerText = document.getElementById("answer")
let answer;

function multiply() {
    let input1 = document.getElementById("num1").value
    let input2 = document.getElementById("num2").value

    if(input1 || input2 <= 0) {
        answerText.innerText = "het getal is te laag"
    }
    else {
        answer = input1 * input2;
        answerText.innerText = answer
    }
}

function minus() {
    let input1 = document.getElementById("num1").value
    let input2 = document.getElementById("num2").value

    if(input1 || input2 <= 0) {
        answerText.innerText = "het getal is te laag"
    }
    else {
        answer = input1 - input2;
        answerText.innerText = answer
    }
}

function add() {
    let input1 = document.getElementById("num1").value
    let input2 = document.getElementById("num2").value
    
    if(input1 || input2 <= 0) {
        answerText.innerText = "het getal is te laag"
    }
    else {
        answer = +input1 + +input2;
        answerText.innerText = answer
    }
}

function devide() {
    let input1 = document.getElementById("num1").value
    let input2 = document.getElementById("num2").value

    if(input1 || input2 <= 0) {
        answerText.innerText = "het getal is te laag"
    }
    else {
        answer = input1 / input2;
        answerText.innerText = answer
    }
}