//Find out how many hours have passed since 1/1/2000.
var toDay = new Date(),
    newDate = new Date(2000/1/1),
    gap = Math.round(((toDay - newDate) / 1000)/3600) ;
//Print it to the console.

console.log("It has been " + gap + " hours since 2000/01/01")