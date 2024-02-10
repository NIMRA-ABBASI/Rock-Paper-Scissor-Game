let userScore = 0;
let computerScore = 0;
let userwin = true;
const choice = document.querySelectorAll(".choice");

let user = document.querySelector("#user-score");
let computer = document.querySelector("#computer-score");

let msg = document.querySelector("#msg");

//get computer choice randomly
const generatecompchoice = () => {
  const option = ["Rock", "Paper", "Scissor"];
  const compchoiceindex = Math.floor(Math.random() * 3);
  return option[compchoiceindex]; 
};

//show the winner 
const showwinner = (userwin , userchoice , compchoice ) => 
{
    if(userwin === true)
    {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You win. Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computer.innerText = computerScore;
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const Game = (userchoice) => {

  const compchoice = generatecompchoice();

  if (userchoice === compchoice) 
  {
    //draw
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#262626";
  } 
  else 
  {
    if (userchoice === "Rock") {
        //compchoice = paper , scissor
      userwin = compchoice === "Paper" ? false : true;
    } 
    else if (userchoice === "Paper") {
         //compchoice = rock , scissor
        userwin = compchoice === "Rock" ? true : false;
    }
    else
    {
         //compchoice = paper , rock
        userwin = compchoice === "Paper" ? true : false;
    }
    showwinner(userwin ,userchoice , compchoice );
  }
};

choice.forEach((ch) => {
  ch.addEventListener("click", () => {
    const userchoice = ch.getAttribute("id");
    Game(userchoice);
  });
});
