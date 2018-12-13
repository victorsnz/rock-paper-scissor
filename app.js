var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertWord(word) {
    if (word == "r") return "Piedra";
    if (word == "p") return "Papel";
    return "Tijera"
}

function win(userChoice, computerChoice){
    var userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)} vence a ${convertWord(computerChoice)}. ¡Tu ganas!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')},300);
}

function lose(userChoice, computerChoice){
    var userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(userChoice)} pierde contra ${convertWord(computerChoice)}. ¡Tu pierdes!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')},300);
}

function draw(userChoice, computerChoice){
    var userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertWord(userChoice)} es igual a ${convertWord(computerChoice)}. ¡Es un empate!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')},300);
}

function game(userChoice){
    var computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
        console.log('rock');
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();