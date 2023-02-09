//Write a function that will return a fibonacci sequence. The legnth for the sequence will be passed in. The fibonacci sequence will be returned as an array. Test it with several numbers. REMINDER: a fibonacci sequence is where each number is equal to the sum of the previous two numbers (e.g. 0, 1, 1, 2, 3, 5 ...)

function formula2(length){
    let seq=[0, 1];
    for(let i = 2; i < length; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }
    console.log(seq);
}

console.log(formula2(15))