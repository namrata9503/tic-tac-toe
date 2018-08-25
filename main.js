


 function clicked(event){ 
     console.log('Clicked')
 }

 var cells = document.getElementsByTagName('td');
 for(var i =0; i<cells.length; i++){
    cells[i].addEventListener('click',function clicked(event){ 
         console.log('Clicked')
     })
 }

function startGame(){
    document.turn="X";
    setMessage(document.turn+" gets to start the game..")
}

function setMessage(msg){
    document.getElementById("mesg").innerText=msg;
}
function nextMove(s)
{
    
        s.innerText=document.turn;
        if(document.turn=="X")
        {
            document.turn="O";
        }
        else{
            document.turn="X";
        }
        setMessage(document.turn+ " 's turn now..")
  
       
    }

