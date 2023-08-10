let pet = {
    name: "Rupert",
    typeOfPet: "cat",
    age: 2,
    color: "Cream and Brown",
    eat(){
        return `Your pet ${this.typeOfPet} called ${this.name} is eating.`},

    drink(){
        return `Your pet ${this.typeOfPet} called ${this.name} is drinking. `
    }
}

console.log(pet.drink());