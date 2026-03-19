const soma = (a, b) => a + b;
const subtração = (a, b) => a - b;
const multilicação = (a, b) => a * b;
const divisão = (a, b) => (b !== 0 ? a / b : "Erro: Divisão por zero");


function calculadora(num1, num2, operacaoCallback) {
  console.log("Calculando...");
  const resultado = operacaoCallback(num1, num2);
  return resultado;
}


console.log("Resultado da Soma:", calculadora(10, 5, soma));
console.log("Resultado da Subtração:", calculadora(10, 5, subtração));
console.log("Resultado da Multiplicação:", calculadora(10, 5, multilicação));
console.log("Resultado da Divisão:", calculadora(10, 2, divisão));
