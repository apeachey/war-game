var scorePlayer = 0;
var scoreComp = 0;
var ranNumbP = Math.floor(Math.random() * 1000);
var ranNumbC = Math.floor(Math.random() * 1000);

function startGame () {
alert('The battle has begun.');
while (scorePlayer < 10 && scoreComp < 10) {
if (ranNumbP > ranNumbC) {
    console.log('Your forces killed ' + ranNumbP + ' Goblins. The Goblins killed ' + ranNumbC + ' Elves.');
    console.log('You have won this battle!');
    scorePlayer++;
    console.log('Battles won by Elves: ' + scorePlayer + ' --- Battles won by Goblins: ' + scoreComp);
    ranNumbP = Math.floor(Math.random() * 1000);
    ranNumbC = Math.floor(Math.random() * 1000);
} else if (ranNumbC > ranNumbP) {
    console.log('Your forces killed ' + ranNumbP + ' Goblins. The Goblins killed ' + ranNumbC + ' Elves.');
    console.log('The Goblins won this battle!');
    scoreComp++;
    console.log('Battles won by Elves: ' + scorePlayer + ' --- Battles won by Goblins: ' + scoreComp);
    ranNumbP = Math.floor(Math.random() * 1000);
    ranNumbC = Math.floor(Math.random() * 1000);
} else {
    console.log('Your forces killed ' + ranNumbP + ' Goblins. The Goblins killed ' + ranNumbC + ' Elves.');
    console.log('You and the Goblin\'s lost equal forces. Both retreat for the next battle.');
    console.log('Battles won by Elves: ' + scorePlayer + ' --- Battles won by Goblins: ' + scoreComp);
    ranNumbP = Math.floor(Math.random() * 1000);
    ranNumbC = Math.floor(Math.random() * 1000);
}
    
    if (ranNumbP > ranNumbC) {
        alert('Your forces were victorious in this battle. The Goblins are regrouping. Ready for the next battle?');
    } else {
        alert('The Goblins defeated your forces in battle. Time to regroup and plan another attack. Ready for the next battle?');
    }
    continue;
  
    scorePlayer === 10 || scoreComp === 10; 
    break;
}
    
    //Declare Winner
    if (scorePlayer > scoreComp) {
        alert('The war is over, you have won! You present the sword of the Goblin King to the Elvish Council. Be proud hero.');
    } else {
        alert('The Goblins have won the war. You have brought great shame to the elves!');
    }
    console.log('GAME OVER')
}
