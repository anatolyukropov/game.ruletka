  var roulet = {
	
	botsqtl : function(){
	   var bq = prompt('укажите количество ботов, не больше 3-ёх', 3);
	   let reg = /[0-3]{1}/;
	   if (reg.test(bq)){
	      qtt=parseInt(bq,10);
	      qtt=Math.ceil(qtt);
	      bots.qtt=qtt;
	      tabl.columns = qtt;
	      tabl.generate();
	      startGame(start);  
	      } else {
	          alert('вы ввели не разрещённое количество ботов, введите заново');
		      this.botsqtl(); 
		    };
	},
	
	nodes : [],
	
	add : function(x, y, w, h, img){
		var tmp = new _Enemy(x, y, w, h, img);
		this.nodes.push(tmp);
	},
	
	generate : function (){
		var sum = this.sum();
//		sum=this.sum();
		console.log(sum);
		var x =(-10900);
		var y =0;
		var w = player.width;
		var h = player.height;
		for (en in player.nodes){
			a=parseInt(player.nodes[en].stavka,10)
			i= Math.floor(120*(a/sum));
			img=player.nodes[en].img;
			for (j=0; j<i-1; j++){
				x=x+w;
				this.add(x,y,w,h,img);
			}
		}
		this.shuffle(this.nodes);
	},
	
	winner : function(){
		for (en in this.nodes){
			if ( this.nodes[en].x <(canvas.width/2) && (canvas.width/2) <(this.nodes[en].x+this.nodes[en].w) ){
				x=(canvas.width/2-player.width/2);
				this.nodes[en].x=x;
				this.nodes[en].draw();
				this.reward(en);
			    };
			};
	},
	
	reward : function(en){
		for(j=0; j<(bots.qtt+1); j++){
		let a=this.nodes[en].img ;
		let b=tabl.nodes[0][j].td.style.backgroundImage;
		let c = b.lastIndexOf(a);
		if (c!==-1){
			if (j==0){ 
			player.money=player.money+roulet.sum();
			document.getElementById("prize").innerHTML = "вы выиграли   " + roulet.sum() + " $";
			} else {
			bots["bot"+j].cash=bots["bot"+j].cash+roulet.sum();
			document.getElementById("prize").innerHTML = "Бот"+j+" Выиграл " + roulet.sum() + " $";
			  };
		    }; 
	    };	
		
	},
	
	gameEnd : function(){
		if (bots.bot1.looser==1 && bots.bot2.looser==1 && bots.bot3.looser==1) {
			endgamedisplay("Вы оставили всех ботов без штанов");
			setGame(gameEnd);
		};
		if (player.money==0) {
			endgamedisplay("Вы остались без штанов");
			setGame(gameEnd);
		};
	},
	
	shuffle : function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex].img;
        array[currentIndex].img = array[randomIndex].img;
        array[randomIndex].img = temporaryValue;
        }
        return array;
	},
	
	sum : function() {
	   var sum =0;
	   for (en in player.nodes){
		   a=parseInt(player.nodes[en].stavka,10);
		   sum=sum + a;
	   };
	   return sum;
	},
	
	move : function(){
     	for (en in this.nodes){
		var speed = 30 - starttime.timepassed/1000;
	//	console.log(speed);
		this.nodes[en].x=this.nodes[en].x + 1.5*speed;
		if (typeof this.nodes[en].draw == 'function'){
		    this.nodes[en].draw();
			 };
        };
	}
};
	
var _Enemy = function(x, y, w, h, img){
    this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.img = img;
};

_Enemy.prototype.draw = function(){
	drawImg(this.img, this.x, this.y, this.w, this.h)
};

