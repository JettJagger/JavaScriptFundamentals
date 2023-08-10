const isPalindrome = number => {
    const numString = number.toString();

    const reversedNumString = numString.split('').reverse().join('');

    return numString === reversedNumString;
}

const checkPalindrome = number => {
    if(isPalindrome(number)){
        console.log(`${number} is a palindrome.`);
    } else{
        console.log(`${number} is not a palindrome.`);
    }
}

// Test

const number1 = 121;
const number2 = 12345;
const number3 = 786899;

checkPalindrome(number1);
checkPalindrome(number2);
checkPalindrome(number3);