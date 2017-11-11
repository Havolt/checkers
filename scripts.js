
let boardArr = [];

let lightPieces = [];
let darkPieces = [];


function buildBoard(){

  let colorBool = true;
  let firstTime = true;

  for(var i = 1; i < 9; i++){
    for(var j = 1; j < 9; j++){
      if(j == 1 && firstTime == false){
        colorBool = !colorBool;
      }
      let boardSpace = {};
      boardSpace.x = i;
      boardSpace.y = String.fromCharCode(64+j);
      boardSpace.empty = true;
      if(colorBool == true){
        boardSpace.color = "light";
        colorBool = !colorBool;
        boardSpace.legalPlay = false;
      }else{
        boardSpace.color = "dark";
        colorBool = !colorBool;
        boardSpace.legalPlay = true;
      }
      firstTime = false;
      boardArr.push(boardSpace);

      const tileMaker = document.createElement('div');
      if(boardSpace.color == "light"){
        tileMaker.classList += "tile lightTile";
      }
      else{
        tileMaker.classList += "tile darkTile";
      }
      tileMaker.id = boardSpace.x + boardSpace.y;
      app.appendChild(tileMaker);
      console.log(boardSpace);
    }
  }
}

function buildPieces(){
  
}



(function init(){
  buildBoard();
  buildPieces();
})();
