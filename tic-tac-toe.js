window.onload = function() {
    let boxes = document.getElementById("board").children;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.add("square");
    }

}