
// Crie um programa que peça ao usuário para inserir um número e o exiba na tela.

var prompt = require("prompt-sync")();

var numero = Number(prompt('Escreva um numero: '))

console.log(numero);


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Desenvolva um programa que calcule a soma de dois números inseridos pelo usuário.

var soma1 = Number(prompt('Digite um Numero: '))
var soma2 = Number(prompt('Digite outro numero: '))

console.log(soma1 + soma2);


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Elabore um programa que verifique se um número é par ou ímpar.

var parouimpar = Number(prompt('Digite um Numero e irei ver se é par ou impar: '))

if (parouimpar % 2 == 0){
    console.log('é par');    
} else{
    console.log('é impar');
}


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Faça um programa que receba três números e mostre o maior deles.

var maior = -99999999999999999

for(var i = 0; i<3; i++){
    var maior1 = Number(prompt('Digite tres numero e irei ver o maior: '));
    if (maior1 > maior){
        maior = maior1
    }
}
console.log(maior);


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Crie um programa que calcule o fatorial de um número.

var fator = Number(prompt('Digite um número para calcular o fatorial: '));
var resultado = 1;

for (let i = fator; i > 0; i--) {
    resultado *= i;
} 

console.log(resultado);


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// 

// Desenvolva um programa que converta graus Celsius para Fahrenheit.

var celsius = Number(prompt("Escreva um numero em graus celsius: "));

console.log('irá dar',((celsius * 9/5) + 32), '°F');


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// // Escreva um programa que imprima os primeiros N números primos.

var primo = Number(prompt("Escreva quantos números primos você quer: "));
var listaresultadoprimo = [2]; // Começamos com o número 2 na lista de primos

var num = 3; // Começamos a verificar a partir do número 3

while (listaresultadoprimo.length < primo) {
    var isPrime = true;
    for (var i = 0; i < listaresultadoprimo.length; i++) {
        if (num % listaresultadoprimo[i] === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        listaresultadoprimo.push(num);
    }
    num += 2; 
}

console.log(listaresultadoprimo);


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Faça um programa que conte quantas vogais há em uma palavra.

var vogais = prompt('digite qualquer coisa eu direi quantas vogais tem: ')
var vogalcontagem = 0 

for(let i = 0; i <= vogais.length; i++){
    if(vogais[i]=='a' || vogais[i]=='e' || vogais[i]=='i' || vogais[i]=='o' || vogais[i]=='u'){
        vogalcontagem++ 
    }
}
console.log(vogalcontagem);


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Crie um programa que inverta a ordem dos dígitos de um número.

var numeroteste =Number(prompt("Escreva um numero para eu escreve-lo ao contrario: ")) ;
var numeroInvertido = inverterDigitos(numeroteste);
console.log('O número invertido de', String(numeroteste), 'é', String(numeroInvertido));

function inverterDigitos(numeroteste: number): number {
    var numeroString = numeroteste.toString();
    var numeroInvertido = parseInt(numeroString.split('').reverse().join(''));
    return numeroInvertido;
}


console.log('\n');
console.log('------------------------------------------------------------------------------------------------------------');


// Elabore um programa que determine se um ano é bissexto.

var bissexto:number = Number(prompt('eu posso dizer para você se um ano é bissexto ou não, apenas diga o ano que eu direi se ele é bissexto: '))

if (bissexto > 1582) {
    if (bissexto % 4 === 0) {
        console.log('O seu ano é bissexto')
    } else {
        console.log('O seu ano não é bissexto')
    }
} else{
    console.log('O seu ano não pode ser bissexto pois apenas em Em 1582, o Papa Gregório criou o ano bissexto, tente novamente com essa informação')
}

console.log('-------------------------------------------------------------------------------------------------------------------')


// Desenvolva um programa que gere a sequência de Fibonacci até o N-ésimo termo.

var fibonacci: number = Number(prompt('Diga até que numero você quer que eu faça a sequencia de fibonacci : '))

fibonacci = fibonacci - 1

var fibonacio1 = 0;
var fibonacio2 = 1; 
var fibonacio3 = 0;

for (var i = 0; i <= fibonacci; i++) {
    fibonacio3 = fibonacio1 + fibonacio2;
    console.log(fibonacio3);

    fibonacio1 = fibonacio2
    fibonacio2 = fibonacio3
} 

console.log('-------------------------------------------------------------------------------------------------------------------')


// Faça um programa que verifique se uma palavra é um palíndromo.

function checarPalindromo(palavrapalin1: String, palavrapalin2: String): boolean {
    var verificarpalin = palavrapalin1.split('').reverse().join('')
    if (verificarpalin === palavrapalin2){
        return true
    } else {
        return false
    }
}

var transformar = String(prompt("Digite uma palavra pra verificar se é palindromo: "));
var  verificarpalin= checarPalindromo(transformar, transformar)

if (verificarpalin === true) {
    console.log('É um palindromo')
} else {
    console.log('Não é um palíndromo')
}
