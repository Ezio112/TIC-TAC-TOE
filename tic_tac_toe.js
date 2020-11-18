var table=document.querySelector(".gameBoard");

function getBlock(i,j){
  return table.querySelector("."+"i"+i+"j"+j);
}
function drawX(i,j){
  var block=getBlock(i,j);
  block.addEventListener("click",function(){
    block.textContent="X";
  });
}
function drawO(i,j){
  var block=getBlock(i,j);
  block.addEventListener('dblclick',function(){
    block.textContent="O";
  });
}
for(var i=0;i<3;++i){
  for(var j=0;j<3;++j){
    drawX(i,j);
    drawO(i,j);
  }
}
document.querySelector("#restart").addEventListener('click',function(){
  for(var i=0;i<3;++i){
    for(var j=0;j<3;++j){
      getBlock(i,j).textContent="";
    }
  }
})
