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
// console.log(collection)
const result = document.getElementById("weightBike")
result.innerHTML += `${collection[0].nome}, infatti pesa solo ${collection[0].weight} kg`;

// SNACK 2
const footballSection = document.getElementById("football");
const milan = {
    nome: "milan",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let fiorentina = {
    nome: "fiorentina",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let lazio = {
    nome: "lazio",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let roma = {
    nome: "roma",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let napoli = {
    nome: "napoli",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let inter = {
    nome: "inter",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let albinoleffe = {
    nome: "albinoleffe",
    puntiFatti : 0,
    falliSubiti: 0, 
}

let juventus = {
    nome: "juventus",
    puntiFatti : 0,
    falliSubiti: 0, 
}

const team = [
    milan, fiorentina, lazio, roma, napoli, inter, albinoleffe, juventus,
]
point();
fouls();
console.log(team);
const nameFoul = []
noPoints();
console.log(nameFoul);
function point(){
    for(let i=0 ; i < team.length ; i++){
        team[i].puntiFatti = randomize(0, 80);
    }
}

function fouls(){
    for(let i=0 ; i < team.length ; i++){
        team[i].falliSubiti = randomize(0, 50);
    }
}

function noPoints(){
    for(let i=0 ; i < team.length ; i++){
        delete team[i].puntiFatti;
        nameFoul.push(team[i]);
    }
}