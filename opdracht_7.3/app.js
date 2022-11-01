let num1 = 0;
let h1 = document.getElementById("number");

function countToTen() {
if (num1 > 9) {
    num1 = 0;
    h1.innerText = num1;
}else {
    num1 += 1;
    h1.innerText = num1;
}
}

