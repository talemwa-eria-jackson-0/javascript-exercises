"use strict"

const friends = ["cyber", "venom", "eria", "edrine"];

console.log(`Jack's has ${friends.length} friends a, his bestfriend is ${friends[0]} and his worst friend is ${friends[friends.length - 1]}`);

const eria = {
    "firstName": "Cyber",
    "lastName": "Venom",
    birthYear: 1992,
    "friends": friends,
    "job": "Software developer",
    hasDriversLicense: false,

    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return (`${this.firstName} is a ${this.calcAge()} year old ${this.job} and ${(this.hasDriversLicense == true ? "has a drivers license" : "lacks a driver's licence")}`)
    }
}

console.log(`${eria.firstName} has ${eria.friends.length} friends and his bestfriend is ${eria.friends[0]};`)

let owner =  eria.hasDriversLicense == true ? "has a driver's license" : "Lacks drivr's licence";
console.log(owner)

console.log(eria.getSummary());

const years = [2001, 2004, 1999, 1996, 1993];
let ages = [];

for (let age = 0; age < years.length; age++) {
    let realAge = 2025 - years[age];
    ages.push(realAge);
}

console.log(ages);