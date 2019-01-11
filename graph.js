  var ctx, width, height, canvas, color, x=width/2;
  var starttime = {
	  start : 0,
	  timepassed :0
  };
  
  function init(){
	canvas = document.getElementById('canv');
	ctx = canvas.getContext('2d');
	width = canvas.width;
	height = canvas.height;
  };
  
  function fillAll(color){
	  ctx.fillStyle = color;
	  ctx.fillRect(0,0,canvas.width,canvas.height);
  };
  
  function drawline(color){
	  ctx.fillStyle = color;
	  ctx.fillRect((canvas.width/2)-2,0,4,canvas.height);
  };  
   
  function drawImg(img,x,y,width,height) { 
    var pic = new Image();   
	pic.src = img;
	ctx.drawImage(pic, x, y, width, height);
  };
  
  function display(disp){
	 document.getElementsByClassName("cash")[0].style.display = disp;
     document.getElementsByClassName("cash")[1].style.display = disp;	 
  }
  
  function endgamedisplay(str){  
	  for (i=0; i<document.getElementsByClassName("endgame").length; i++){
		  document.getElementsByClassName("endgame")[i].style.display = "none";
	  };
	  document.getElementById("finish").innerHTML = str;
	  document.getElementById("finish").style.display = "block";
  };