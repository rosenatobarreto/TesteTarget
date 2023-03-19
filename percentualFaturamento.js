const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

const faturamentoTotal = 180759.98;

const percentuaisEstados = {};
for (const estado in faturamentoEstados) {
  const valor = faturamentoEstados[estado];
  const percentual = (valor / faturamentoTotal) * 100;
  percentuaisEstados[estado] = percentual.toFixed(2) + "%";
}

console.log("Percentual de representação de cada estado: ");
for (const estado in percentuaisEstados) {
  console.log(`${estado}: ${percentuaisEstados[estado]}`);
}
