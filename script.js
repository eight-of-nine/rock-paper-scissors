//1. Get Computer Choice

// INIT function to get computer choice
function getComputerChoice() {

    // INIT randNumber variable for random number storage
    let randNum;

    // INIT computerChoice variable to store computer choice
    let compChoice;

    // CALCULATE a random number between 0 and 2
    randNum = Math.floor(Math.random() * 3);

    // IF randNum 0 THEN
    if (randNum === 0) {
        // SET computerChoice to 'Rock'
        compChoice = 'Rock';
        // ELSE IF randNum 1 THEN
    } else if (randNum === 1) {
        // SET computerChoice to 'Paper'
        compChoice = 'Paper';
        // ELSE
    } else {
        // SET computerChoice to 'Scissors'
        compChoice = 'Scissors';
        // ENDIF
    }
    //RETURN computerChoice
    return compChoice;
};