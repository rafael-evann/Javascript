function inicio(){
	{
		let codigoVoto,
			votosTotais = 0, 
			votosCandidato1 = 0, 
			votosCandidato2 = 0, 
			votosCandidato3 = 0,        
			votosBranco = 0, 
			votosNulo = 0,
			votosTotaisGanhador = 0
        
		
		let percentualVotosCandidato1 = 0.0, 
			percentualVotosCandidato2 = 0.0,
			percentualVotosCandidato3 = 0.0,
			percentualVotosBranco = 0.0,
			percentualVotosNulo = 0.0,
			percentualGanhador = 0.0
		
		let nomeCandidato1 = prompt("Digite o nome do candidato:"),
			nomeCandidato2 = prompt("Digite o nome do candidato:"),
			nomeCandidato3 = prompt("Digite o nome do candidato:"),
			nomeGanhador = ""
		
		let 
			opcaoInvalida = false,
			empate = false
		
		let HoraInicio=HoraUrnaInicio();

		// Laço responsável pela votação
		do{
			
			console.clear();
			
			if (opcaoInvalida) {
				console.log("** Opção inválida! \n\n");
				opcaoInvalida = false;
			}
			console.log(HoraInicio);
			console.log("** Opções de voto: \n\n");
			console.log("1 | ", nomeCandidato1, "\n");
			console.log("2 | ", nomeCandidato2, "\n");
			console.log("3 | ", nomeCandidato3, "\n");
			console.log("5 | Voto em branco \n");
			console.log("8 | Voto nulo \n");
			console.log("0 | Digete o pin para encerrar a votação \n\n");
	
            
			codigoVoto=(prompt("Digite agora o código do seu voto:"));
            
            if(codigoVoto !== null){
                codigoVoto= parseInt(codigoVoto);
            }else{
                break;
            }
	
		        switch(codigoVoto) {
				case 200333:
					break;
				case 1:
                    ConfirmaVoto ();
					votosCandidato1++;
					votosTotais++;
					break;
				case 2:
                    ConfirmaVoto ();
					votosCandidato2++;
					votosTotais++;
					break;
				case 3:
                    ConfirmaVoto ();
					votosCandidato3++
					votosTotais++;
					break;
			    case  5:
                    ConfirmaVoto ();
					votosBranco++;
					votosTotais++;
					break;
				case 8:
                    ConfirmaVoto ();
					votosNulo++;
					votosTotais++;
					break;
				default:
					opcaoInvalida = true;
                    break;
			}
		} while (codigoVoto != 200333)

		HoraTermino=HoraUrnaTermino();

		
		// determinar o ganhador, com situação de empate
		if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
			
			nomeGanhador = nomeCandidato1
			votosTotaisGanhador = votosCandidato1 + votosBranco
		} else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
			
			nomeGanhador = nomeCandidato2
			votosTotaisGanhador = votosCandidato2 + votosBranco
		} else if  (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
			
			nomeGanhador = nomeCandidato3;
			votosTotaisGanhador = votosCandidato3 + votosBranco;
		} else {
			empate = true;
		}
		
		console.clear()
		console.log("** Resultado da apuração desta urna\n\n")
		
		// Esta condição evita a divisão por 0 caso a votação seja encerrada sem nenhum voto
		if (votosTotais != 0) {
			
			percentualGanhador = ((votosTotaisGanhador) /(votosTotais)) * 100.0 
		
			console.log("Votos totais: ", votosTotais, "\n")
			
			console.log("Votos no candidato ",nomeCandidato1, ": ", votosCandidato1, " (", 
				((votosCandidato1) / (votosTotais) * 100.0).toFixed(2), "%)\n")
			
            console.log("Votos no candidato ",nomeCandidato2, ": ", votosCandidato2, " (", 
				(votosCandidato2) / (votosTotais) * 100.0.toFixed(2), "%)\n")
			
            console.log("Votos no candidato ",nomeCandidato3, ": ", votosCandidato3, " (", 
				(votosCandidato3) / (votosTotais) * 100.0.toFixed(2), "%)\n")	
			
            console.log("Votos em branco: ", votosBranco, " (", 
				(votosBranco) / (votosTotais) * 100.0.toFixed(2), "%)\n")
			
            console.log("Votos nulos: ", votosNulo, " (", 
				(votosNulo) / (votosTotais) * 100.0.toFixed(2), "%)\n\n")
				
		} else{
			
			console.log("** Nenhum voto registrado\n");
			
		}

		// se nao falso
		if (!empate) {
			console.log("** Ganhador nesta urna\n\n")
			console.log(nomeGanhador, " com ", votosTotaisGanhador, " votos (", 
				percentualGanhador, "%) somados os votos em branco\n")
		} else {
			console.log("** Não foi possível determinar um ganhador nesta urna\n\n")
		}
		console.log(HoraInicio);
		console.log(HoraTermino);
		
		
	}
}
function ConfirmaVoto (){
    
    let audio = new Audio ('confirma-urna.mp3');
    setTimeout=2000;
    audio.play();
}
function HoraUrnaInicio(){
	var dataAtual = new Date();
	var dia = dataAtual.getDate();
	var mes = (dataAtual.getMonth() + 1);
	var ano = dataAtual.getFullYear();
	var horas = dataAtual.getHours();
	var minutos = dataAtual.getMinutes();
	return "A votação começou no dia:" + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.";
}
function HoraUrnaTermino(){
	var dataAtual = new Date();
	var dia = dataAtual.getDate();
	var mes = (dataAtual.getMonth() + 1);
	var ano = dataAtual.getFullYear();
	var horas = dataAtual.getHours();
	var minutos = dataAtual.getMinutes();
	return "A votação acabou no dia: " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.";
}

