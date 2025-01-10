const prompt = require('prompt-sync')();

const nome = prompt('Qual seu nome? ');

function cumprimentar(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a).`)
}

cumprimentar(nome);
