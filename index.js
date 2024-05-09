const choices = ["Rock", "Paper", "Scissors"];
const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let pscore = 0;
let cscore = 0;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let res = "";

    if(playerChoice == computerChoice){
        res = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "Rock":
                res = (computerChoice === "Paper") ? "You LOST !!" : "You WON !!";
                break;

            case "Paper":
                res = (computerChoice === "Rock") ? "You WON !!" : "You LOST !!";
                break;

            case "Scissors":
                res = (computerChoice === "Paper") ? "You WON !!" : "You LOST !!";
                break;        
        }
    }
    player.textContent = `PLAYER : ${playerChoice}`;
    computer.textContent = `COMPUTER : ${computerChoice}`;
    result.textContent = res;
    result.classList.remove("greenText", "redText");
    switch(res){
        case "You WON !!":
            result.classList.add("greenText");
            pscore++;
            playerScore.textContent = pscore;
            break;
        case "You LOST !!":
            result.classList.add("redText");
            cscore++;
            computerScore.textContent = cscore;
            break;     
    }
}