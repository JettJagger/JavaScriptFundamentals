//  A For loop is used when you know the number of iterations you want to perform in advance.

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Pros are: Its designed for a specific number of iterations. Loop varibles are scoped to the loop block.
// Cons are: It may not be suitable when the exact number of iterations is unknown.


// A 'While' loop is used when you want to repeatedly execute a block of code as long as the condition is true. 

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Pros are: It is suitable for scenarios where the number of iterations is not known beforehand. And it allows for flexible control over the loop condition. 
// Cons are: Need to manage loop varibles and conditions carefully to avoid infinate loops. 


// A 'Do...While' loop is simular to a 'while' loop, but the code block is executed at least once before checking the loop condition.

let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// Pros: It guarantees the code block will be executed at least once. And it is useful when you want to perform an action and then check the condition. 
// Cons: (Shares same cons with 'While' Loop.) Need to manage loop varibles and conditions carefully to avoid infinate loops. 


// The choice between these loop types depends on the specific requirements of the program. 