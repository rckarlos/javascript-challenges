const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite sua idade: '));

if (idade > 60) {
    console.log('Você é uma pessoa idosa.');
} else if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.')
}
