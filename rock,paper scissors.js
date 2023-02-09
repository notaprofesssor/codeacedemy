console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error! different type syntax");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "sorry ,computer won";
    } else {
      return "congratulations, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "sorry ,computer won";
    } else {
      return "congratulations, you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "sorry ,computer won";
    } else {
      return "congratulations, you won!";
    }
  }
};
const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("you threw: " + userChoice);
  console.log("the computer Threw; " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
