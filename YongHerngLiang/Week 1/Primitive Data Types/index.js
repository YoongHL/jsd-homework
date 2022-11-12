//The Age Calculator
let currentYear = new Date().getFullYear();
let birthYear = 1990;

let calAge1 = currentYear - birthYear - 1;
let calAge2 = currentYear - birthYear;

console.log("They are either " + calAge1 + " or " + calAge2);

//The Lifetime Supply Calculator
console.log("")
let currentAge = prompt("Please key in current age");
let maximumAge = prompt("Please key in maximum age");
let amountPerDay = prompt("Please key in the amount per day");
let eatAmount = (maximumAge - currentAge) * 365 * amountPerDay

console.log("You will need " + eatAmount + " to last you until the ripe old age of X")

//The Geometrizer
console.log("")
const pi = 3.142
let radius = 5;
let circumference = 2 * pi * radius;
let area = pi * Math.sqrt(radius);

console.log("The circumference is " + circumference);
console.log("The area is " + area);

//The Temperature Converter
console.log("")
let celsiusOne = 35;
let farenheitOne = (celsiusOne * 9 / 5) + 32;
console.log(celsiusOne + "°C is " + farenheitOne + "°F")

let farenheitTwo = 95;
let celsiusTwo = (farenheitTwo - 32) * 5 / 9;
console.log(farenheitTwo + "°F is " + celsiusTwo + "°C")