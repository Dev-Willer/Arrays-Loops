const paises = ['Brasil', 'Alemanha', 'Israel', 'França', 'Espanha']; // Paises 5 // Meu array
                                                                     //  Índice 4

paises [paises.length] = 'Estados Unidos';    // --> Estou acessando a ultima posição e inserindo mais um país...
console.log(paises);

paises[4] = 'Emirados Arábes'; // Estou alterando o meu país da 4ª posição para 'Emirados Arábes', neste caso saiu Espanha, pois acessando pelo índice ela é o 4º país..
console.log(paises);

console.log(paises[5]); // Imprimindo o último país da lista

console.log(paises[1]); // Imprimindo o segundo país da lista também pelo índice

console.log(paises[2]); // Imprimindo o país de Inidice 2...

