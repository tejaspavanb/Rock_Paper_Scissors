const result=document.getElementById('result');
const computerChoices= document.getElementById('computer-choice');
const scoreComputer= document.getElementById('score_computer');
const scorePlayer= document.getElementById('score_player');
const userChoices= document.getElementById('user-choice');
scoreC=0;
scoreP=0;
function game(choice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice= choices[Math.floor(Math.random()*3)];
    const userChoice=choice;
    userChoices.textContent= `You: ${userChoice}`;
    computerChoices.textContent= `Computer: ${computerChoice}`;
    if(userChoice===computerChoice){
        
        result.textContent= 'It is a tie';
    }
    else{
    switch(userChoice){
        case 'rock':
            if(computerChoice==='paper'){
                result.textContent= 'You lose';
                scoreComputer.textContent="Computer Score: "+(++scoreC);
            }else{
                result.textContent= 'You win';
                scorePlayer.textContent="Player Score: "+ (++scoreP);
            }
            break;
        case 'paper':
            if(computerChoice==='scissors'){
                result.textContent= 'You lose';
                scoreComputer.textContent="Computer Score: "+(++scoreC);
            }else{
                result.textContent= 'You win';
                scorePlayer.textContent="Player Score: "+ (++scoreP);
            }
            break;
        case 'scissors':
            if(computerChoice==='rock'){
                result.textContent= 'You lose';
                scoreComputer.textContent="Computer Score: "+(++scoreC);                
            }else{
                result.textContent= 'You win';
                scorePlayer.textContent="Player Score: "+ (++scoreP);
            }
        }
    }   
        if(result.textContent==='You win'){
            result.classList.add("green");
        }
        else if(result.textContent==='You lose'){
            result.classList.add("red");
        }
        else{
            result.classList.remove("green","red");
        }
        computerChoice.textContent= `Computer: ${computerChoice}`;
        userChoice.textContent= `You: ${userChoice}`;
    
        if(scoreP>scoreC){
            scoreComputer.classList.remove("green","red");
            scorePlayer.classList.add("green");
            scoreComputer.classList.add("red");
        }
        else{
            scorePlayer.classList.remove("green","red");
            scoreComputer.classList.add("green");
            scorePlayer.classList.add("red");
        }

}