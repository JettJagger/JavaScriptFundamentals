const checkPassword = password => {
    if(password.length < 8){
        console.log("The password is too short.");
    } else{
        console.log("Password:" + password);
    }
};

// Test
let password1 = "abc123";
let password2 = "securePassword123";

checkPassword(password1);
checkPassword(password2);

const num = 15;

function checkDivisibility(num) {

    if (num % 3 === 0 || num % 5 === 0) {
        console.log("This number is divisible by 3 or 5.");
    } else {
        console.log("This number is not divisible by 3 or 5");
    }
}