let perguntas = [

{
  	titulo: 'O que significa HTML?',
	alternativas:['home tool markup language','hyper text markup language', 'hyperlinks and text markup language'],	
	correta: 1
},

{
	titulo: 'Qual time com mais campionatos brasileiros?',
  alternativas:['Palmeiras','Vasco', 'Goiás'],	
  correta: 0
},

{
	titulo: 'Qual destes estilos cervejas tem o tradicionalmente o maior Indice de IBU?',
  alternativas:['Witbier','Wiess', 'IPA'],	
  correta: 2
},
{
	titulo: 'Qual o maior artilheiro da historia do futebol em gols oficiais?',
  alternativas:['Pelé','Lionel Messi', 'Cristiano Ronaldo'],	
  correta: 2
},
{
	titulo: 'Qual a combinação de cartas mais forte no poker?',
  alternativas:['Royal Straight Flush','Four-of-a-Kind', 'Full House'],	
  correta: 0 
}
]

let appO = {
 start: function(){

	this.atualP = 0;
	this.totalP= 0;

	let alts=document.querySelectorAll('.alternativa');
	alts.forEach((element,index)=>{
		
		element.addEventListener("click", ()=>{			
			this.checaResposta(index);
		})
	})

	this.atuazPontos();

	appO.mostraquestao(perguntas[this.atualP]);
},
 mostraquestao: function(q){
	//mostra qual questão estamos exibindo
	this.qatual = q;
	//mostrando titulo
	let titleDiv = document.getElementById('titulo');
	titleDiv.textContent = q.titulo;
	//mostrando as alternativas
	let alts=document.querySelectorAll('.alternativa');
	alts.forEach(function(element,index){
		element.textContent=q.alternativas[index];
		
	})
	
},
proximaPerg: function(){
	this.atualP++;
	if(this.atualP == perguntas.length){
		this.atualP = 0;
	}

},
checaResposta: function(user){
	if(this.qatual.correta == user){
		console.log("correta")
		this.totalP++;
		this.mostraR();
	}else{
		console.log("errada")
		this.mostraR();
	}
	this.atuazPontos();
	this.proximaPerg();
	this.mostraquestao(perguntas[this.atualP]);

},
atuazPontos: function(){
	let scoreDp = document.getElementById('pontos');
	scoreDp.textContent =`Sua pontuação é:  ${this.totalP}`;

	

},

mostraR: function(correto){
	let resultDiv = document.getElementById('result');
	let result= '';

	if(correto== true){
		result = 'resposta correta';
	}else{
		let pergunta = perguntas[this.atualP];

		let cindice = pergunta.correta;

		let ctexto = pergunta.alternativas[cindice];
		result = `Resposta correta é:  ${ctexto}`;
	}

	resultDiv.textContent =  result;
}


}

appO.start();


function somar1(){
	var p1 = parseInt(document.getElementById('placar01').value);
	document.getElementById('placar01').value = p1+1;
}

function somar2(){
	var p1 = parseInt(document.getElementById('placar02').value);
	document.getElementById('placar02').value = p1+1;
}