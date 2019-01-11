

var _renderer = (function(){
	return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame  ||
	window.mozRequestAnimationFrame     ||
	window.oRequestAnimationFrame       ||
	window.msRequestAnimationFrame      ||
	function (callback) {
		setTimeout(callback, 1000/60);
	};
})();


var _engine = function () {
		console.log('Игровой цикл не инициализирован');
	};
	
var startGame = function (game) {
	if (typeof game == 'function') {
		_engine = game;
	}
    gameLoop();
};

var setGame = function (game){
	if (typeof game == 'function'){
		_engine = game;
	}
};

var gameLoop = function(){
	_engine();
	_renderer(gameLoop);
};

var Clear = function(){
	ctx.clearRect(0, 0, width, height);
	setGame(start);
	};


var NextLevel = function (){
	setGame(start);
};
   
   document.addEventListener("DOMContentLoaded", ready);
	function ready (){
       document.getElementById('pl1').onclick = function() {
       stavka = document.getElementById("stavka1").value;
	   document.getElementById("stavka1").value = "";
	   player.proverka(stavka);
	   };
	};
