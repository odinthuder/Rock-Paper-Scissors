console.log("Start The game ✔️");
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let Emojis = ["🧱","📝","✂️"];


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function letterToWords(letter){
    if (letter === "r") return "Rock 🧱";
    if (letter === "p") return "Paper 📝";
    return "Scissors ✂️";
}

function win(userChoice, computerChoice) {
    console.log("User Wins ✔️");
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${letterToWords(userChoice)} beats ${letterToWords(computerChoice)}. You Win! 🏆`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}

function lose(userChoice, computerChoice) {
    console.log("User Loses ❌");
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${letterToWords(userChoice)} loses ${letterToWords(computerChoice)}. You Lose! ❌`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice) {
    console.log("Its A draw 💤");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${letterToWords(userChoice)} equals ${letterToWords(computerChoice)}. Its a Draw! 💤`;
    document.getElementById(userChoice).classList.add('blue-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('blue-glow')}, 500);
}

function game(userChoice){
    const computerChoices = getComputerChoice();
    switch (userChoice + computerChoices){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoices);
            // User Winning Cases
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoices);
            // User Losing cases
            break;
        case "rr" :
        case "pp" :  
        case "ss" :
            draw(userChoice, computerChoices);
            // User Draw Cases
            break;
    }
}




function main(){
rock_div.addEventListener('click', function(){
    game("r")
    console.log("You Chose Rock : 🧱");
})

paper_div.addEventListener('click', function(){
    game("p")
    console.log("You Chose Paper : 📝");
})

scissors_div.addEventListener('click', function(){
    game("s")
    console.log("You Chose Scissors : ✂️");
})
}

main();