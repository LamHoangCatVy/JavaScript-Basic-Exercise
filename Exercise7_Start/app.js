//Remove all duplicates from this array
var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"];

//sorting
fruits.sort();

for(i = fruits.length; i >= 0; i--){
    if(fruits[i] === fruits[i - 1]){
        fruits.splice(i, 1)
    }
}

console.log(fruits)