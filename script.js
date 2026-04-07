// add javascript here
let guess = 0;
let answer = 0;
let guessCount = 0;
let totalWins = 0;
const score[]; 

document.getElementById("playBtn").addEventListener
("click",play)

function play(){
    let range = 0;
    let levels = document.getElementsByName("level");
    for(let i=0; i<levels.length; i++){
        if(levels[i].checked){
            range = parseInt(levels[i].value);
        }
        levels[i].disabled = true;
    }
    document.getElementById("msg").textContent = "Guess a number 1-" + Range;
    answer = Math.floor(Math.random()*range)
    guessCount=0;

    guessBtn.disabled = false;
    giveUpBtn.disabled = false;
    playBtn.disabled = true;
}
