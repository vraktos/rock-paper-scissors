// make a prompt to read user's input and make it case insensitive and save that input in a variable called 'userChoice'
let userChoice
let iaChoice 
function input () {
 userChoice = 
console.log ('you chose ',userChoice)
}

// make the computer choose between 3 choices and save that answer in a variable called 'iaChoice'
function iaChoose (min,max) {
    return Math.floor(Math.random ()*(max - min + 1)) + 1;
}
function toLetters (){
iaChoice = iaChoose(1,3)
if (iaChoice === 1) {
    iaChoice = 'rock'
} else if (iaChoice === 2) {
    iaChoice = 'paper'
} else {
    iaChoice = 'scissors'
}

console.log('computer chooses', iaChoice)
}
// declare a variable for the times user has won called 'userWins'
let userWins = 0

// declare a variable for the times ia has won called 'iaWins'
let iaWins = 0

// declare a function that compares both choices and determines who wins 

    function compare() {
    
    if (userChoice === 'rock' && iaChoice === 'paper') {
        iaWins = ++iaWins
    } 
    else if (userChoice === 'rock' && iaChoice === 'scissors') {
        userWins = ++userWins
    } 
    else if (userChoice === 'rock' && iaChoice === 'rock') {
    console.log('tie!')
    } 
    else if (userChoice === 'paper' && iaChoice === 'paper') {
        console.log('tie!')
    } 
    else if (userChoice === 'paper' && iaChoice === 'scissors') {
        iaWins = ++iaWins
    } 
    else if (userChoice === 'paper' && iaChoice === 'rock') {
        userWins = ++userWins
    }
    else if (userChoice === 'scissors' && iaChoice === 'paper') {
        userWins = ++userWins
    } 
    else if (userChoice === 'scissors' && iaChoice === 'rock') {
        iaWins = iaWins ++
    } 
    else if (userChoice === 'scissors' && iaChoice === 'scissors') {
        console.log('tie!')
    }
    console.log('Computer Score ',iaWins)
    console.log('User Score',userWins)


}
//while (userWins < 3 && iaWins < 3) {
    input ();
    iaChoose ()
    toLetters ()
    compare ();
  
}
if (userWins === 3) {
    console.log('You Win!')
} else if (iaWins === 3) {
    console.log('You lost!')
}



// declare a function that keeps count of rounds and stops when someone gets 3 wins
// check when the user or the ia wins and print 'you win' or 'you lose'


