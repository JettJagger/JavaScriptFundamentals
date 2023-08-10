let birthYear = 1991;
let birthMonth = 8;
let birthDay = 12;

let currentDate = new Date();

let birthday = new Date(birthYear, birthMonth, birthDay);

let timeDifference = currentDate - birthDay;

let daysSinceBirthday = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(`Days since my birthday: ${daysSinceBirthday} days`);