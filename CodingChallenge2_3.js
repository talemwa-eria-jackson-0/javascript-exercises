//Coding Challenge #7

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const markObject = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.MBI;
    }
}

const johnObject = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.MBI;
    }
}

markObject.calcBMI();
johnObject.calcBMI();

if (johnObject.BMI > markObject.BMI) {
    console.log(`${johnObject.fullName}'s BMI (${johnObject.BMI}) is hiher than ${markObject.fullName}'s (${markObject.BMI})!!!`);
} else if (johnObject.BMI < markObject.BMI){
    console.log(`${markObject.fullName}'s BMI (${markObject.BMI}) is hiher than ${johnObject.fullName}'s (${johnObject.BMI})!!!`);
}

const value = johnObject.BMI;
console.log(value);