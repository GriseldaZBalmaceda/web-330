/*
============================================
; Title:  Balmaceda-assignment-3.3
; Author: Professor Krasso 
; Date:   9 March 2019
; Modified By: Griselda Balmaceda
; Description: Using the Singleton Pattern
;===========================================
*/
const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 3.3"));
console.log("\n")
//creating new databaseSingeltonTest function
var databaseSingletonTest=(function(){
    var instance;
function createInstance(){
    var database = new Object("instance initialized")
    return database;
}
//making sure the instance is the same to all new instance created
return {
    getInstance:function(){
        if(!instance){
            instance = createInstance();
        }
        return instance;
    }
};
})();
//creating two different instance in databaseInit()
function databaseInit(){
    var databaseInstance1=databaseSingletonTest.getInstance();
    var databaseInstance2=databaseSingletonTest.getInstance();
 console.log(
     "Do the database have the same instance?" + (databaseInstance1 === databaseInstance2)
 )
}

databaseInit();