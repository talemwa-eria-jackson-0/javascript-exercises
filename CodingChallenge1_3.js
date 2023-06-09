
    /*
        There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    */

    //initializing dolphins scores
    let dolphinsScore1 = 97;
    let dolphinsScore2 = 112;
    let dolphinsScore3 = 101;

    //calculating dolphins average
    let dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

    //initializing koala's acores
    let koalasScore1 = 109;
    let koalasScore2 = 95;
    let koalasScore3 = 106;

    //calculating koalas average
    let koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

    //initializing minimum score
    const MIN_SCORE = 100;

    //comparing averages
    if (dolphinsAverage > koalasAverage) {
        if (dolphinsAverage >= MIN_SCORE) {
        console.log(`Dolphins won the competition with an average score of ${dolphinsAverage}`);            
        } else {
            console.log(`Dolphins had a higher average of ${dolphinsAverage} but it was below the minimum score`);
        }
    } else if(dolphinsAverage < koalasAverage) {
        if (koalasAverage >= MIN_SCORE) {
        console.log(`Koalas won the competition with an average score of ${koalasAverage}`);
        } else {
            console.log(`Koalas had a higher average of ${koalasAverage} but it was below the minimum score`);
        }
    } else {
        if (dolphinsAverage >= 100) {
        console.log(`Competiion had no winner. Both teams had the same points resulting into a draw`);
        } else {
            console.log(`Compeition had no winner. Both teams had the same points and their average of ${koalasAverage} was below the minimum score`);
        }
    }

