"use strict"

const friends = ["cyber", "venom", "eria", "edrine"];

console.log(`Jack's has ${friends.length} friends a, his bestfriend is ${friends[0]} and his worst friend is ${friends[friends.length - 1]}`);

const eria = {
    "firstName": "Cyber",
    "lastName": "Venom",
    birthYear: 2001,
    "friends": friends,
    "job": "Software developer",
    hasDriversLicense: true,

    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    }
}

console.log(`${eria.firstName} has ${eria.friends.length} friends and his bestfriend is ${eria.friends[0]};`)

let owner =  eria.hasDriversLicense == true ? "has a driver's license" : "Lacks drivr's licence";
console.log(owner)

console.log(`${eria.firstName} is a ${eria.calcAge()} year old ${eria.job} and ${(eria.hasDriversLicense == true ? "has a drivers license" : "lacks a driver's licence")}`);
