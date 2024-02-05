let userScore = 0;
let computerScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msgParagraph = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const drawScorePara = document.querySelector("#draw-score");
const changeName = document.querySelector("#enter");

const generateComputerChoice = () => {
  //rock,paper,scissor
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

getName = () => {
  let newname = window.prompt("Enter Your Game Name");
  changeName.innerText = `${newname}`;
  if (newname) {
    alert(`Hello ${newname}`);
    // console.log("HI");
  } else if ((newname = "" || null)) {
    newname = window.prompt("Enter Your Game Name");
    changeName.innerText = "you";
    // console.log("BYE");
  } else {
    newname = window.prompt("Enter Your Game Name");
    changeName.innerText = "you";
    // console.log("bye bye");
  }
};
getName();

const drawGame = () => {
  // console.log("Game Draw");
  msg.innerText = "Draw game, play again";
  msg.style.backgroundColor = "goldenrod";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you win");
    msg.innerText = `You Win your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    // console.log("you lose");
    msg.innerText = `Computer Win ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log(`User Choose ${userChoice}`);
  // Generate Computer Choice
  const computerChoice = generateComputerChoice();
  //   console.log(`Computer Choose ${computerChoice}`);

  if (userChoice == computerChoice) {
    //Game Draw
    drawScore++;
    drawScorePara.innerText = drawScore;
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    // console.log(`choice ${userChoice} is clicked`);
    playGame(userChoice);
  });
});
