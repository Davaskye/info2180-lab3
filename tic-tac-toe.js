window.onload = function() {
    let boxes = document.getElementById("board").children;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.add("square");
        boxes[i].setAttribute("id", i);
        boxes[i].onclick = function(){
            clickTracker(boxes[i]);
        }

        boxes[i].onmouseover = function(){
            hoverTracker(boxes[i]);
        }

        boxes[i].onmouseout = function(){
            hoverTrackerRemoval(boxes[i]);
        }

    }
    
}


let gameOver = false; // this variable will handle if the game is over or not
let whichOne = 0; //if value is 0 - player is X AND if value is 1 - player is O.
const winningSquares = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6] 
];

console.log(winningSquares.includes([0,1,2]));
const currentPlays = ["","","","","","","","",""]; //keeps track of what was played

let clickTracker = function(currentBox){
      /*  let option = document.querySelector("square");*/

    if (whichOne == 0){
        player = "X";
        whichOne = 1;
        currentBox.innerHTML = "X";
        currentBox.classList.add("X");
        currentPlays[currentBox.id] = "X";
    }
    else{
        player = "O";
        whichOne = 0;
        currentBox.innerHTML = "O";
        currentBox.classList.add("O");
        currentPlays[currentBox.id] = "O";

    }
    winChecker();
    console.log(`${player} clicked at square ${currentBox.id}.`);
    console.log(currentPlays);
}

//This section deals with win checking
function winChecker () {
    for (let i = 0; i < 8; i++){
        let winCheck = winningSquares[i];
        let a = currentPlays[winCheck[0]];
        let b = currentPlays[winCheck[1]];
        let c = currentPlays[winCheck[2]];

        if (a == "" || b == "" || c==""){
            continue;
        }
        if (a == b && b ==c){
            gameOver = true;
            break;
        }
    }
    if (gameOver){
        let statusBox = document.getElementById("status");
        let winnerMsg = `Congratulations! ${player} is the Winner!`;
        statusBox.classList.add("you-won");
        statusBox.innerHTML = winnerMsg;
        console.log("Game Over Bro!!");
    }
}


//This section deals with hover tracking
let hoverTracker = function(currentBox){
    currentBox.classList.add("hover");
}

let hoverTrackerRemoval = function(currentBox){
    currentBox.classList.remove("hover");
}

//TO DO LIST BELOW:
//fill array in such a way that it would match winning numbers.
/*  for example, if index 2 is selected, fill index 2 with value whether X or Y. 
*/
//can removeDefault for stuff already filled.