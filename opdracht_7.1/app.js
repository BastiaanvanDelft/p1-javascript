const budget = 100;
let priceprompt =  prompt("Hoeveel kost het product dat je wilt kopen?");
// const product = priceprompt;

if (budget >= priceprompt) {
    document.getElementById("prijs").innerText = "U heeft genoeg geld!"
    document.getElementById("prijs").style.color = "green"
} else {
    document.getElementById("prijs").innerText = "Helaas, te weinig geld."
    document.getElementById("prijs").style.color = "red"
}