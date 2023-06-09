
    /*
    *program to calclate the BMI basin on is formula
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

    let markHigherBMI1 = markBMI1 > johnBMI1;
    let markHigherBMI2 = markBMI2 > johnBMI2;
    
    console.log(
        "Below is the BMI" + 
        "\nMark's BMI 1: " + markBMI1 +
        "\nMark's BMI 2: " + markBMI2 +

        "\nJohn's BMI 1: " + johnBMI1 +
        "\nJohn's BMI 2: " + johnBMI2
    );
    console.log(`\n\nIs Mark's BMI 1 higher than John's:  ${markHigherBMI1}`);
    console.log(`\n\nIs Mark's BMI 2 higher than John's:  ${markHigherBMI2}`);
    