//Write conditionals to sort three numbers 6, -5, 2. Output the results to the console.

// var arrange = function(num1, num2, num3){
//     //if num 1 max
//     while(num1 > num2 && num1 > num3){
//         console.log(num1);
//     if(num2 > num3){
//         console.log(num2);
//         console.log(num3);
//     }else{
//         console.log(num3);
//         console.log(num2);
//     }
//     break;
//     }   

//     // //if num2 max
//     while(num2 > num3 && num2 > num1){
//         console.log(num2);
//     if(num1 > num3){
//         console.log(num1);
//         console.log(num3);
//     }else{
//         console.log(num3);
//         console.log(num1);
//     }
//     break;
//     }

//     //if num3 max
//     while(num3 > num1 && num3 > num2){
//         console.log(num3);
//     if(num2 > num1){
//         console.log(num2);
//         console.log(num1);
//     }
//     if(num1 > num2){
//         console.log(num1);
//         console.log(num2);
//     }
//     break;
// }
// }
//arrange(1, -5, 23);



//Faster solution
var num1 = -6;
    num2 = -5;
    num3 = -2;

if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        console.log(num1 + " " + num2 + " " + num3);
    }else{
    console.log(num1 + " " + num3 + " " + num2)
    }   
}else if(num2 > num1 && num2 > num3){
        if(num1 > num3){
            console.log(num2 + " " + num1 + " " + num3);
        }else{
        console.log(num2 + " " + num3 + " " + num1)
        }   
}else if(num3 > num2 && num3 > num1){
        if(num2 > num1){
            console.log(num3 + " " + num2 + " " + num1);
        }else{
        console.log(num3 + " " + num1 + " " + num2)
        }   
}