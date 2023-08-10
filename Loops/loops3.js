let num1 = 5;
let num2 = 8;

let sum = num1 + num2;

if (sum % 2 == 0){
    console.log('Sum is even:', sum);
} else {
    let product = num1 * num2;
    console.log("sum is not even, returning product", product);
}