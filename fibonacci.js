
function fibonacci(n) {

    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

let valorEscolhido = 3;
let armazenaFib = [];

for (let i = 0; i < 10; i++){
    armazenaFib.push(fibonacci(i));
}

let valorArmazenado;
for (let i = 0; i < armazenaFib.length; i++){
    if (armazenaFib[i] === valorEscolhido){
        valorArmazenado = armazenaFib[i];
        break;
    }
}

if (valorEscolhido === valorArmazenado) {
    console.log('O valor escolhido PERTENCE a sequência de Fibonacci.');
} else {
    console.log('O valor escolhido NÂO PERTENCE a sequência de Fibonacci');
}

