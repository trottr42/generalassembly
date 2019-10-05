
document.getElementById('tude').onclick = highlightTude;
document.getElementById('dubai').onclick = highlightDubai;
document.getElementById('scuba').onclick = highlightScuba;
document.getElementById('ryan').onclick = highlightRyan;

const highlightTude() {
	clearPics();
	document.getElementById('tude').style.border = 5"green";
	document.getElementById('tudeCaption').style.color = "black";
};

const highlightDubai() {
	clearPics();
	document.getElementById('dubai').style.border = "green";
	document.getElementById('dubaiCaption').style.color = "black";
};

const highlightDubai() {
	clearPics();
	document.getElementById('scuba').style.border = "green";
	document.getElementById('scubaCaption').style.color = "black";
};

const highlightRyan() {
	clearPics();
	document.getElementById('ryan').style.border = "green";
	document.getElementById('ryanCaption').style.color = "black"
};

const clearPics() {
	document.getElementById('tude').style.border = "black";
	document.getElementById('tudeCaption').style.color = "white";
	document.getElementById('dubai').style.border = "black";
	document.getElementById('dubaiCaption').style.color = "white";
	document.getElementById('scuba').style.border = "black";
	document.getElementById('scubaCaption').style.color = "white";
	document.getElementById('ryan').style.border = "black";
	document.getElementById('ryanCaption').style.color = "white";
};

/* Rocks, Paper, Scissors *//*
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { return userInput}
  else {console.log('Error')}
};

const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random() * 3);
	switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {return 'Tie';}
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {return 'The computer wins.';} else {return 'You win!';}
}
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors') {return 'The computer wins.';} else {return 'You win!';}
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {return 'The computer wins.';} else {return 'You win!';}
  }
}

const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`Your choice is: ${userChoice}`);
  console.log(`The computer\'s choice is: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('paper');*/