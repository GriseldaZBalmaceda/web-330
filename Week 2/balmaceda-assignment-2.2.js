/*
============================================
; Title:  Balmaceda-assignment-2.2
; Author: Professor Krasso 
; Date:   1 March 2019
; Modified By: Griselda Balmaceda
; Description: Using Object.create to show prototypes
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 2.2"));
console.log("\n")

//creating person object literal 
var person={
    getAge:function(){
console.log("This person is " +this.age + " years old.")
    }
}
//creating new object and extending the person object prototype
var griselda=Object.create(person,{
   "age":{
       "value":21,
   },
   "fullname":{
       "value":"Griselda Balmaceda"
   }
})

console.log("This persons full name is", griselda.fullname)
griselda.getAge();
