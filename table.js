var tabl = {
  nodes : [],  
  columns : 0,
  rows : 4,

  generate : function(){
      for(var i=0; i<this.rows; i++){
         this.nodes[i] = [];
		 var tmp = new _td();
		 this.nodes[i][0] = tmp;
		 this.nodes[i][0].tr = document.createElement('tr');
		 this.nodes[i][0].td = document.createElement('td');
		 this.nodes[i][0].tr.appendChild(this.nodes[i][0].td);
		 this.nodes[i][0].td.id = "td"+i+0;
		 if(i==0){this.nodes[i][0].draw(i,0)};
		 table.appendChild(this.nodes[i][0].tr);
            for(var j=1; j<this.columns+1; j++){
				var tmp1 = new _td();
				this.nodes[i][j] = tmp1
				this.nodes[i][j].td = document.createElement('td');
				this.nodes[i][0].tr.appendChild(this.nodes[i][j].td);
				this.nodes[i][j].td.id = "td"+i+j;
				if(i==0){this.nodes[i][j].draw(i,j)};
            }; 
      };
  },
  
};
  
  var _td = function(tr,td){
	  this.td=td;
	  this.tr=tr;
  };
  
   _td.prototype.draw = function(i,j){
	   tabl.nodes[i][j].td.style.backgroundImage = "url(img"+j+".jpg)"
       tabl.nodes[i][j].td.style.backgroundRepeat = "no-repeat";
	   tabl.nodes[i][j].td.style.backgroundSize = "cover";
   };
 
 
  
  