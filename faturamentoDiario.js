
	(async function (){
		try {
			const response = await fetch('dados.json');
			const jsonData = await response.json();
				
			const minfaturamento = jsonData.reduce(function(prev, current) { 
				return prev.valor < current.valor ? prev : current; 
			});
			
			const maxfaturamento = jsonData.reduce(function(prev, current) { 
				return prev.valor > current.valor ? prev : current; 
			});
			
			let soma = 0;
			let diaSemFaturamento = 0;
			for (let i = 0; i < jsonData.length; i++) {
				soma += jsonData[i].valor;
				if (jsonData[i].valor === 0){
					diaSemFaturamento += 1;
				}
			}

			let mediaMensal = soma / (jsonData.length-diaSemFaturamento);
			let diaFaturamentoAcimaMedia = 0;
			
			for (let i = 0; i < jsonData.length; i++) {
				if (jsonData[i].valor > mediaMensal){
					diaFaturamentoAcimaMedia += 1;
				}
			}
			
				
			console.log("Menor valor de faturamento ocorrido em um dia do mês: R$", minfaturamento.valor);
			console.log("Maior valor de faturamento ocorrido em um dia do mês: R$", maxfaturamento.valor);
			console.log('Número de dias com faturamento acima da média mensal: '+ diaFaturamentoAcimaMedia);

				
		} catch (e) {
			console.log('Error!')
		}

	})();