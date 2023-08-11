const coffeeShop = {
    branch: "London",
    drinks: [
        "coke", 1.50, 
        "coffee", 3.50,
        "Tea", 2,
        "Iced Latte", 3
    ],
    food: [
        "cake", 1.50, 
        "toastie", 2.50,
        "pizza", 3,
        "wrap", 1.50
    ],
    drinksOrdered(drink){
        for (let i = 0; i < this.drinks.length; i++){
            if(drink == this.drinks[i]){
                console.log(`You ordered a ${drink} and it will cost ${this.drinks[i+1]}`);
            }
        }
    },
    foodOrdered(food){
        for (let i = 0; i < this.food.length; j++){
            if(food == this.food[j]){
                console.log(`You ordered a ${this.food[j]} and it will cost ${this.food[j+1]}`);
            }

        }
    },
}
coffeeShop.drinksOrdered('coke');