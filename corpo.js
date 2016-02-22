function Corpo(context){

	this.y0 = 0;
	this.y = 0;
	this.v0 = 0;
	this.v = 0;
	this.tempo = 0;
	this.g = 150;

	this.context = context;
	this.cor = 'black';
	this.raio = 20;
}

Corpo.prototype = {
	atualizar: function(tempo){
		var ctx = this.context;
		console.log(tempo);

		if ((this.y > ctx.canvas.height - this.raio) && this.v > 0){
			console.log('trocou')
			this.v *= -0.8;
			//this.tempo = 0;
		}

		this.tempo = tempo/1000.0;
		this.s0 = this.y;
		this.v0 = this.v;
		this.v = this.v0 + this.g * this.tempo;

		this.y = this.s0 + this.v0*this.tempo + this.g*Math.pow(this.tempo,2)/2;

		console.log(this);

	},
	desenhar: function(){
		var ctx = this.context;
		ctx.save();
		ctx.fillStyle = this.cor;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.raio, 0, 2*Math.PI, false);
		ctx.fill();
		ctx.restore();
	}
}