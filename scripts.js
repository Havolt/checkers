
let boardArr = [];

const tileAmt = 8;
const initCheckerAmt = 20;

let lightPieces = [];
let darkPieces = [];
let aaaa = 'lol';


function buildBoard(){

  let colorBool = true;
  let firstTime = true;

  for(var i = 1; i < tileAmt+1; i++){
    for(var j = 1; j < tileAmt+1; j++){
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
      //console.log(boardMaker);
    }
  }
}


function buildPieces(color){


  for(var i = 0; i < initCheckerAmt; i++){

    const tempPiece = {};

    tempPiece.crowned = false;


    if(color == 'light'){
      tempPiece.class = "allPieces darkPieces";
      lightPieces.push(tempPiece);
    }
    else{
      tempPiece.class = "allPieces lightPieces";
      darkPieces.push(tempPiece);
    }

  }
}



(function init(){
  buildBoard();
  buildPieces('light');
  buildPieces('dark');
})();

console.log('light');
console.log(lightPieces);
console.log('dark');
console.log(darkPieces);
console.log('board');
console.log(boardArr);
