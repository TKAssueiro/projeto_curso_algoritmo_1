/*
Var
// Seção de Declarações das variáveis
   valor1, valor2, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
// escreva("A proposta desse programa é calcular dois valores baseado na operação de sua escolha.")
   escreva("Digite o primeiro valor: ")
   leia(valor1)
   escreva("Digite a operação(+, -, *, /...): ")
   leia(operacao)
   escreva("Digite o segundo valor: ")
   leia(valor2)
   
   se operacao = "+" entao
      resultado := valor1 + valor2
   senao
      se operacao = "-" entao
         resultado := valor1 - valor2
      senao
         se operacao = "*" entao
            resultado := valor1 * valor2
         senao
         se operacao = "/" entao
            resultado := valor1 / valor2
            fimse
         fimse
      fimse
   fimse
   escreva("Resultado do cálculo é: ", resultado)

Fimalgoritmo
*/



function acaoBotao() {
   var valor1, valor2, resultado, operacao
   valor1 = prompt("Digite o primeiro valor: ")
   operacao = prompt("Digite a operação: ")
   valor2 = prompt("Digite o segundo valor: ")
   
   if (operacao == "+") {
      resultado = parseInt(valor1) + parseInt(valor2)
   }else if(operacao == "-"){
      resultado = parseInt(valor1) - parseInt(valor2)
   }else if(operacao == "*"){
      resultado = parseInt(valor1) * parseInt(valor2)
   }else if(operacao == "/"){
      resultado = parseInt(valor1) / parseInt(valor2)
   }
   
   document.getElementById("paragrafo").innerText = resultado       
}

