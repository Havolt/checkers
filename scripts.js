
let boardArr = [];


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
      if(colorBool == true){
        boardSpace.color = "light";
        colorBool = !colorBool;
      }else{
        boardSpace.color = "dark";
        colorBool = !colorBool;
      }
      firstTime = false;

      const tileMaker = document.createElement('div');
      if(boardSpace.color == "light"){
        tileMaker.classList += "tile lightTile";
      }
      else{
        tileMaker.classList += "tile darkTile";
      }
      tileMaker.id = boardSpace.x + boardSpace.y;
      app.appendChild(tileMaker);

      console.log(tileMaker.classList);

      console.log(boardSpace);
    }
  }
}



(function init(){
  buildBoard();
})();
