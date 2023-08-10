const bobsFollowers = ["Moss", "Binx", "Rupert", "Peggy"];
const hannahsFollowers = ["Rupert", "Peggy", "Oggy", "Obi"];

for(let i = 0; i < bobsFollowers.length; i++) {
    for(let j = 0; j < hannahsFollowers.length; j++) {
        if(bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(bobsFollowers[i]);
        }
    }
}