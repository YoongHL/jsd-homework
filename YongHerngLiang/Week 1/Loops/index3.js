//The even/odd reporter
let num;

for (num = 0; num <= 20; num++) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

//Multiplication Table
console.log("")
let number;
let number2;

for (number = 0; number <= 12; number++) {
    for (number2 = 0; number2 <= 12; number2++) {
        console.log(number + " * "  + number2 + " = " + number*number2);
    }    
}

//The Grade Assigner
console.log("")
let testscore;

for (testscore = 60; testscore <= 100; testscore++) {
    if (testscore >= 90) {
        console.log("For " + testscore + ", you got an A")
    } else if (testscore >= 80 || testscore <= 89) {
        console.log("For " + testscore + ", you got a B")
    } else if (testscore >= 70 || testscore <= 79) {
        console.log("For " + testscore + ", you got a C")
    } else if (testscore >= 60 || testscore <= 69) {
        console.log("For " + testscore + ", you got a D")
    } else {
        console.log("For " + testscore + ", you got a F")
    }
}

//Golf
console.log("")
let par;
let score;

for (score = 1; score <= 8; score++) {
    par = Math.floor(Math.random() * 10)   

    if (score === 1) {
        console.log("Nickname is Hole in one")
    } else if (score <= par - 2) {
        console.log("Nickname is Eagle")
    } else if (score === par - 1) {
        console.log("Nickname is Birdie")
    } else if (score === par) {
        console.log("Nickname is Par")
    } else if (score === par + 1) {
        console.log("Nickname is Bogey")
    } else if (score === par + 2) {
        console.log("Nickname is Double Bogey")
    } else if (score >= par + 3) {
        console.log("Nickname is Not sure")
    }
}

//99 Bottles of Beer
console.log("");
for (let i = 99; i >= 0; i--) {

    let j = i-1;
    let lyrics1 = i + " bottles of beer on the wall, " + i + " bottles of beer";
    let lyrics2 = "Take one down and pass it around, " + j + " bottles of beer on the wall.";

    if (i === 0) {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log("");
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    } else if (i === 1) {
        console.log(lyrics1.replace(/bottles/g, "bottle"))
    }
     else {
        console.log(lyrics1)
    }

    if (j === 1) {
        console.log(lyrics2.replace(/bottles/g, "bottle"))
        console.log("")
    } else if (j > 0) {
        console.log(lyrics2);
        console.log("");
    }
}