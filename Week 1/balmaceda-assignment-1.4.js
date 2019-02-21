/*
============================================
; Title:  Balmaceda-assignment-1.3
; Author: Professor Krasso 
; Date:   19 February 2019
; Modified By: Griselda Balmaceda
; Description: Duck Typing 
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 1.4"));
console.log("\n")
function Car(model){
    this.model=model
}

function Truck(model,year){
this.model=model;
this.year=year
}

function Jeep(model,year,color){
this.model=model;
this.year=year;
this.color=color;
}
Car.prototype.start=function(){
    console.log("Car added to racetrack!")
};

Truck.prototype.start=function(){
    console.log("Truck added to racetrack!")
};

Jeep.prototype.start=function(){
    console.log("Jeep added to racetrack!")
}

racetrack=[];

function driveIt(vehicle){
vehicle.start();
racetrack.push(vehicle);
}

var audi = new Car('A4')
var chevy= new Truck('F-150',2018)
var jeep = new Jeep('Wrangler',2007,'red')


driveIt(audi);
driveIt(chevy);
driveIt(jeep);

console.log("\n -----The following have been added to your cart-----")
for(var i=0;i<racetrack.length;i++){
    console.log(racetrack[i].constructor.name + ':'+ racetrack[i].model)
}