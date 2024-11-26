const campuNome = prompt("Qual é seu nome?");
const campuIdade = prompt("Quantos anos você tem?");
const campuLinguagemTec = prompt("Qual linguagem de programação voçê está estudando?");

alert(`Olá ${campuNome}, voçê tem ${campuIdade} anos e já está estudando ${campuLinguagemTec}! "Parabéns continua firme que as coisas vão melhorar!`);

const pergunta = Number(prompt(`Voçê gosta de estudar ${campuLinguagemTec}? Responda com o número 1 para Sim ou 2 para Não.`));

function duvidaTec () {
if (pergunta === 1) {
    alert(`Muito bom ${campuNome}! Continue estudando e voçê terá muito sucesso.`);
} else if (pergunta === 2) {
    alert(`Ahh que pena ${campuNome}... Já tentou aprender outras linguagens?`);
} else {
    alert(`Opção incorreta, digiti novamente ${campuNome}`)
}
}

duvidaTec();