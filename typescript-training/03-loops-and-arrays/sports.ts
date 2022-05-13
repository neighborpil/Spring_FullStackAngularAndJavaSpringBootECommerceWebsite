let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for(let i=0; i<sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

console.log(" ");
// simplified loop

for(let tempSport of sportsOne) {
    console.log(tempSport);
}

console.log(" ");

for(let tempSport of sportsOne) {
    if(tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite!");
    }
    console.log(tempSport);
}
