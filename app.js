var userScore = 0;
var compScore = 0;
// records the user choice
var userChoice;
var pcChoice;
// select the pc and user score span tag and the result tag
var userScoreSpan = document.getElementById("user-score");
var compScoreSpan = document.getElementById("comp-score");
var result_text = document.getElementById("result-text");
// select the icon/buttons
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

// select reset button
var reset_button = document.getElementById("reset-button");

generatePcChoice();
/*
---  Quando o botao for clicado: ---
"OK" 1- guardar a escolha do usuario
"OK" 2- gerar uma escolha aleatoria para o computador
"OK" 3- guardar a "escolha" do pc
"OK" 4- comparar as escolhas
"OK" 5- formatar e exibir texto do resultado
"OK" 6- atualizar scores e resetar scores
*/

function generatePcChoice() {
  var choicesArray = ["Rock", "Paper", "Scissors"];
  var choicePosition = Math.floor(Math.random() * 3);
  return (choicesArray[choicePosition]);
}

reset_button.onclick = function() {
  resetScoreBoard();
};

rock.onclick = function() {
  userChoice = "Rock";
  pcChoice = generatePcChoice();
  compareChoices(userChoice, pcChoice);
};

paper.onclick = function() {
  userChoice = "Paper";
  pcChoice = generatePcChoice();
  compareChoices(userChoice, pcChoice);
};

scissors.onclick = function() {
  userChoice = "Scissors";
  pcChoice = generatePcChoice();
  compareChoices(userChoice, pcChoice);
};

function compareChoices(userChoice, pcChoice) {
  if(pcChoice == userChoice) {
    result_text.innerHTML = pcChoice + " and " + userChoice + ". It's a draw!!!";
  } else {
    if(pcChoice === "Paper" && userChoice === "Rock") {
      result_text.innerHTML = pcChoice + " beats " + userChoice + ". You Lose!";
      // compScore++;
      updateCompScoreBoard();
      // compScoreSpan.innerHTML = compScore;
    } else if(pcChoice === "Rock" && userChoice === "Scissors") {
      result_text.innerHTML = pcChoice + " beats " + userChoice + ". You Lose!";
      // compScore++;
      updateCompScoreBoard();
      // compScoreSpan.innerHTML = compScore;
    } else if(pcChoice === "Scissors" && userChoice === "Paper") {
      result_text.innerHTML = pcChoice + " beats " + userChoice + ". You Lose!";
      // compScore++;
      updateCompScoreBoard();
      // compScoreSpan.innerHTML = compScore;
    } else {
      result_text.innerHTML = userChoice + " beats " + pcChoice + ". You Win!";
      //userScore++;
      updateUserScoreBoard();
      // userScoreSpan.innerHTML = userScore;
    }
  }
}
// update computer score
function updateCompScoreBoard() {
  compScore++;
  compScoreSpan.innerHTML = compScore;
}
// update user score
function updateUserScoreBoard() {
  userScore++;
  userScoreSpan.innerHTML = userScore;
}
// reset scores
function resetScoreBoard() {
  userScore = 0;
  compScore = 0;
  compScoreSpan.innerHTML = compScore;
  userScoreSpan.innerHTML = userScore;
  result_text.innerHTML = "Play the Rock Paper Scissors Game against the computer.";
}
