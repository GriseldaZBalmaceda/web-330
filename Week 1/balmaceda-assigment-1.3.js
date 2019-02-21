/*
============================================
; Title:  Balmaceda-assignment-1.3
; Author: Professor Krasso 
; Date:   19 February 2019
; Modified By: Griselda Balmaceda
; Description: Creating constructors and creating instances 
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 1.3"));


//creating a Phone constructor object 
function Phone(manufacturer,model,color,price){
this.manufacturer=manufacturer;
this.model=model;
this.color=color;
this.price=price;

this.getPrice=function(){
    return this.price;
}

this.getModel=function(){
return this.model;
}

this.getDetails=function(){
 return  "\n Price:$"+ this.getPrice() 
        + '\n Model:'+  this.getModel() 
        + "\n Manufacturer:"+  this.manufacturer 
        + "\n Model:"+  this.model
        + "\n Color:" + this.color
        + "\n Price:" + this.price


}
}

//creating a new instance using the Phone Constructor
var pixel = new Phone('Google','Pixel','Black',999)

//showing that pixel inherited the getDetails function from the Phone prototype
console.log(pixel.getDetails());

//Testing 

// console.log(pixel)
// console.log(pixel.getPrice());
// console.log(pixel.getModel());