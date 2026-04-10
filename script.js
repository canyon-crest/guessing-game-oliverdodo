// add javascript here
let guess = 0;
let answer = 0;
let guessCount = 0;
let range = 0;
const scores = []; 
let name = ""
let startTime = 0;
let fastest = Infinity;
let totalTime = 0;

document.getElementById("playBtn").addEventListener
("click",play)
document.getElementById("guessBtn").addEventListener("click", makeGuess)
document.getElementById("giveUpBtn").addEventListener("click", giveUp)
function play(){
    name = prompt("What is your name?")
     name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    let levels = document.getElementsByName("level");
    for(let i=0; i<levels.length; i++){
        if(levels[i].checked){
            range = parseInt(levels[i].value);
        }
        levels[i].disabled = true;
    }
    document.getElementById("msg").textContent = name + ", Guess a number 1-" + range;
    answer = Math.floor(Math.random() * range + 1)
    guessCount = 0;

    guessBtn.disabled = false;
    giveUpBtn.disabled = false;
    playBtn.disabled = true;
   startTime = new Date().getTime();
}

function makeGuess(){
    let guess = parseInt(document.getElementById("guess").value);
    if (isNaN(guess)) {
        msg.textContent = "Please enter a valid number";
        return;
    }
    guessCount++;
    if(guess == answer){
        msg.textContent = "Correct " + name + "!" + " It took " + guessCount + " tries.";
         updateScore(guessCount);
         updateTimers();
         resetGame();
    }
    else if(guess < answer){
        let distance = Math.abs(guess - answer);
        if (distance <= 2){
            msg.textContent = "Too low, you're hot!";
        }
        else if (distance <= 5){
            msg.textContent = "Too low, you're warm!"
        }
        else {
            msg.textContent = "Too low, you're cold!"
        }
    }
    else{
         let distance = Math.abs(guess - answer);
        if (distance <= 2){
            msg.textContent = "Too high, you're hot!";
        }
        else if (distance <= 5){
            msg.textContent = "Too high, you're warm!"
        }
        else {
            msg.textContent = "Too high, you're cold!"
        }
    }
}
   function updateScore(score){
    scores.push(score);
    wins.textContent = "Total wins: " + scores.length;
    let sum = 0
    for(let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    avgScore.textContent = "Average Score:" + (sum/scores.length).toFixed(1)
   

   scores.sort(function(a,b){return(a-b)})
   let lb = document.getElementsByName("leaderboard");
   console.log(lb)
   for(let i = 0; i < lb.length; i++){
    if(i < scores.length){
        lb[i].innerHTML = scores[i];
        console.log(lb[i].innerText)
    }
}
   }
function resetGame(){
    guess.value = "";
    guessBtn.disabled = true;
    giveUpBtn = true;
    playBtn.disabled = false;
    e.disabled = false;
    m.disabled = false;
    h.disabled = false;
}
function giveUp(){
    updateScore(range);
    updateTimers();
    resetGame();
}
function time(){
    let today = new Date();
    let day = today.getDate();
    let year = today.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let month = months[today.getMonth()];
    let suffix;
    if (day == 11 || day == 12 || day == 13){
        suffix = "th"
    }
    else if (day % 10 == 1){
        suffix = "st"
    }
    else if (day % 10 == 2){
        suffix = "nd"
    }
    else if (day % 10 == 3){
        suffix = "rd"
    }
    else {
        suffix = "th"
    }
   return month + " " + day + suffix + ", " + year + " " + hours + ":" + minutes + ":" + seconds;
}
document.getElementById("date").textContent = time();
setInterval(function(){
    document.getElementById("date").textContent = time();
}, 1000);
function updateTimers(){
    let elapsed = new Date().getTime() - startTime;
    let seconds = (elapsed / 1000).toFixed(1);
    if(seconds < fastest){
    fastest = seconds;
    document.getElementById("fastest").textContent = "Fastest: " + fastest + "s";
}
totalTime += parseFloat(seconds);
document.getElementById("avgTime").textContent = "Average Time: " + (totalTime / scores.length).toFixed(1) + "s";
}