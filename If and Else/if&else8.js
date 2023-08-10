let inputString = 'jskhsmafkjsgtgrjabmnb';
let vowels = 'aeiouAEIOU';

let lastIndex = -1;

for(let i = inputString.length - 1; i>= 0; i--) {
    if(vowels.includes(inputString[i])) {
        lastIndex = i;
        break;
    }
}

console.log("Index of the last vowel:", lastIndex);