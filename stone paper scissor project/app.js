let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let yourScorePara =  document.querySelector("#user-score");
let aiScorePara =  document.querySelector("#comp-score");



//function for getting computer choice
const getcompChoice = () =>{
    const compChoices = ["rock", "paper", "Scissor"]
    let randomIdx = Math.floor(Math.random()*3)
    return compChoices[randomIdx]
}


//fucntion for draw
const drawGame = () =>{
    console.log("draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "rgb(8, 0, 80)"
}

//for game winner
const winnerGame = (userWin, userChoice, compChoice) => {
       if(userWin){
        console.log("You win")
        msg.innerText = `You Won Your : ${userChoice} beats ai's : ${compChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        yourScorePara.innerText = userScore;
       }else{
        console.log("computer win")
        msg.innerText = `You lose ai's : ${compChoice} beats your : ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        aiScorePara.innerText = compScore;
       }
}



//playing the game
const playGame = (userChoice) =>{
      console.log("user's choice:" ,userChoice);
      const compChoice = getcompChoice();
      console.log("Comp choice:", compChoice);

      if(userChoice === compChoice){
        drawGame();
      }else{


         let userWin = true;
         if(userChoice === "rock"){
            //comp choices paper,Scissor
            userWin = compChoice === "paper"? false : true;
         }
         else if(userChoice ==="paper"){
            //comp choices rock,Scissor
            userWin = compChoice === "rock" ? true : false;
         }
         else if(userChoice ==="Scissor"){
            // comp choices rock,paper
            userWin = compChoice === "rock" ? false : true;
         }

        winnerGame(userWin , userChoice, compChoice);
      }
}







choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
                let userChoice = choice.getAttribute("id");
                playGame(userChoice);
    })
})