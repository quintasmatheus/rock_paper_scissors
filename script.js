// DISCLAIMER!!! -> vou fazer muitos comentários

const showWall = document.getElementById('start');
const wall = document.querySelector('.wall');
const intro = document.querySelector('.intro');

//função para o botao 
showWall.addEventListener('click', () => {
  // Show the wall
  wall.style.display = 'block';
  
  //setTimeout é uma built in function in JS
  //dizemos o que queremos fazer -> wall.style.display = 'none';
  // após o tempo que definimos -> 2100 ms
  // Wait for the animation to finish and hide the wall
  // primeiro argumento é a função -> function() {
   // wall.style.display = 'none';
  //}, o segundo é o tempo -> 2100

  setTimeout(function() {
    wall.style.display = 'none';
  }, 2100); // Adjust the time to match the duration of the animation
});


//função para mudar de section
const allSections = document.querySelectorAll('section');


window.addEventListener('DOMContentLoaded', () => {
  const activateSection = (id) => {
  for(const section of allSections) {
      section.classList.remove('is-active');
      intro.remove();
  }
  //adicionar a classe is-active ao id que queremos
  setTimeout(() => {
    document.querySelector('[data-id="' + id + '"]').classList.add('is-active');
  }, 2200);
};
  
  showWall.addEventListener('click', () => {
    activateSection(2);
});
});

// ----------------The game Itself ----------------------------------------------------------------

const score = document.querySelector('.score');
let scoreUser = 0;
let scoreCPU = 0;

function updateScore() {
  score.textContent = `${scoreUser} - ${scoreCPU}`;
  
}

const lastResult = document.querySelector('.lastResult');
lastResult.textContent = ''

const finalScore = document.querySelector('.finalScore');
finalScore.textContent = ''

const getComputerChoice = () =>{
        
  var choices = ["rock","paper","scissors"];
  var randomIndex = Math.floor(Math.random() * choices.length);
  /*console.log(choices[randomIndex]);
  console.log(randomIndex);
  */
  return choices[randomIndex];
}

let playerSelection = ""
let computerSelection=""


const playRound = (playerSelection, computerSelection) =>{

  //este fica em cima pois imaginemos que está 4-4 no inicio da ronda, apenas depois de correr o código todo é que um deles porventura(pode acontecer draw)
  // irá chegar a 5 de score e aí já não executamos novamente a função playRound
  if(scoreUser >= 5 || scoreCPU >= 5){
    return;
  }
        
  if(playerSelection === computerSelection){
      lastResult.textContent = "This round was a draw"
  }
 if(playerSelection === "rock" && computerSelection === "paper"){
  scoreCPU++;
  updateScore();
  lastResult.textContent = "You lose! Paper beats rock"
 }else if(playerSelection === "rock" && computerSelection === "scissors"){
  scoreUser++;
  updateScore();
  lastResult.textContent =  "You Win!Rock beats scissors"
 }
 
 if(playerSelection === "paper" && computerSelection === "scissors"){
  scoreCPU++;
  updateScore();
  lastResult.textContent = "You lose! Scissors beats paper"
 }else if(playerSelection === "paper" && computerSelection === "rock"){
  scoreUser++;
  updateScore();
  lastResult.textContent = "You Win!Paper beats rock"
 }

 if(playerSelection === "scissors" && computerSelection === "rock"){
  scoreCPU++;
  updateScore();
  lastResult.textContent =  "You lose! Rock beats scissors"
 }else if(playerSelection === "scissors" && computerSelection === "paper"){
  scoreUser++;
  updateScore();
  lastResult.textContent =  "You Win! Scissors beats paper"
 }

 if (scoreCPU >= 5 || scoreUser >= 5) {
  const resultParas = document.querySelector('.resultParas');
  resultParas.appendChild(createResetButton());
  if (scoreCPU > scoreUser) {
    finalScore.textContent = "Final Score -> CPU wins!!!";  
  } else if (scoreCPU < scoreUser) {
    finalScore.textContent = "Final Score -> User wins!!!";   
  }

}}

document.getElementById('rock').addEventListener("click", () =>{
  playerSelection = "rock"
  playRound(playerSelection, getComputerChoice());
});

document.getElementById('paper').addEventListener("click", () =>{
  playerSelection = "paper"
  playRound(playerSelection, getComputerChoice());
});

document.getElementById('scissors').addEventListener("click", () =>{
  playerSelection = "scissors"
  playRound(playerSelection, getComputerChoice());
});

// funçao para criar butao e adicionar um EventListener click, em que se
// dá reset às vars  e aos paras
const createResetButton = () => {
  const resetGameBtn = document.createElement("button");
  resetGameBtn.textContent = "Reset Game";
  resetGameBtn.id = "reset";
  resetGameBtn.addEventListener("click", () => {
    scoreUser = 0;
    scoreCPU = 0;
    updateScore();
    finalScore.textContent = "";
    lastResult.textContent = "";
    resetGameBtn.style.display = "none";
  });
  return resetGameBtn;
};




