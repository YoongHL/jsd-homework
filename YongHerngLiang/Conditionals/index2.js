//The World Translator
let language = prompt("Please enter the language (ENGLISH/FRENCH/MALAY)");

if (language.toUpperCase() == "ENGLISH") {
    console.log("Hello World");
} else if (language.toUpperCase() == "FRENCH") {
    console.log("Bonjour le monde");
} else if (language.toUpperCase() === "MALAY") {
    console.log("Hai dunia");
} else {
    console.log("Please enter the given language");
}

//The Grade Assigner
console.log("")
let testscore = 77;

if (testscore >= 90) {
    console.log("User score is 'A'")
} else if (testscore >= 80 || testscore <= 89) {
    console.log("User score is 'B'")
} else if (testscore >= 70 || testscore <= 79) {
    console.log("User score is 'C'")
} else if (testscore >= 60 || testscore <= 69) {
    console.log("User score is 'D'")
} else {
    console.log("User score is 'F'")
}

//Air Conditioning
console.log("")
let ACFunctional = false;
let currentTemp = 35;
let desiredTemp = 24;

if (ACFunctional === true && currentTemp > desiredTemp) {
    console.log("Turn on the A/C please")
} else if (ACFunctional === false && currentTemp > desiredTemp) {
    console.log("Fix the A/C now! It's hot!")
} else if (ACFunctional === false && currentTemp < desiredTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...")
}

//You and Your Government
console.log("")
let userAge = 35;

if (userAge >= 35) {
    console.log("You can vote AND hold any place in government!")
} else if (userAge >= 25) {
    console.log("You can vote AND run for the Senate!")
} else if (userAge >= 18) {
    console.log("You can vote!")
} else {
    console.log("You can't vote yet")
}

//Golf
console.log("")
let par = 1;
let score = 1;

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
 
//Serge Says
console.log("")
let message = "test?";

if (message.endsWith("\?")) {
    console.log("Sure.")
} else if (message === message.toUpperCase) {
    console.log("Woah, chill out!")
} else if (message.trim === "") {
    console.log("Fine. Be that way!")
} else {
    console.log("Whatever.")
}

//The Pluralizer
console.log("")
let noun = "test";
let num = 3;

if (num >= 2) {
    if (noun.endsWith("s") || noun.endsWith("x") || noun.endsWith("z") || noun.endsWith("sh")) {
        console.log(noun + "es");    
    } else if (noun.endsWith("y") && (noun[noun.length - 2] === "a" || noun[noun.length - 2] === "i" || noun[noun.length - 2] === "e" || noun[noun.length - 2] === "o" || noun[noun.length - 2] === "u")) {
        console.log(noun + "s");
    } else if (noun.endsWith("y")) {
        console.log(noun.substring(0, noun.length - 1) + "ies");
    } else if (noun.endsWith("o" && (noun[noun.length - 2] !== "a" || noun[noun.length - 2] !== "i" || noun[noun.length - 2] !== "e" || noun[noun.length - 2] !== "o" || noun[noun.length - 2] !== "u"))) {
        console.log(noun + "s");
    } else if (noun.endsWith("f") || noun.endsWith("fe")) {
        console.log(noun + "s");  
    } else if (noun.endsWith("us")) {
        console.log(noun.substring(0, noun.length - 2) + "i");
    } else if (noun.endsWith("is")) {
        console.log(noun.substring(0, noun.length - 2) + "es");
    } else if (noun.endsWith("ix") || noun.endsWith("ex")) {
        console.log(noun.substring(0, noun.length - 2) + "ices");
    } else if (noun.endsWith("eau")) {
        console.log(noun + "x");
    } else {
        console.log(noun + "s");
    }
} else {
    console.log(noun)
}

//The rest
console.log("")
let rockPlayer1 = true;
let paperPlayer1;
let scissorPlayer1;
let rockPlayer2;
let paperPlayer2 = true;
let scissorPlayer2;
let winCountPlayer1 = 0;
let winCountPlayer2 = 0;

while(winCountPlayer1 !== 2 && winCountPlayer2 !== 2) {
    if(rockPlayer1 == true && scissorPlayer2 == true) {
        winCountPlayer1 += 1;
    } else if(scissorPlayer1 == true && paperPlayer2 == true) {
        winCountPlayer1 += 1;
    } else if(paperPlayer1 == true && scissorPlayer2 == true) {
        winCountPlayer1 += 1;
    } else if(rockPlayer1 == true && paperPlayer2 == true) {
        winCountPlayer2 += 1;
    } else if(scissorPlayer1 == true && rockPlayer2 == true) {
        winCountPlayer2 += 1;
    } else if(paperPlayer1 == true && scissorrPlayer2 == true) {
        winCountPlayer2 += 1;
    }
}

if (winCountPlayer1 == 2 ) {
    console.log("Player 1 wins")
} else if (winCountPlayer2 == 2) {
    console.log("Player 2 wins")
}
