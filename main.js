
// window.onload = function() {
// 	startGame();
// }


function clicked(event) {
    console.log('Clicked')
}

var cells = document.getElementsByTagName('td');
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function clicked(event) {
        console.log('Clicked')
    })
}

function startGame() {
    // for(var i=1; i<cells.length;i++){
    //     restart(i);
    // }
    document.turn = "X";
    document.winner = null;
    setMessage(document.turn + " gets to start the game..");

}

function setMessage(msg) {

    document.getElementById("mesg").innerText = msg;
}
function change() {

    if (winGame(document.turn) ) {
        setMessage("congratulations " + document.turn + " won..");
        document.winner = document.turn;
    }
    else if (document.turn == "X") {
        document.turn = "O";
        setMessage(document.turn + " 's turn now..");
    }
    else {
        document.turn = "X";
        setMessage(document.turn + " 's turn now..");
    }
}
function nextMove(s){
    if( document.winner!=null){
        setMessage( document.turn + " alraedy won..");
    }
    else if (s.innerText != '') {
        s.innerText = document.turn;
        change();

    }
    else{
        setMessage(" pick other..");

    }
}


function win() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function clicked(event) {
            if (cells[0].innerText == "X" && cells[1].innerText == "X") {
                alert("win");
            }
            console.log(i + " " + document.turn + " current cell " + cells[i].innerText);
        })
    }

}
// win game
function winGame(a) {
    var result = false;
    if (checkCombo(1, 2, 3, a) ||
        checkCombo(4, 5, 6, a) ||
        checkCombo(7, 8, 9, a) ||
        checkCombo(1, 4, 7, a) ||
        checkCombo(2, 5, 8, a) ||
        checkCombo(3, 6, 9, a) ||
        checkCombo(1, 5, 9, a) ||
        checkCombo(3, 5, 7, a)) {

        result = true;
    }

    return result;
}
function checkCombo(a, b, c, letter) {
    var res = false;
    if (getCurrent(a) == letter && getCurrent(b) == letter && getCurrent(c) == letter) {
        res = true;
    }
    return res;

}
function getCurrent(idCell) {
    return document.getElementById(idCell).innerText;
}
function restartGame(){
     for(let i=1; i<=cells.length;i++){
         console.log(document.getElementById(i).innerText);
       //return document.getElementById(i).innerText="";
        return cells[i].innerText="";
         //restart(i);
         
    }
   
}