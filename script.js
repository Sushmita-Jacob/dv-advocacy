// Variables
var factList = [
    "1/3 women are victims of relationship violence.",
    "1/7 men are victims of relationship violence.",
    "In 2023, 1349 female victims of DV cases were reported to Westchester law enforcement.",
    "In 2023, 250 male victims of DV cases were reported to Westchester law enforcement.",
    "According to the CDC, 1 in 12 teens experience physical dating violence.",
    "According to the CDC, 1 in 10 teens experience sexual dating violence.",
    "18% of LGBTQ+ youth experience physical dating violence.",
    "16% of LGBTQ+ youth experience sexual dating violence.",
    "26% of transgender youth experience physical dating violence.",
    "23% of trangender youth experience sexual dating violence.",
    "53% of Black transgender respondants have been sexually assaulted in their lifetime."
];
var fact = document.getElementById("fact");
var generator = document.getElementById("generator");
var count = 0;

generator.addEventListener("click", displayFact); // Checks for click of the button

function displayFact(){
    fact.classList.add("show"); // Shows fact when button is clicked
    fact.innerHTML = factList[count];
    count++; // Goes through each fact
    if (count == factList.length){ // Number of facts, can break if hardcoded
        count = 0; // Resets when done
    }
}