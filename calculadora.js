let valorAtual = '0';
let primeiroValor = null;
let operacaoPendente = null;

const display = document.getElementById('display');

const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : "Erro"
};

function atualizarDisplay() {
    display.innerText = valorAtual;
}

function addNumero(num) {
    if (valorAtual === '0') valorAtual = num;
    else valorAtual += num;
    atualizarDisplay();
}

function prepararOperacao(op) {
    primeiroValor = parseFloat(valorAtual);
    operacaoPendente = op;
    valorAtual = '0';
}

function calcular() {
    if (operacaoPendente && primeiroValor !== null) {
        const segundoValor = parseFloat(valorAtual);
        const resultado = operacoes[operacaoPendente](primeiroValor, segundoValor);
        
        valorAtual = String(resultado);
        operacaoPendente = null;
        primeiroValor = null;
        atualizarDisplay();
    }
}

function limpar() {
    valorAtual = '0';
    primeiroValor = null;
    operacaoPendente = null;
    atualizarDisplay();
}

function apagar() {
    valorAtual = valorAtual.slice(0, -1) || '0';
    atualizarDisplay();
}
