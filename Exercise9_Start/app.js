//Create an arrow function that will accept a number and return the number with an indication of whether it is Odd or Even. See if you can define the entire function on a single line using the ? : conditional operator.

var num,
    oddEven = (num) => num % 2 == 0 ?
    console.log(`${num} is an even number`) :
    console.log(`${num} is an odd number`);

console.log(oddEven(14));