const prompt = require('prompt-sync')();
function saudacao(nome){
    console.log('Oi '+ nome);
}

function entradaNome(callback){
    let nome = prompt('Digite seu nome: ');
    callback(nome);
}

entradaNome(saudacao);