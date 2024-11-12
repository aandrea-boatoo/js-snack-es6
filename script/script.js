"use strict";

let decathlon = {
    nome: "Decathlon",
    weight: 25,
}

let graziella = {
    nome: "Graziella",
    weight: 10,
}

let bianchi = {
    nome: "Bianchi",
    weight: 15,
}

let wilier = {
    nome: "Wilier",
    weight: 7,
}

const collection =[
    decathlon, graziella, bianchi, wilier,
]
collection.sort((a,b) => a.weight - b.weight)
// console.log(sort)
console.log(collection)
const result = document.getElementById("weightBike")
result.innerHTML += `${collection[0].nome}, infatti pesa solo ${collection[0].weight} kg`;

