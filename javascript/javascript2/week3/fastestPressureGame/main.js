const userInput = document.querySelector('#time-limit');
const startButton = document.querySelector('#start-button');
const countOfKeyL= document.querySelector('#count-l');
const countOfKeyS= document.querySelector('#count-s');
const infoMessage = document.querySelector('#info');
let timer = 0;
startButton.addEventListener('click' , ()=> {
    timer = userInput.value;
    if(!timer){
        infoMessage.innerHTML = ' π©Please enter the time limit : β²';
    } else{
        startGame();
    }
});
let countKeyL = 0;
let countKeyS = 0;
function countKeyPress(event){
    if(event.key === 'l'){
        countKeyL++;
        countOfKeyL.innerHTML = countKeyL;
    } else if(event.key === 's'){
        countKeyS++;
        countOfKeyS.innerHTML = countKeyS;
    } else{
        countKeyS = 0;
        countKeyL = 0;
    }
}
function startGame(){
    setTimeout(() => {
        document.removeEventListener('keydown', countKeyPress);
        infoMessage.innerHTML = 'Game is over';
        winnerFunction();
    }, timer * 1000);
}
document.addEventListener('keydown', countKeyPress);

const winner = document.getElementById('winner');
function winnerFunction(){
    if(countKeyL === countKeyS){
        winner.innerHTML = 'π€π€Game Draw β';
    } else if(countKeyL > countKeyS){
        winner.innerHTML = 'π Congrats π Player 1 is the winner';
    }else {
        winner.innerHTML = 'π Congrats π Player 2 is the winner';
    }
}



