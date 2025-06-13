/*
User profile
    Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/
let counter = 0;
const username = prompt("Ingrese su nombre de usuario:");
const age = prompt("Ingrese su edad:");
const movies = [];
for(let i = 0; i < 3; i++){
    movies.push(prompt(`Ingrese la pelicula numero ${i+1}:`));
}

console.log(`Hola, soy${username} tengo ${age} años y mis peliculas favoritas son:`);

while(counter < movies.length){
    console.log(`Mi pelicula favorita número ${counter+1} es: ${movies[counter]}`);
    counter++;
}


/*
Highest number
    Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/
const numbers = [];
for (let i = 1; i <= 10; i++) {
    const number = parseInt(prompt(i + ".- Ingrese un numero:"));
    numbers.push(number);
}
const bigger = Math.max(...numbers);
console.log(`El mayor número es: ${bigger}`);


/*
Alarm
    Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
    Result example: "Time for bed after 10 seconds".
*/

const seconds = parseInt(prompt("Ingrese el numero de segundos para la alarma:"));
const message = prompt("Ingrese el mensaje de la alarma:");
setTimeout(() => {
        console.log(`${message} \n Ya pasaron ${seconds} segundos`);
      }, seconds * 1000);


/*
Palindrome
    Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

let sentence = prompt("Ingrese su oración:");
sentence = sentence.toLocaleLowerCase().replace(/\s/g, '');
const reverse = sentence.split('').reverse().join('');
if (sentence === reverse) {
    console.log("La oración es un palindromo");    
} else {
    console.log("La oración no es un palindromo");   
}


/*
Factorial
    Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

const numberForFactorial = parseInt(prompt("Ingrese el numero para realizar su factorial:"))
let factorial = 1;
for (let i = 1; i <= numberForFactorial; i++) {
    factorial = factorial * i;
}
console.log(`El factorial de ${numberForFactorial} es ${factorial}`);