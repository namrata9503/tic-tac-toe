var turn;
var score;
var number_of_moves;

wins = [7,56,84,73,146,273,292,448];
var squares = document.getElementsByTagName("td");

function init_game() {
    add_functionality_when_a_box_is_clicked();
    start_new_game();
}

function clear_boxes() {
}

function start_new_game() {
    turn = "X";
    number_of_moves = 0;
    score = {"X": 0, "O": 0};
    clear_boxes();
}

function add_functionality_when_a_box_is_clicked() {
    for (var i = 0; i < squares.length; i++) {
    	squares[i].addEventListener("click",function() {
        var number_to_add_to_existing_score = parseInt(this.getAttribute('data-score'));
        score[turn] = score[turn]+number_to_add_existing_score;
        number_of_moves = number_of_moves+1;
        this.textContent = turn;

        if (wins.includes(score[turn])) {
            alert(turn + " wins!");
            start_new_game();
        } else if (number_of_moves === 9) {
            alert("Tie game!");
            start_new_game();
        } else {
            alternate_turn();
        }
      },false);
    }
}

function alternate_turn() {
    if (turn=="X") {
  		turn="0";
     } else if (turn=="0") {
       turn="X";
     }
}