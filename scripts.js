
let boardArr = [];

const tileAmt = 8;
const initCheckerAmt = 12;

let lightPieces = [];
let darkPieces = [];
let aaaa = 'lol';
let whiteTurn = true;
let pieceChosen = false;
let pieceChosenId;
let possibleSpaces = [];


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
      boardSpace.tileLocation = i + String.fromCharCode(64+j);
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
      tempPiece.x = boardArr[arrRun].x;
      tempPiece.y = boardArr[arrRun].y;
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
      tempPiece.x = boardArr[arrRun2].x;
      tempPiece.y = boardArr[arrRun2].y;
      boardArr[arrRun2].empty = false;
      arrRun2--;
      lightPieces.push(tempPiece);
    }
  }
}

function placePieces(){
  for(var i = 0; i < lightPieces.length; i++){
    const lPiece = document.createElement('div');
    lPiece.classList = "allPieces lightPieces activePiece";
    document.getElementById(lightPieces[i].tileLocation).appendChild(lPiece);
    lPiece.addEventListener('click', lightMove);
    //console.log(document.getElementById(''+lightPieces[i].tileLocation));

    const dPiece = document.createElement('div');
    dPiece.classList = 'allPieces darkPieces';
    document.getElementById(darkPieces[i].tileLocation).appendChild(dPiece);
  }

}

function highlightSpace(space, initSpace){

  if(space.empty){
    console.log(space);
    document.getElementById(space.tileLocation).style.cursor="pointer";
    possibleSpaces.push(document.getElementById(space.tileLocation));
    document.getElementById(space.tileLocation).style.backgroundColor="#6283ad";
    document.getElementById(space.tileLocation).addEventListener('click', function(){
      moveChecker(space, initSpace)
    });
  }
}

function moveChecker(thisSpace, checkerLoc){
  console.log(thisSpace);
  console.log(checkerLoc);


  for(var i = 0; i < lightPieces.length; i++){
    if(lightPieces[i].tileLocation == checkerLoc){
      console.log(lightPieces[i]);
      lightPieces[i].tileLocation = thisSpace.tileLocation;
      console.log(lightPieces[i]);
      for(var j = 0; j < possibleSpaces.length; j++){
        document.getElementById(possibleSpaces[j].id).style.cursor="default";
        document.getElementById(possibleSpaces[j].id).style.backgroundColor="#D18B47";
        console.log(possibleSpaces[j].id);
      }
      possibleSpaces = [];
    }
  }
}

function lightMove(event){

  if(!pieceChosen){
    pieceChosen = true;
    pieceChosenId = event.target.parentElement.id;
    event.target.style.boxShadow='4px 4px 2px black';
    event.target.style.margin="6px auto";

    for(var i = 0; i < lightPieces.length; i++){
      if(lightPieces[i].tileLocation == event.target.parentElement.id){
        if(lightPieces[i].crowned == false){
          for(var j = 0; j < boardArr.length; j++){
            if((boardArr[j].x == lightPieces[i].x - 1)){
              if(boardArr[j].y.charCodeAt(0) >= 65 && boardArr[j].y.charCodeAt(0) <= 72){
                if(boardArr[j].y.charCodeAt(0) + 1 == lightPieces[i].y.charCodeAt(0)){
                  highlightSpace(boardArr[j], event.target.parentElement.id);

                }
                else if(boardArr[j].y.charCodeAt(0) - 1 == lightPieces[i].y.charCodeAt(0)){
                  highlightSpace(boardArr[j], event.target.parentElement.id);
                }
              }
              //console.log(boardArr[j]);
            }
          }
        }
        console.log(lightPieces[i]);
        break;
      }
    }
  }
  else if(event.target.parentElement.id == pieceChosenId){
    event.target.style.boxShadow='none';
    event.target.style.margin="10px auto";
    for(var i = 0; i < possibleSpaces.length; i++){
      possibleSpaces[i].style.backgroundColor="#D18B47";
    }
    possibleSpaces = [];
    pieceChosen = false;
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
