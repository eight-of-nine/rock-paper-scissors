//2. Get Computer Choice

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
        compChoice = 'rock';
        // ELSE IF randNum 1 THEN
    } else if (randNum === 1) {
        // SET computerChoice to 'Paper'
        compChoice = 'paper';
        // ELSE
    } else {
        // SET computerChoice to 'Scissors'
        compChoice = 'scissors';
        // ENDIF
    }
    //RETURN computerChoice
    return compChoice;
};

// 3. Get human choice

// INIT Function to get human choice
function getHumanChoice() {
    //Ask for human choice and store save it in variable.
    let humanChoice = prompt('Enter Rock, Paper or Scissors');

    //RETURN humanChoice
    return humanChoice;
};

function playGame() {
    // 4. Declare the players score variables

    // INIT variable sto store human and computer scores. Set default value to 0
    let humanScore = 0;
    let computerScore = 0;

    // 5. logic to play a single round

    //INIT play round function. Pass in the human and computer choices
    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        //INIT Storage for outcomes e.g. Draw, Win, Loose for both Computer and Human

        const humanWin = 'DAM! You won. Well done!';
        const compWin = 'I won! Well? What did you expect haha :P';
        const draw = 'We drew! I love a win win situation :P!';

        // IF human choice is equalled to computer choice THEN
        if (humanChoice === computerChoice) {
            // OUTPUT draw
            console.log(draw)
            // Increment scores
            humanScore++
            computerScore++
            // ELSE IF human choice is Rock and computer choice is Scissors THEN
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            //OUTPUT humanWin
            // console.log('Human Choice is ' + humanChoice + ' and computer choice is ' + computerChoice)
            console.log(humanWin)
            // Increment scores
            humanScore++
            // ELSE IF human choice is Paper and computer choice is Rock THEN
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            // OUTPUT humanWin
            // console.log('Human Choice is ' + humanChoice + ' and computer choice is ' + computerChoice)
            console.log(humanWin)
            // Increment scores
            humanScore++
            // ELSE IF human choice is Scissors and computer choice is Paper THEN
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            // OUTPUT humanWin
            // console.log('Human Choice is ' + humanChoice + ' and computer choice is ' + computerChoice)
            console.log(humanWin)
            // Increment scores
            humanScore++
            // ELSE
        } else {
            console.log(compWin)
            // console.log('Human Choice is ' + humanChoice + ' and computer choice is ' + computerChoice)
            computerScore++
        };
    };
    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice())
    };

    if (humanScore === computerScore) {
        console.log('No. Winners we drew. ' + 'Computer = ' + computerScore + ' ' + 'You = ' + humanScore)
    } else if (humanScore > computerScore) {
        console.log('Congratulations! You won the game!' + 'Computer = ' + computerScore + ' ' + 'You = ' + humanScore)
    } else {
        console.log('Better luck next time! ' + 'Computer = ' + computerScore + ' ' + 'You = ' + humanScore)
    }
};