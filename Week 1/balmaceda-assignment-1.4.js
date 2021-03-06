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

//creating constructors 
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
//adding start method to each constructors prototype
Car.prototype.start=function(){
    console.log("Car added to racetrack!")
};

Truck.prototype.start=function(){
    console.log("Truck added to racetrack!")
};

Jeep.prototype.start=function(){
    console.log("Jeep added to racetrack!")
}

//initializing empty racetrack array 
racetrack=[];

//driveIt function that calls start function and pushes vehicle to the racetrack array
function driveIt(vehicle){
vehicle.start();
racetrack.push(vehicle);
}

//creting new instances of Car,Truck and Jeep
var audi = new Car('A4')
var chevy= new Truck('F-150',2018)
var jeep = new Jeep('Wrangler',2007,'red')

//passing new instances to drive it functions 
driveIt(audi);
driveIt(chevy);
driveIt(jeep);

//outputting racetrack array.
console.log("\n -----The following have been added to your cart-----")
for(var i=0;i<racetrack.length;i++){
    console.log(racetrack[i].constructor.name + ':'+ racetrack[i].model)
}