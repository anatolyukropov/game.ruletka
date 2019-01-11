var bots = {
	qtt : 0,
	
	bot1 : {
		cash : 3000,
		looser : 0,
	},
	bot2 : {
		cash : 3000,
		looser : 0,
	},
	bot3 : {
		cash : 3000,
		looser : 0,
	},
	
	cash : function (){
		j=this.qtt;
		while (j>0){
		this.write(1,j, this["bot"+j].cash);
		j--;
		};
	},
	
	chance : function (){
		sum = roulet.sum();
		j=this.qtt;
		while (j>0){
		a=tabl.nodes[2][j].td.innerHTML;
	    chance= Math.round(100*(a/sum));
		this.write(3,j,chance+"%");
		j--;
		};
	},
	
	write : function(i,j,val){
		tabl.nodes[i][j].td.innerHTML = val;
		tabl.nodes[i][j].td.style.textAlign = "center";
		tabl.nodes[i][j].td.style.fontSize = "30px";
		tabl.nodes[i][j].td.style.fontWeight = "900";
	},
	/*
	bet : function (){
		j=this.qtt;
		while (j>0){
		stavka = Math.floor(Math.random()*(1000-10))+10;
		this["bot"+j].cash=this["bot"+j].cash-stavka;
		img = "img"+j+".jpg";
		player.generate(stavka, img);
		this.write(2,j,stavka);
		j--;
	    };
		this.cash();
		this.chance();
	} */
	bet : function (){
		j=this.qtt;
		while (j>0){
			if (this["bot"+j].cash > 1000) {
				stavka = Math.floor(Math.random()*(1000-100))+100;
				this["bot"+j].cash=this["bot"+j].cash-stavka;
				img = "img"+j+".jpg";
				player.generate(stavka, img);
				this.write(2,j,stavka);
				j--;
				} else if (this["bot"+j].cash < 1000 && this["bot"+j].cash > 300 ) {
					let a = this["bot"+j].cash;
					stavka = Math.floor(Math.random()*(a-100))+100;
					this["bot"+j].cash=this["bot"+j].cash-stavka;
					img = "img"+j+".jpg";
					player.generate(stavka, img);
					this.write(2,j,stavka);
					j--;
				} else if (this["bot"+j].cash <= 300 && this["bot"+j].cash > 0 ) {
					stavka = this["bot"+j].cash;
					this["bot"+j].cash=this["bot"+j].cash-stavka;
					img = "img"+j+".jpg";
					player.generate(stavka, img);
					this.write(2,j,stavka);
					j--;
				} else {
					this.write(2,j,0);
					this["bot"+j].looser = 1;
				/*	stavka = this["bot"+j].cash;
					this.write(2,j,stavka); */
					j--;
				};
			};
		this.cash();
		this.chance();
	}
};
