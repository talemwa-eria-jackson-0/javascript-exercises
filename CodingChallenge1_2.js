
    /*
    *program to calclate the BMI basin on is formula
    *Adding in the functionality of template string and if/else to calculate who has higher BMI
    */
    //declaring weights in kilograms
    let markWeight1 = 78;
    let markWeight2 = 95;
    let johnWeight1 = 92;
    let johnWeight2 = 85;

    //declaring heights in metres
    let markHeight1 = 1.69;
    let markHeight2 = 1.88;
    let johnHeight1 = 1.95;
    let johnHeight2 = 1.76;

    //declaring BMI and its formula
    let markBMI1 = (markWeight1) / (markHeight1 ** 2);
    let markBMI2 = (markWeight2) / (markWeight2 ** 2);

    let johnBMI1 = (johnWeight1) / (johnHeight1 ** 2);
    let johnBMI2 = (johnWeight2) / (johnHeight2 ** 2);

    if (markBMI1 > johnBMI1) {
        console.log(`Mark's BMI 1 of ${markBMI1}, is higher than John's BMI 1 of ${johnBMI1}`);
    } else if (markBMI1 < johnBMI1) {
        console.log(`John's BMI 1 of ${johnBMI1} is higher than Mark's BMI 1 of ${markBMI1}`);
    }

    if (markBMI2 > johnBMI2) {
        console.log(`Mark's BMI 2 of ${markBMI2}, is higher than John's BMI 2 of ${johnBMI2}`);
    } else if (markBMI2 < johnBMI2) {
        console.log(`John's BMI 2 of ${johnBMI2} is higher than Mark's BMI 2 of ${markBMI2}`);
    }    
    
