function Animacao(context, colisor){
	this.sprites = [];
	this.ligado = false;
	this.context = context;
	this.intervalo = 100;
}

Animacao.prototype = {
	novoSprite: function(sprite){
		this.sprites.push(sprite);
	},

	ligar: function(){
		this.ligado = true;
		this.proximoFrame();
	},

	desligar: function(){
		this.ligado = false;
	},

	proximoFrame: function(){
		if (!this.ligado) return;

		//Controle de tempo
		var agora = new Date().getTime();

		if (!this.ultimoTempo) this.ultimoTempo = agora;

		for (var i in this.sprites){
			this.sprites[i].atualizar(agora-this.ultimoTempo);
		}
		this.ultimoTempo = agora;

		this.limparTela();

		for (var i in this.sprites){
			this.sprites[i].desenhar();
		}

		var animacao = this;
		requestAnimationFrame(function(){
			animacao.proximoFrame();
		})
			
	},

	limparTela: function(){
		var ctx = this.context;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
}