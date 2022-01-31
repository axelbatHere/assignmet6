

function higherScore(score1, score2, score3) {
    const value = (score1 + score2 + score3) / 3;
    return value;
}


let Nets = higherScore(80, 82, 100);
let Knicks = higherScore(80, 90, 106);
if (Nets > Knicks && Nets >= 100) {
    console.log("Nets win");
} else if (Knicks > Nets && Knicks >= 100) {
    console.log("Knicks win");
} else{
    if (Nets >= 100) {
        console.log("Both have an equal score");
    } else {
        console.log("Not a high enough score");
    }
}

Nets = higherScore(98, 110, 101);
Knicks = higherScore(108, 92, 110);

if (Nets > Knicks && Nets >= 100) {
    console.log("Nets win");
} else if (Knicks > Nets && Knicks >= 100) {
    console.log("Knicks win");
} else{
    if (Nets >= 100) {
        console.log("Both have an equal score");
    } else {
        console.log("Not a high enough score");
    }
}


function tipCalculator(bill) {
    let value = (bill < 30 || bill > 100)  ? (bill * 0.2) : (bill * 0.15);
    return value;
}

let billo = 285;
console.log("The bill was " + billo + ", the tip was " + tipCalculator(billo) + ", and the total value is " + (billo + tipCalculator(billo)));
billo = 26;
console.log("The bill was " + billo + ", the tip was " + tipCalculator(billo) + ", and the total value is " + (billo + tipCalculator(billo)));
billo = 90;
console.log("The bill was " + billo + ", the tip was " + tipCalculator(billo) + ", and the total value is " + (billo + tipCalculator(billo)));

let ConvertCelsiusToFahrenheit = Celsius => (Celsius * 9/5) + 32;
let ConvertFahrenheitToCelsius = Fahrenheit => (Fahrenheit - 32) * 5/9;

console.log(100 + "°C is " + ConvertCelsiusToFahrenheit(100) + "°F");
console.log(0 + "°C is " + ConvertCelsiusToFahrenheit(0) + "°F");
console.log(10 + "°C is " + ConvertCelsiusToFahrenheit(10) + "°F");
console.log(32 + "°F is " + ConvertFahrenheitToCelsius(32) + "°C");
console.log(10 + "°F is " + ConvertFahrenheitToCelsius(10) + "°C");
console.log(102 + "°F is " + ConvertFahrenheitToCelsius(102) + "°C");