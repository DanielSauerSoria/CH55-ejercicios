/*
Sum of Resistors in Series
    Calculate the sum of all resistors connected in series.
    Examples:
    - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
    - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
    - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

    Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/

function sumOfResistors(resistorsArray){
    const resistorsAbs = resistorsArray.map((resistor) => Math.abs(resistor));
    const totalResistance = resistorsAbs.reduce((total,current) => total + current, 0);
    return `${totalResistance} Ohms`
}
console.log(sumOfResistors([-1, 5, 6, 3]));
console.log(sumOfResistors([14, 3.5, 6]));
console.log(sumOfResistors([8, 15, 100]));


/*
Number divided into halves
    Given a number, return the number divided into its halves in an array.
    Examples:
    - `numDiv(4)` should return `[2, 2]`.
    - `numDiv(10)` should return `[5, 5]`.
*/

const numDiv = function(number){
    const dividedNumber = [number/2, number/2];
    return dividedNumber;
}
console.log(numDiv(4));
console.log(numDiv(10));


/*
Secret Society
    Find the name of a secret society based on the first letter of each member's name.
    Examples:
    - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
    - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
    - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

const secretName = function(namesArray){
    let societyName = "";
    const sortedNames = namesArray.toSorted();
    sortedNames.forEach((name) => societyName = societyName + name[0]);
    return societyName;
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));


/*
Online status
    Display online status for a list of users.
    Example:
    - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

const onlineStatus = function(usersArray){
    let users = `${usersArray[0]}`;
    if(usersArray.length > 1){
        if(usersArray.length == 2){
            users = users + ` and ${usersArray[0]}`;
        } else {
            users = users + `, ${usersArray[1]}` + ` and ${(usersArray.length-2)} more`;
        }
    }
    users = users + " online";
    return users;
}
console.log(onlineStatus(['mockIng99']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', 'danSauer']));


/*
Array of Multiples
    Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
    Examples:
    - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
    - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

const arrayMultiplos = function(number, length){
    const numbersArray = [number];
    for (let i = 2; i <= length; i++) {
        numbersArray.push(number * i);
    }
    return numbersArray;
}

console.log(arrayMultiplos(2,10));
console.log(arrayMultiplos(17,6));

 

/*
Positive dominance in Array
    Write a function to determine if an array is positively dominant.
    An array is positively dominant when the majority of its elements are positive.
    Example:
    - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

const positiveDom = function(numbersArray){
    let positives = 0;
    let negatives = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] < 0){
            negatives++;
        } else {
            positives++;
        }
    }

    if (positives > negatives){
        return true;
    } else {
        return false;
    }
}
console.log(positiveDom([-1, -3, -5, 4, 6767]));