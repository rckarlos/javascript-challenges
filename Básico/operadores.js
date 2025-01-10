const prompt = require('prompt-sync')();

const num1 = parseInt(prompt('Digite o primeiro número: '));
const num2 = parseInt(prompt('Digite o segundo número: '));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Divisão por zero não é permitida';

console.log(`RESULTADO:
    Soma = ${soma}
    Subtração = ${subtracao}
    Multiplicação = ${multiplicacao}
    Divisão = ${divisao}`);
