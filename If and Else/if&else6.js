let time = 7;
let placeOfWork = 'Rare';
let townOfHome = "London";

if(time === 7){
    console.log("At" +  time + "I'm in" + townOfHome);
} else if (time === 8) {
    console.log("At" +  time + "I'm commuting");
} else if (time === 9){
    console.log("At" +  time + "I'm at" + placeOfWork);
} else{
    console.log("At" +  time + "I'm somewhere else");
}