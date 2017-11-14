
let boardArr = [];

const tileAmt = 8;
const initCheckerAmt = 12;

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

  let arrRun = 0;
  let arrRun2 = boardArr.length -1;

  for(var i = 0; i < initCheckerAmt; i++){
    const tempPiece = {};
    tempPiece.crowned = false;
    tempPiece.active = true;
    if(color == 'dark'){
      tempPiece.class = "allPieces darktPieces";
      while(!boardArr[arrRun].legalPlay || !boardArr[arrRun].empty){
        arrRun++;
      }
      tempPiece.tileLocation = boardArr[arrRun].x + boardArr[arrRun].y;
      boardArr[arrRun].empty = false;
      arrRun++;
      darkPieces.push(tempPiece);
    }
    else{
      tempPiece.class = "allPieces lightPieces";
      while(!boardArr[arrRun2].legalPlay || !boardArr[arrRun2].empty){
        arrRun2--;
      }
      tempPiece.tileLocation = boardArr[arrRun2].x + boardArr[arrRun2].y;
      boardArr[arrRun2].empty = false;
      arrRun2--;
      lightPieces.push(tempPiece);
    }
  }
}

function placePieces(){
  for(var i = 0; i < lightPieces.length; i++){
    const lPiece = document.createElement('div');
    lPiece.classList = "allPieces lightPieces";
    document.getElementById(lightPieces[i].tileLocation).appendChild(lPiece);
    //console.log(document.getElementById(''+lightPieces[i].tileLocation));

    const dPiece = document.createElement('div');
    dPiece.classList = 'allPieces darkPieces';
    document.getElementById(darkPieces[i].tileLocation).appendChild(dPiece);
  }

}


(function init(){
  buildBoard();
  buildPieces('light');
  buildPieces('dark');
  placePieces();
})();



console.log('light');
console.log(lightPieces);
console.log('dark');
console.log(darkPieces);
console.log('board');
console.log(boardArr);
