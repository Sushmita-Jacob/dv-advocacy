// Variables
var factList = [
    "1/3 women are victims of domestic violence",
    "1/7 men are victims of domestic violence",
];
var fact = document.getElementById("fact");
var generator = document.getElementById("generator");
var count = 0;

generator.addEventListener("click", displayFact); // Checks for click of the button

function displayFact(){
    fact.innerHTML = factList[count];
    count++; // Goes through each fact
    if (count == factList.length){ // Number of facts, can break if hardcoded
        count = 0; // Resets when done
    }
}