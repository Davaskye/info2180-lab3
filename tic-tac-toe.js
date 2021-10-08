window.onload = function() {
    let boxes = document.getElementById("board").children;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.add("square");
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

let whichOne = 0 //if value is 0 - player is X AND if value is 1 - player is O.
const currentPlays = []; //keeps track of what was played

let clickTracker = function(currentBox){
      /*  let option = document.querySelector("square");*/

    if (whichOne == 0){
        player = "X";
        whichOne = 1;
        currentBox.innerHTML = "X";
        currentBox.classList.add("X");
        currentPlays.push(player);
    }
    else{
        player = "O";
        whichOne = 0;
        currentBox.innerHTML = "O";
        currentBox.classList.add("O");
        currentPlays.push(player);

    }
    console.log(`${player} clicked here.`);
}

let hoverTracker = function(currentBox){
    currentBox.classList.add("hover");
}
let hoverTrackerRemoval = function(currentBox){
    currentBox.classList.remove("hover");
}