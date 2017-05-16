var scorePlayer = 0;
var scoreComp = 0;
var ranNumbP = Math.floor(Math.random() * 13);
var ranNumbC = Math.floor(Math.random() * 13);

function startGame () {
alert('Start game?');
while (scorePlayer < 10 || scoreComp < 10) {
if (ranNumbP > ranNumbC) {
    console.log('Player drew a ' + ranNumbP + ' Computer drew a ' + ranNumbC);
    console.log('Point for you!');
    scorePlayer++;
    console.log('Score Player: ' + scorePlayer + ' Score Computer: ' + scoreComp);
    ranNumbP = Math.floor(Math.random() * 13);
    ranNumbC = Math.floor(Math.random() * 13);
} else if (ranNumbC > ranNumbP) {
    console.log('Player drew a ' + ranNumbP + ' Computer drew a ' + ranNumbC);
    console.log('Point for the computer!');
    scoreComp++;
    console.log('Score Player: ' + scorePlayer + ' Score Computer: ' + scoreComp);
    ranNumbP = Math.floor(Math.random() * 13);
    ranNumbC = Math.floor(Math.random() * 13);
} else {
    console.log('Player drew a ' + ranNumbP + ' Computer drew a ' + ranNumbC);
    console.log('Draw!');
    console.log('Score Player: ' + scorePlayer + ' Score Computer: ' + scoreComp);
    ranNumbP = Math.floor(Math.random() * 13);
    ranNumbC = Math.floor(Math.random() * 13);
}
    
    alert('End of round! Continue?');
    continue;
  
    scorePlayer === 10 || scoreComp === 10; 
    break;
}
    
    //Declare Winner
    if (scorePlayer > scoreComp) {
        console.log ('You win!');
    } else {
        console.log ('Computer wins!');
    }
}

