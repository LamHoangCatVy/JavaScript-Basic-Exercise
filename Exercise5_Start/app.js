//Write a loop that will display a fibonacci sequence starting with 0 and 1 until the final number is less than 1000. I fibonancci sequence is where each number is equal to the sum of the previous two numbers (e.g. 0, 1, 1, 2, 3, 5 ...).
var fibString = "",
    num1 = 0,
    num2 = 1,
    newNum = 0;

while(newNum < 100){
    fibString += newNum + "    ";
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
}

console.log(fibString);
