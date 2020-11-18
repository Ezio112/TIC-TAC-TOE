var table=document.querySelector(".gameBoard"), turnShow=document.querySelector("#turn");
var scorePlayer1=0,scorePlayer2=0;
var currentPlayer=1,boxFilled=0;
var mark='X',otherMark='O';

function getBlock(i,j){
  return table.querySelector("."+"i"+i+"j"+j);
}

function markAt(i,j){
  return getBlock(i,j).textContent;
}
function checkWinner(){
  for(var i=0;i<3;++i){
    if(markAt(i,0)==markAt(i,1) && markAt(i,0)==markAt(i,2) && (markAt(i,0)=="X" || markAt(i,0)=="O")){
      return true;
    }
    if(markAt(0,i)==markAt(1,i) && markAt(0,i)==markAt(2,i) && (markAt(0,i)=="X" || markAt(0,i)=="O")){
      return true;
    }
  }
  if(markAt(0,0)==markAt(1,1) && markAt(0,0)==markAt(2,2) && (markAt(0,0)=="X" || markAt(0,0)=="O")){       ///Case of principal diagonal
    return true;
  }
  if(markAt(2,0)==markAt(1,1) && markAt(2,0)==markAt(0,2) && (markAt(1,1)=="X" || markAt(1,1)=="O")){     ///Case of off diagonal.
    return true;
  }
  return false;   //default case;
}
function resetButton(){
  boxFilled=0;
  currentPlayer=1;
  mark="X";
  otherMark="O";
  turnShow.textContent="Player "+currentPlayer+"\'s turn."

  for(var i=0;i<3;++i){
    for(var j=0;j<3;++j){
      getBlock(i,j).textContent="";
    }
  }
}

function draw(i,j){
  var block=getBlock(i,j);
  block.addEventListener("click",function(){
    //To not to edit already filled box
    if(block.textContent=='X' || block.textContent=='O'){
      return;
    }
    //mark a box and counting
    block.textContent=mark;
    ++boxFilled;

    if(boxFilled==9){
      alert("Its a draw!\nReseting the board.")
      resetButton();
    }
    else if(checkWinner()){
      alert("Player "+currentPlayer+" Won the game!.\nReseting the board.");
      if(currentPlayer==1){
        ++scorePlayer1;
        document.querySelector("#scorePlayer1").textContent="Player 1: "+scorePlayer1;
      }
      else{
        ++scorePlayer2;
        document.querySelector("#scorePlayer2").textContent="Player 2: "+scorePlayer2;
      }
      resetButton();
    }
    else{
      [mark,otherMark]=[otherMark,mark];        //Changing the to put board sign
      currentPlayer=3-currentPlayer;            //Changing the current player
      turnShow.textContent="Player "+currentPlayer+"\'s turn."
    }
  });
}

for(var i=0;i<3;++i){
  for(var j=0;j<3;++j){
    draw(i,j);
  }
}

document.querySelector("#restart").addEventListener('click',resetButton);
