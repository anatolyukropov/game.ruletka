var player = {
	width : 100,
	height : 100,
    money : 3000,
    nodes : [],
	
	add : function(x, y, w, h, stavka, img){
		var tmp = new _pl(x, y, w, h, stavka, img);
		this.nodes.push(tmp);
	},
	
	generate : function (stavka, img){
		x = (this.nodes.length*100);
		y = 0;
		w = this.width;
		h = this.height; 
		this.add(x, y, w, h, stavka, img);
	},
	
	chance : function (stavka){
		sum = roulet.sum();
	    chance= Math.round(100*(stavka/sum));
		this.write(3,0,chance+"%");
		bots.chance();
	}, 
	
	bet : function(stavka){
		if (tabl.nodes[2][0].td.innerHTML!=""){ 
		stavka = parseInt(tabl.nodes[2][0].td.innerHTML)+stavka;
		};
		this.write(2,0,stavka);
		this.money = this.money-stavka;
		this.cash(this.money);
		this.chance(stavka);
	},
	
	write : function(i,j,val){
		tabl.nodes[i][j].td.innerHTML = val;
		tabl.nodes[i][j].td.style.textAlign = "center";
		tabl.nodes[i][j].td.style.fontSize = "30px";
		tabl.nodes[i][j].td.style.fontWeight = "900";
	},
    
	cash : function(money){
		this.write(1,0,money);
	},
	
    draw : function(){
     	for (en in this.nodes){
			if (typeof this.nodes[en].draw == 'function'){
		    this.nodes[en].draw();
			 };
	    };
	},
	
	clear : function(){
		tabl.nodes[2][0].td.innerHTML = "";
		tabl.nodes[3][0].td.innerHTML = "";
	},
	
	proverka : function(stavka){
		let reg = /[0-9]{1,4}/;
		if (reg.test(stavka)){
		     stavka = parseInt(stavka);
		     if (stavka < 0 || stavka > 1000 ){
			    alert("Хитрожипый ставь от 0 до 1000");
			 } else if (stavka > parseInt(tabl.nodes[1][0].td.innerHTML)) {
				alert("У вас не хватает денег на данную ставку");
			 } else if (tabl.nodes[2][0].td.innerHTML!="") {
				if (parseInt(tabl.nodes[2][0].td.innerHTML)+stavka > 1000) {
					var a = 1000-parseInt(tabl.nodes[2][0].td.innerHTML);
					alert("Вы не можете ставить больше 1000 за раунд, можно доставить: "+a);
			    } else {
					player.generate(stavka, 'img0.jpg');
					player.bet(stavka); 
			           };
		     } else {
				player.generate(stavka, 'img0.jpg');
				player.bet(stavka);
				   };
		} else {
			 alert("Хитрожипый ставь от 0 до 1000");
			 };
	},
	
	move : function(){
     	for (en in this.nodes){
		var speed = 30 - starttime.timepassed/1000;
	//	console.log(speed);
		this.nodes[en].x=this.nodes[en].x + 1.5*speed;
		if (this.nodes[en].x > 1100) {
		  this.nodes[en].x=0;	
		};
		this.nodes[en].draw();
        };
	}
};

  var _pl = function(x,y,w,h, stavka, img){
	  this.x=x;
	  this.y=y;
	  this.w=w;
	  this.h=h;
	  this.stavka=stavka;
	  this.img=img;
    };

    _pl.prototype.draw = function(){
		drawImg(this.img, this.x, this.y, this.w, this.h)
    };
    
  