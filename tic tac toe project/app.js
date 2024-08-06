let boxes = document.querySelectorAll(".xo");
let resetBtn = document.querySelector(".reset");
let result = document.querySelector(".text")

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((value) => {
  value.addEventListener("click", () => {
    if (turnO) {
      value.innerText = "O";
      turnO = false;
    } else {
      value.innerText = "X";
      turnO = true;
    }
    value.disabled = true;
    winningComb();
  });
});

const winningComb = () => {
  for (let pattern of winPatterns) {
       let pos0 = boxes[pattern[0]].innerText;
       let pos1 = boxes[pattern[1]].innerText;
       let pos2 = boxes[pattern[2]].innerText;

       if(pos0 != "" && pos1 != "" && pos2 != ""){
        if(pos0 === pos1 && pos1 === pos2){
            console.log("winner!", pos1)
            showWinner(pos1);
        }
       }
  }
};

const showWinner = (winner) => {
    result.innerText = `Winner!! is ${winner}`
    result.classList.remove("hide")
    disable();


}

const disable = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const enable = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = ""
  }
}

const resetgame = () =>{
  turnO = true;
  enable();
  result.classList.add("hide")
}

resetBtn.addEventListener("click", resetgame)