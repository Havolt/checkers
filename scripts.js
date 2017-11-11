
let boardArr = [];


function buildBoard(){

  let colorBool = true;


  for(var i = 1; i < 9; i++){
    for(var j = 1; j < 9; j++){

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

      console.log(boardSpace);
    }
  }
}



(function init(){
  buildBoard();
})();
