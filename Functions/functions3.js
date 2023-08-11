const cashMachine = {
    pin: 1234,
    balance: 1000, 
    withdraw(amount,pin){
        if (pin != this.pin){
            console.log('Incorrect PIN. Please try again.');
            return;
        }
        if (amount <= 0) {
            console.log('Invalid withdrawal amount.');
            return;
        }
        if (amount > this.balance) {
            console.log('Insufficient balance.');
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawal successful. Remaining balance: ${this.balance}`);
    }
};

// Test 

cashMachine.withdraw(200, 1234);
cashMachine.withdraw(1500, 1234);
cashMachine.withdraw(100, 9999);
cashMachine.withdraw(-50, 1234);