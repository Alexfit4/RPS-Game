
const computerPlay = () => {
    let choices = ['Rock', 'Paper', 'Scissors']

    var item = choices[Math.floor(Math.random() * choices.length)];

    return item
}

let userScore = 0
let computerScore = 0

let playerSelection = prompt('Pick rock, paper, scissors')


const playRound = (playerSelection, computerSelection) => {   

    // * Rock Cases
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        userScore = userScore + 1 
        return `You win! Computer picked ${computerSelection}`
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        computerScore = computerScore + 1
        return `You lose! Computer picked ${computerSelection}`
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock'){
        return `It's a tie!! Both of you picked ${computerSelection}`
    }

        // * Paper Cases
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
         userScore = userScore + 1 
        return `You win! Computer picked ${computerSelection}`
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        computerScore = computerScore + 1
        return `You lose! Computer picked ${computerSelection}`
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper'){
        return `It's a tie!! Both of you picked ${computerSelection}`
    }

            // * Scissors Cases
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
         userScore = userScore + 1 
        return `You win! Computer picked ${computerSelection}`
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        computerScore = computerScore + 1
        return `You lose! Computer picked ${computerSelection}`
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors'){
        return `It's a tie!! Both of you picked ${computerSelection}`
    }
}

const game = (playerSelection, computerSelection) =>{
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerPlay())) 
        
    }

}

console.log(game('rock', computerPlay()))
console.log()
