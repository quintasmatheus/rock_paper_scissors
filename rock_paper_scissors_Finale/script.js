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
  document.querySelector('[data-id="' + id + '"]').classList.add('is-active');
  };
  allSections[0].addEventListener('click', () => {
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

const playRound = (playerSelection, computerSelection) =>{
        
  if(playerSelection === computerSelection){
      lastResult.textContent = "This round was a drawlez goe"
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
}

        document.getElementById('rock').addEventListener("click", () =>{
          playRound('rock', getComputerChoice());
        });
        
        document.getElementById('paper').addEventListener("click", () =>{
          playRound('paper', getComputerChoice());
        });
        
        document.getElementById('scissors').addEventListener("click", () =>{
          playRound('scissors', getComputerChoice());
        });

const game = () => {
  let i = 0
  while(scoreUser < 5 && scoreCPU < 5) {
        console.log(playRound(playerSelection, computerSelection));
          const computerSelection = getComputerChoice();
          i++;
          playRound();
      }

      if (scoreCPU === scoreUser){
        finalScore.textContent = "Final Score -> its a draw";
      }
      else if(scoreCPU>scoreUser){
        finalScore.textContent = "Final Score -> CPU wins!!!";  
      } 
      else{
        finalScore.textContent = "Final Score -> User wins";   
      }
}
//event listeners para os buttons
/* const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
}); */


game();
  
