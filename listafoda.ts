var prompt = require('prompt-sync')();

// Escreva com suas palavras para que serve o comando IF

// R: o comando IF ou "Se" serve para verificar se uma condição é verdadeira ou falsa.



// //Faça um programa que peça um nome de usuário e verifique SE o usuario digitado é 'Admin'. Caso seja printe 'Bem vindo', caso contrário printe 'Usuário não encontrado'

// var ADM = String(prompt('Insira seu nome: '))

// if (ADM == 'Admin'){
//     console.log('Bem Vindo')
// } else{
//     console.log('Usuário não encontrado');
// }



// Escreva com suas palavras para que serve o comando While e de um exemplo prático de sua usabilidade para resolução de problemas lógicos.

// R: o comando While ou "Enquanto" serve para repetir certos codigos enquanto uma condição for verdadeira.



// 4. Faça um loop usando while ou for que conte de 0 a 10

// for (let i = 0; i<=10; i++){
//   console.log(i)
// }

// var conteador = 0

// while(conteador <= 10){
//     console.log(conteador);
//     conteador++
// }


// 5. Faça um loop que conte de 0 até N, sendo que N é um numero que o usuário escolhe

// var escolhanum = Number(prompt("Insira um numero: "))

// for (let i = 0; i <= escolhanum; i++){
//     console.log(i)
// }


// 6. Faça um loop que conte de 100 até 1.

// for (let i = 100; i >= 1; i--){
//     console.log(i);
// }



// 7. Faça um loop que some todos os numeros de 1 até 100.

// var soma = 0

// for (let i = 0; i <= 100; i++){
//     soma = soma + i
//     console.log(soma)
// }


// 8. Faça um loop que some todos os numeros PARES de 1 até 100.

// var soma = 0
// for (let i = 0; i <= 100; i++){
//     if (i % 2 ==0){
//         soma = i + soma
//         console.log(soma);
        
//     }
// }

// 9. Faça um loop que printe apenas os numeros que são divisíveis por 3 e 5

var numero = Number(prompt("Digite um Numero: "))
for (let i = 0; i < numero; i++){
    if (numero % 3 == 0 && numero % 5 == 0){
        console.log(i);
    }
}


// 10. Explique com suas palavras o que é uma matriz

// Uma matriz é um conjunto de listas que formam uma matriz com colunas e linhas. 



// 11. Faça uma matriz manualmente 4 x 4 com numeros aleatorios a sua escolha

// const matriz = [
//   [6,6,6,9],
//   [7,6,9,6],
//   [7,6,6,6],
//   [7,2,4,6]
// ];


// 12. Acesse o 2° item da 1° linha da matriz

// console.log(matriz[0][1])



// 13. Acesse o 3° item da 4° linha da matriz

// console.log(matriz[3][2])



// 14. Faça um loop FOR que leia as linhas da matriz

// for(let i of matriz){
//   console.log(i)
// }



// 15. Faça um loop FOR dentro de um loop FOR para ler item por item de uma matriz

// for(let x of matriz){
//   for(let y of x){
//     console.log(y)
//   }
// }



// 16. Escreva com suas palavras o que é um função

// Uma função é um bloco de comando fechado que armazena comandos em sequencia, podendo deixar valores da propria função indefinidos para serem definidos posteriormente fora da mesma



// 17. Faça uma função que printe 'Ola mundo' e chame ela

// function ola(){
//   console.log("Ola mundo");
// }

// ola() 



// 18. Faça uma função que receba um texto como parametro e mostre o print 'O texto de parametro é: ' e concatene com o texto

// function Concatena(texto){
//   console.log('O texto de parametro é:',texto);
// }

// Concatena('Beston')



// 19. Faça uma função que receba como parametro o texto '10.58' e que ele retorne o número 10.58.

function textopranumero(texto:string){
  var numero = parseFloat(texto)
  return numero
}

console.log(textopranumero('10.58'))