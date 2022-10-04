const budget = 100;
const product = 60;

if (budget > product) {
    document.getElementById("prijs").innerText = "U heeft genoeg geld!"
    document.getElementById("prijs").style.color = "green"
} else {
    document.getElementById("prijs").innerText = "Helaas, te weinig geld."
    document.getElementById("prijs").style.color = "red"
}