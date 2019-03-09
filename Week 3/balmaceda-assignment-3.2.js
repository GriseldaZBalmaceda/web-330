/*
============================================
; Title:  Balmaceda-assignment-3.2
; Author: Professor Krasso 
; Date:   9 March 2019
; Modified By: Griselda Balmaceda
; Description: Using the Factory Pattern 
;===========================================
*/

const header = require('../balmaceda-header.js');

console.log(header.display("Griselda", "Balmaceda", "Assignment 3.2"));
console.log("\n")

//creating 4 different classes
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
}

function Oracle(properties) {
    this.username = properties.username || "user1";
    this.password = properties.password || "secretPassword";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || "1.1"
}

function Informix(properties) {
    this.username = properties.username || "user1";
    this.password = properties.password || "notSoSecret";
    this.server = properties.server || "localhost:3000";
}

//databaseFactory function and if else blocks 
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function (properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    }
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle
    }
   if(properties.databaseType==="Informix"){
       this.databaseClass=Informix
   }
return new this.databaseClass(properties);
};

//creating different instances
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: "MySQL",
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle=oracleFactory.createDatabase({
    databaseType:"Oracle",
    username:"user2312",
    password:"password"
})
var informixFactory = new DatabaseFactory();
var informix=informixFactory.createDatabase({
    databaseType:"Informix",
    username:"user3434",
    password:"password"
})
//console logging oracle and informix instances
console.log(oracle);
console.log(informix);