console.log("-----1uzduotis-----");

for (let i = 0; i < 10; i++) {
    console.log("labas " + i);

}

console.log("-----2uzduotis-----");

for (let i = 0; i < 10; i++) {

    console.log(i);

}

console.log("-----6uzduotis-----");

// let i = 0
// while (i < 3) {
//     console.log("while " + i);
//     i++;

// }

for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("-----7uzduotis-----");


// for (let i = 10; i < 50; i++) {
//     if (i % 2 == 0) {
//         if (i == 10) { continue; };
//         console.log(i);
//     };

// }

for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        if (i % 10 == 0) { continue; };
        console.log(i);
    };
}



console.log("-----3uzduotis-----");

let plant = ["Bamboo", "Cactus", "Weed", "Orchid", "Bananas", "Olive", "Grapes", "Cacao", "Coffee", "Rose"];
console.log(plant);


console.log("-----4uzduotis-----");

// console.log(plant[0]);
// console.log(plant[1]);
// console.log(plant[2]);
// console.log(plant[3]);
// console.log(plant[4]);
// console.log(plant[5]);
// console.log(plant[6]);
// console.log(plant[7]);
// console.log(plant[8]);
// console.log(plant[9]);
// console.log(plant[10]);

for (let i = 0; i < plant.length; i++) {
    console.log(plant[i] + " " + i);
}



console.log("-----5uzduotis-----");



for (let i = plant.length - 1; i >= 0; i--) {
    console.log(plant[i] + " " + i);
}



console.log("-----8uzduotis-----");


